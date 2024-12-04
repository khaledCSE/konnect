import Image from 'next/image';
import Link from 'next/link';

import prisma from '@/lib/prisma.client';

type Props = {
  userId: string
}

const UserMediaCard = async ({ userId }: Props) => {
  const userPosts = await prisma.post.findMany({
    where: {
      userId,
      img: {
        not: null,
      },
    },
    take: 8,
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div className="home-section text-sm">
      {/* Top */}
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">User Media</span>
        <Link href="/" className="text-xs text-brand">See All</Link>
      </div>

      {/* Bottom */}
      <div className="flex flex-wrap justify-between gap-4">
        {(userPosts.length > 0) ? userPosts.map((post) => (
          <div className="relative h-24 w-1/5" key={post.id}>
            <Image
              src={String(post.img)}
              alt="Image1"
              fill
              className="rounded-md object-cover"
            />
          </div>
        )) : (
          <p>No Media Found!</p>
        )}
      </div>
    </div>
  );
};

export default UserMediaCard;
