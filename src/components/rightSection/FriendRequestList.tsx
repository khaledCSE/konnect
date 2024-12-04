'use client';

import { FollowRequest, User } from '@prisma/client';
import { CircleCheckBig, CircleX } from 'lucide-react';
import Image from 'next/image';
import { useOptimistic, useState } from 'react';

import { acceptFriendRequest, declineFriendRequest } from '@/lib/actions/followOrBlock';

interface Props {
  friendRequests: (FollowRequest & {
    sender: User
  })[]

}

const FriendRequestList = ({ friendRequests }: Props) => {
  const [requestState, setRequestState] = useState(friendRequests);

  const [optimisticRequests, removeOptimisticRequest] = useOptimistic(
    requestState,
    (state, value: number) => state.filter((req) => req.id !== value),
  );

  const acceptRequest = async (requestId: number, userId: string) => {
    removeOptimisticRequest(requestId);

    try {
      await acceptFriendRequest({ userId });

      setRequestState((prev) => prev.filter((req) => req.id !== requestId));
    } catch (error) {
      console.error(error);
    }
  };

  const declineRequest = async (requestId: number, userId: string) => {
    removeOptimisticRequest(requestId);

    try {
      await declineFriendRequest({ userId });

      setRequestState((prev) => prev.filter((req) => req.id !== requestId));
    } catch (error) {
      console.error(error);
    }
  };

  if (optimisticRequests.length <= 0) return <p>No Friend Requests</p>;

  return (
    <>
      {optimisticRequests.map(({
        id, sender: {
          id: senderId,
          avatar,
          name,
          surname,
          username,
        },
      }) => (
        <div className="mt-3 flex items-center justify-between" key={id}>
          <div className="flex items-center gap-4">
            <Image
              src={String(avatar)}
              alt="Avatar"
              width={40}
              height={40}
              className="size-10 rounded-full object-cover"
            />
            <span>
              {(name && surname) ? `${name} ${surname}` : `@${username}`}
            </span>
          </div>
          <div className="flex justify-end gap-3">
            <form action={() => acceptRequest(id, senderId)}>
              <button type="submit">
                <CircleCheckBig className="cursor-pointer text-brand" />
              </button>
            </form>

            <form action={() => declineRequest(id, senderId)}>
              <button type="submit">
                <CircleX className="cursor-pointer text-red-500" />
              </button>
            </form>
          </div>
        </div>
      ))}
    </>
  );
};

export default FriendRequestList;
