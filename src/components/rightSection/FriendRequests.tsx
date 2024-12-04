import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';

import FriendRequestList from '@/components/rightSection/FriendRequestList';
import prisma from '@/lib/prisma.client';

const FriendRequests = async () => {
  const { userId } = await auth();

  if (!userId) return null;

  const friendRequests = await prisma.followRequest.findMany({
    where: {
      receiverId: userId,
    },
    include: {
      sender: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div className="home-section text-sm">
      {/* Top */}
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">Friend Requests</span>
        <Link href="/" className="text-xs text-brand">See All</Link>
      </div>
      {/* Bottom */}
      <FriendRequestList friendRequests={friendRequests} />
    </div>
  );
};

export default FriendRequests;
