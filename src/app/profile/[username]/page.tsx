import { auth } from '@clerk/nextjs/server';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import Feed from '@/components/homepage/Feed';
import LeftMenu from '@/components/homepage/LeftMenu';
import RightSection from '@/components/rightSection';
import prisma from '@/lib/prisma.client';

type Params = {
  params: Promise<{ username: string }>
}

const ProfilePage = async ({ params }: Params) => {
  const { username } = await params;

  const user = await prisma.user.findFirst({
    where: { username },
    include: {
      _count: {
        select: {
          followers: true,
          followings: true,
          posts: true,
        },
      },
    },
  });

  if (!user) return notFound();

  // * Block check
  const { userId: loggedInUserId } = await auth();

  if (!loggedInUserId) return notFound();

  let isBlocked = false;

  const res = await prisma.block.findFirst({
    where: {
      blockerId: user.id,
      blockedId: loggedInUserId,
    },
  });

  if (res) isBlocked = true;

  if (isBlocked) {
    return notFound();
  }

  return (
    <div className="flex gap-6 py-6">
      {/* Left */}
      <div className="hidden w-1/5 xl:block">
        <LeftMenu type="profile" />
      </div>

      {/* Center */}
      <div className="w-full lg:w-[70%] xl:w-1/2">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="relative h-64 w-full">
              <Image
                src={user?.cover ?? '/noCover'}
                alt="Cover photo"
                fill
                className="rounded-md object-cover"
              />
              <Image
                src={user?.avatar ?? '/noAvatar.png'}
                alt="Profile photo"
                width={128}
                height={128}
                className="absolute inset-x-0 -bottom-16 m-auto size-32 rounded-full object-cover ring-4 ring-white"
              />
            </div>
            <h1 className="mb-4 mt-20 text-2xl font-medium">
              {(user.name && user.surname) ? `${user.name} ${user.surname}` : user.username}
            </h1>
            <div className="mb-4 flex items-center justify-center gap-12">
              <div className="flex flex-col items-center">
                <span className="font-medium">{user._count.posts}</span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">{user._count.followers}</span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">{user._count.followings}</span>
                <span className="text-sm">Following</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>

      {/* Right */}
      <div className="hidden w-[30%] lg:block">
        <RightSection user={user} />
      </div>
    </div>
  );
};

export default ProfilePage;
