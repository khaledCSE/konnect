import { auth } from '@clerk/nextjs/server';
import Image from 'next/image';
import Link from 'next/link';

import prisma from '@/lib/prisma.client';

const ProfileCard = async () => {
  const { userId } = await auth();

  if (!userId) return null;

  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
    include: {
      _count: {
        select: {
          followers: true,
        },
      },
    },
  });

  if (!user) return null;

  return (
    <div className="home-section flex flex-col gap-6 text-sm">
      <div className="relative h-20">
        <Image
          src={user?.cover ?? '/noCover.png'}
          alt="cover"
          fill
          className="rounded-md object-cover"
        />
        <Image
          src={user?.avatar ?? '/noAvatar.png'}
          alt="avatar"
          width={48}
          height={48}
          className="absolute inset-x-0 -bottom-6 z-10 m-auto size-12 rounded-full object-cover ring-1 ring-white"
        />
      </div>

      <div className="flex h-20 flex-col items-center gap-2">
        <span className="font-semibold">{(user.name && user.surname) ? `${user.name} ${user.surname}` : user.username}</span>
        <div className="flex items-center gap-4">
          <div className="flex">
            <Image
              src="https://images.pexels.com/photos/1387037/pexels-photo-1387037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="avatar"
              width={12}
              height={12}
              className="size-3 rounded-full object-cover"
            />
            <Image
              src="https://images.pexels.com/photos/1387037/pexels-photo-1387037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="avatar"
              width={12}
              height={12}
              className="size-3 rounded-full object-cover"
            />
            <Image
              src="https://images.pexels.com/photos/1387037/pexels-photo-1387037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="avatar"
              width={12}
              height={12}
              className="size-3 rounded-full object-cover"
            />
          </div>
          <span className="text-sm text-gray-500">
            {user?._count?.followers ?? 0}
            {' '}
            Followers
          </span>
        </div>
        <Link
          href={`/profile/${user.username}`}
          className="rounded-md bg-brand p-2 text-sm text-white hover:bg-brand-600"
        >
          My Profile
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
