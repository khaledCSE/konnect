import Image from 'next/image';
import React from 'react';

const Stories = () => (
  <div className="hide-scrollbar overflow-scroll rounded-lg bg-white p-4 text-xs shadow-md">
    <div className="flex w-max gap-8">
      <div className="flex cursor-pointer flex-col items-center gap-2">
        <Image src="https://images.pexels.com/photos/28712680/pexels-photo-28712680/free-photo-of-sunset-view-of-landscape-in-catalca-turkey.jpeg" alt="Story" width={60} height={60} className="size-20 rounded-full ring-2" />
        <span className="font-medium">Messi</span>
      </div>

      <div className="flex cursor-pointer flex-col items-center gap-2">
        <Image src="https://images.pexels.com/photos/28712680/pexels-photo-28712680/free-photo-of-sunset-view-of-landscape-in-catalca-turkey.jpeg" alt="Story" width={60} height={60} className="size-20 rounded-full ring-2" />
        <span className="font-medium">Messi</span>
      </div>

      <div className="flex cursor-pointer flex-col items-center gap-2">
        <Image src="https://images.pexels.com/photos/28712680/pexels-photo-28712680/free-photo-of-sunset-view-of-landscape-in-catalca-turkey.jpeg" alt="Story" width={60} height={60} className="size-20 rounded-full ring-2" />
        <span className="font-medium">Messi</span>
      </div>

      <div className="flex cursor-pointer flex-col items-center gap-2">
        <Image src="https://images.pexels.com/photos/28712680/pexels-photo-28712680/free-photo-of-sunset-view-of-landscape-in-catalca-turkey.jpeg" alt="Story" width={60} height={60} className="size-20 rounded-full ring-2" />
        <span className="font-medium">Messi</span>
      </div>

      <div className="flex cursor-pointer flex-col items-center gap-2">
        <Image src="https://images.pexels.com/photos/28712680/pexels-photo-28712680/free-photo-of-sunset-view-of-landscape-in-catalca-turkey.jpeg" alt="Story" width={60} height={60} className="size-20 rounded-full ring-2" />
        <span className="font-medium">Messi</span>
      </div>
    </div>
  </div>
);

export default Stories;
