import {
  Ellipsis, MessageSquareMore, Share2, ThumbsUp,
} from 'lucide-react';
import Image from 'next/image';

import Comments from '@/components/homepage/Comments';

const Post = () => (
  <div className="flex flex-col gap-4">
    {/* User */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/28712680/pexels-photo-28712680/free-photo-of-sunset-view-of-landscape-in-catalca-turkey.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Post Image"
          width={40}
          height={40}
          className="size-10 rounded-full"
        />
        <span className="font-medium">Lionel Messi</span>
      </div>
      <Ellipsis />
    </div>

    {/* Description */}
    <div className="flex flex-col gap-4">
      <div className="relative min-h-96 w-full">
        <Image
          src="https://images.pexels.com/photos/28712680/pexels-photo-28712680/free-photo-of-sunset-view-of-landscape-in-catalca-turkey.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Post Image"
          fill
          className="rounded-md object-cover"
        />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae praesentium deserunt,
        voluptatem esse autem iusto ullam ipsam et, similique veritatis minima modi fuga, harum sapiente quis unde dolore sint expedita.
      </p>
    </div>

    {/* Interaction */}
    <div className="my-5 flex items-center justify-between text-sm">
      <div className="flex gap-8">
        <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-2">
          <ThumbsUp className="text-brand" />
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">
            <span>123 </span>
            <span className="hidden md:inline">Likes</span>
          </span>
        </div>

        <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-2">
          <MessageSquareMore className="text-brand" />
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">
            <span>123 </span>
            <span className="hidden md:inline">Comments</span>
          </span>
        </div>
      </div>
      <div className="">
        <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-2">
          <Share2 className="text-brand" />
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">
            <span>123 </span>
            <span className="hidden md:inline">Shares</span>
          </span>
        </div>

      </div>
    </div>

    {/* Comments */}
    <Comments />
  </div>
);

export default Post;
