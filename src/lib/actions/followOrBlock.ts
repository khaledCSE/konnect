'use server';

import { auth } from '@clerk/nextjs/server';

import prisma from '@/lib/prisma.client';

/**
 * Attempts to follow (or unfollow) a user based on their ID.
 *
 * @param {string} userId The ID of the user to follow/unfollow.
 *
 * @throws {Error} Thrown if the logged-in user cannot be found
 *   or an error occurs during the database interaction.
 *
 * @returns {Promise<void>} Resolves with no value upon successful execution.
 */
export const followUser = async (userId: string): Promise<void> => {
  const { userId: currentUserId } = await auth();

  if (!currentUserId) {
    throw new Error('Cannot find logged-in user');
  }

  try {
    const existingFollow = await prisma.follower.findFirst({
      where: {
        followerId: currentUserId,
        followingId: userId,
      },
    });

    if (existingFollow) {
      // Time to unfollow
      await prisma.follower.delete({ where: { id: existingFollow.id } });
    } else {
      // Already following
      const existingFollowRequest = await prisma.followRequest.findFirst({
        where: {
          senderId: currentUserId,
          receiverId: userId,
        },
      });

      if (existingFollowRequest) {
        // Time to cancel follow request
        await prisma.followRequest.delete({ where: { id: existingFollowRequest.id } });
      } else {
        // Time to follow user
        await prisma.followRequest.create({
          data: {
            senderId: currentUserId,
            receiverId: userId,
          },
        });
      }
    }
  } catch (error) {
    console.error(error);
    throw new Error('Could not follow/unfollow user');
  }
};

/**
 * Attempts to block (or unblock) a user based on their ID.
 *
 * @param {string} userId The ID of the user to block/unblock.
 *
 * @throws {Error} Thrown if the logged-in user cannot be found
 *   or an error occurs during the database interaction.
 *
 * @returns {Promise<void>} Resolves with no value upon successful execution.
 */
export const blockUser = async (userId: string): Promise<void> => {
  try {
    const { userId: currentUserId } = await auth();

    if (!currentUserId) {
      throw new Error('Cannot find logged-in user');
    }

    const existingBlock = await prisma.block.findFirst({
      where: {
        blockerId: currentUserId,
        blockedId: userId,
      },
    });

    if (existingBlock) {
      // Unblock user
      await prisma.block.delete({ where: { id: existingBlock.id } });
    } else {
      // Block user
      await prisma.block.create({
        data: {
          blockerId: currentUserId,
          blockedId: userId,
        },
      });
    }
  } catch (error) {
    console.error(error);
    throw new Error('Could not block/unblock user');
  }
};

export const acceptFriendRequest = async ({ userId }: {userId: string}) => {
  try {
    const { userId: currentUserId } = await auth();

    if (!currentUserId) {
      throw new Error('User not authenticated');
    }

    const existingFollowRequest = await prisma.followRequest.findFirst({
      where: {
        senderId: userId,
        receiverId: currentUserId,
      },
    });

    if (existingFollowRequest) {
      await prisma.followRequest.delete({ where: { id: existingFollowRequest.id } });

      await prisma.follower.create({
        data: {
          followerId: userId,
          followingId: currentUserId,
        },
      });
    }
  } catch (error) {
    console.error(error);
    throw new Error('Could not accept friend request');
  }
};

export const declineFriendRequest = async ({ userId }: {userId: string}) => {
  try {
    const { userId: currentUserId } = await auth();

    if (!currentUserId) {
      throw new Error('User not authenticated');
    }

    const existingFollowRequest = await prisma.followRequest.findFirst({
      where: {
        senderId: userId,
        receiverId: currentUserId,
      },
    });

    if (existingFollowRequest) {
      await prisma.followRequest.delete({ where: { id: existingFollowRequest.id } });
    }
  } catch (error) {
    console.error(error);
    throw new Error('Could not accept friend request');
  }
};
