import { auth } from '@clerk/nextjs/server';
import { User } from '@prisma/client';
import {
  BriefcaseBusiness,
  Calendar,
  GraduationCap,
  Link as LinkIcon,
  MapPin,
} from 'lucide-react';
import Link from 'next/link';

import UpdateUserInfo from '@/components/rightSection/user/UpdateUserInfo';
import UserInfoCardInteraction from '@/components/rightSection/user/UserInfoCardInteraction';
import prisma from '@/lib/prisma.client';

type Props = {
  user: User
}

const UserInfoCard = async ({ user }: Props) => {
  const joinedDate = new Date(user.createdAt);

  const formattedDate = joinedDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  let isBlocked = false;
  let isFollowing = false;
  let isFollowRequestPending = false;

  const { userId: currentUserId } = await auth();

  if (currentUserId) {
    const blockRes = await prisma.block.findFirst({
      where: {
        blockedId: user.id,
        blockerId: currentUserId,
      },
    });

    if (blockRes) isBlocked = true;

    const followerRes = await prisma.follower.findFirst({
      where: {
        followerId: currentUserId,
        followingId: user.id,
      },
    });

    if (followerRes) isFollowing = true;

    const followRes = await prisma.followRequest.findFirst({
      where: {
        senderId: user.id,
        receiverId: currentUserId,
      },
    });

    if (followRes) isFollowRequestPending = true;
  }

  return (
    <div className="home-section text-sm">
      {/* Top */}
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">User Information</span>
        {currentUserId === user?.id ? (
          <UpdateUserInfo />
        )
          : (<Link href="/" className="text-xs text-brand">See All</Link>)}
      </div>

      {/* Bottom */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">{(user.name && user.surname) ? `${user.name} ${user.surname}` : user.username}</span>
          <span className="text-sm">
            @
            {user.username}
          </span>
        </div>
        {user.description && (
          <p>
            {user.description}
          </p>
        )}
        {user.city && (
          <div className="flex items-center gap-2">
            <MapPin />
            <span>
              Living in
              {' '}
              <b>{user.city}</b>
            </span>
          </div>
        )}
        {user.school && (
          <div className="flex items-center gap-2">
            <GraduationCap />
            <span>
              Went to
              {' '}
              <b>{user.school}</b>
            </span>
          </div>
        )}
        {user.work && (
          <div className="flex items-center gap-2">
            <BriefcaseBusiness />
            <span>
              Works at
              {' '}
              <b>{user.work}</b>
            </span>
          </div>
        )}

        <div className="flex items-center justify-between">
          {user.website && (
            <div className="flex items-center gap-1">
              <LinkIcon />
              <Link
                href={user.website}
                className="font-medium text-brand"
              >
                {user.website}
              </Link>
            </div>
          )}

          <div className="flex items-center gap-1">
            <Calendar />
            <span className="font-medium">
              Joined
              {' '}
              {formattedDate}
            </span>
          </div>
        </div>
        {currentUserId !== user?.id && (
          <UserInfoCardInteraction
            userId={user.id}
            isFollowRequestPending={isFollowRequestPending}
            isFollowing={isFollowing}
            isUserBlocked={isBlocked}
          />
        )}
      </div>
    </div>
  );
};

export default UserInfoCard;
