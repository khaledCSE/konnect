'use client';

import { useOptimistic, useState } from 'react';

import { blockUser, followUser } from '@/lib/actions/followOrBlock';

interface Props {
  userId: string
  // currentUserId: string
  isUserBlocked: boolean
  isFollowing: boolean
  isFollowRequestPending: boolean
}

type Optimistic_Switch_Type = 'follow' | 'block'

const UserInfoCardInteraction = ({
  userId,
  // currentUserId,
  isFollowRequestPending,
  isFollowing,
  isUserBlocked,
}: Props) => {
  const [userState, setUserState] = useState({
    followRequestPending: isFollowRequestPending,
    following: isFollowing,
    blocked: isUserBlocked,
  });

  const [optimisticUserState, switchOptimisticState] = useOptimistic(
    userState,
    (state, switchType: Optimistic_Switch_Type) => (switchType === 'follow' ? ({
      ...state,
      following: state.following && false,
      followRequestPending: !!(!state.following && !state.followRequestPending),
    }) : ({
      ...state,
      blocked: !state.blocked,
    })),
  );

  const follow = async () => {
    switchOptimisticState('follow');
    try {
      await followUser(userId);
      setUserState((prev) => ({
        ...prev,
        following: prev.following && false,
        followRequestPending: !!(!prev.following && !prev.followRequestPending),
      }));
    } catch (error) {
      console.error(error);
    }
  };

  const block = async () => {
    switchOptimisticState('block');
    try {
      await blockUser(userId);
      setUserState((prev) => ({
        ...prev,
        blocked: !prev.blocked,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  let actionText = '';

  if (optimisticUserState.following) {
    actionText = 'Following';
  } else if (optimisticUserState.followRequestPending) {
    actionText = 'Friend Request Sent';
  } else {
    actionText = 'Follow';
  }

  return (
    <>
      <form action={follow}>
        <button
          type="submit"
          className="w-full rounded-md bg-brand p-2 text-sm text-white hover:bg-brand-600"
        >
          {actionText}
        </button>
      </form>
      <form action={block} className="self-end">
        <button type="submit">
          <span className="cursor-pointer text-xs text-red-400">
            {optimisticUserState.blocked ? 'Unblock User' : 'Block User'}
          </span>
        </button>
      </form>
    </>
  );
};

export default UserInfoCardInteraction;
