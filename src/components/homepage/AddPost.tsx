import Image from 'next/image';
import React from 'react';

const AddPost = () => (
  <div className="home-section flex justify-between gap-4">
    {/* Avatar */}
    <Image
      src="https://images.pexels.com/photos/28712680/pexels-photo-28712680/free-photo-of-sunset-view-of-landscape-in-catalca-turkey.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      alt="Avatar"
      className="size-12 rounded-full object-cover"
      width={48}
      height={48}
    />

    {/* Post */}
    <div className="flex-1">
      {/* Text Input */}
      <div className="flex gap-4">
        <textarea placeholder="What's on your mind ..." className="flex-1 rounded-lg bg-slate-100 p-3" />
        <Image
          src="/emoji.png"
          alt="Avatar"
          className="size-5 cursor-pointer self-end rounded-full"
          width={20}
          height={20}
        />
      </div>
      {/* Post Options */}
      <div className="mt-4 flex flex-wrap items-center gap-4 text-gray-400">
        <div className="flex cursor-pointer items-center gap-2">
          <Image
            src="/addImage.png"
            alt="Option"
            width={20}
            height={20}
          />
          <span>Photo</span>
        </div>

        <div className="flex cursor-pointer items-center gap-2">
          <Image
            src="/addVideo.png"
            alt="Option"
            width={20}
            height={20}
          />
          <span>Video</span>
        </div>

        <div className="flex cursor-pointer items-center gap-2">
          <Image
            src="/addEvent.png"
            alt="Option"
            width={20}
            height={20}
          />
          <span>Event</span>
        </div>

        <div className="flex cursor-pointer items-center gap-2">
          <Image
            src="/poll.png"
            alt="Option"
            width={20}
            height={20}
          />
          <span>Poll</span>
        </div>
      </div>
    </div>
  </div>
);

export default AddPost;
