import {
  Ellipsis, Reply, SmilePlus, ThumbsUp,
} from 'lucide-react';
import Image from 'next/image';

const Comments = () => (
  <div>
    {/* Write */}
    <div className="flex items-center gap-4">
      <Image
        src="https://images.pexels.com/photos/28712680/pexels-photo-28712680/free-photo-of-sunset-view-of-landscape-in-catalca-turkey.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt="Avatar"
        width={32}
        height={32}
        className="size-8 rounded-full"
      />
      <div className="flex flex-1 items-center justify-between rounded-xl bg-slate-100 px-6 py-2 text-sm">
        <input type="text" placeholder="Write a comment ..." className="flex-1 bg-transparent outline-none" />
        <SmilePlus className="cursor-pointer text-brand" />
      </div>
    </div>

    {/* Comments */}
    <div className="">
      {/* Comment */}
      <div className="mt-6 flex justify-between gap-4 ">
        {/* Avatar */}
        <Image
          src="https://images.pexels.com/photos/28712680/pexels-photo-28712680/free-photo-of-sunset-view-of-landscape-in-catalca-turkey.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Avatar"
          width={32}
          height={32}
          className="size-8 rounded-full"
        />
        {/* Description */}
        <div className="flex flex-1 flex-col gap-2">
          <span className="font-medium">Lionel Messi</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Neque quidem enim ducimus eius quibusdam veritatis iste quasi, nostrum animi doloremque quas
            labore inventore quisquam ipsa, assumenda, numquam exercitationem magnam iure.
          </p>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-2">
              <ThumbsUp width={12} height={12} className="text-brand" />
              <span className="text-gray-300">|</span>
              <span className="text-sm text-gray-500">
                <span>123 </span>
                <span className="hidden md:inline">Likes</span>
              </span>
            </div>

            <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-2">
              <Reply width={12} height={12} className="text-brand" />
              <span className="text-gray-300">|</span>
              <span className="text-sm text-gray-500">
                <span className="hidden md:inline">Reply</span>
              </span>
            </div>
          </div>

        </div>
        {/* Icon */}
        <Ellipsis />
      </div>
    </div>
  </div>
);

export default Comments;
