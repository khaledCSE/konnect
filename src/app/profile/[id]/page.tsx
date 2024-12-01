import Image from 'next/image';

import Feed from '@/components/homepage/Feed';
import LeftMenu from '@/components/homepage/LeftMenu';
import RightSection from '@/components/rightSection';

const ProfilePage = () => (
  <div className="flex gap-6 py-6">
    {/* Left */}
    <div className="hidden w-1/5 xl:block">
      <LeftMenu type="profile" />
    </div>

    {/* Center */}
    <div className="w-full lg:w-[70%] xl:w-1/2">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center justify-center">
          <div className="relative h-64 w-full">
            <Image
              src="https://images.pexels.com/photos/28748477/pexels-photo-28748477/free-photo-of-open-book-and-camera-amid-autumn-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Cover photo"
              fill
              className="rounded-md object-cover"
            />
            <Image
              src="https://images.pexels.com/photos/18336206/pexels-photo-18336206/free-photo-of-silhouette-of-man-standing-on-lakeshore-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Profile photo"
              width={128}
              height={128}
              className="absolute inset-x-0 -bottom-16 m-auto size-32 rounded-full object-cover ring-4 ring-white"
            />
          </div>
          <h1 className="mb-4 mt-20 text-2xl font-medium">Lionel Messi</h1>
          <div className="mb-4 flex items-center justify-center gap-12">
            <div className="flex flex-col items-center">
              <span className="font-medium">123</span>
              <span className="text-sm">Posts</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-medium">12.3M</span>
              <span className="text-sm">Followers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-medium">1K</span>
              <span className="text-sm">Following</span>
            </div>
          </div>
        </div>
        <Feed />
      </div>
    </div>

    {/* Right */}
    <div className="hidden w-[30%] lg:block">
      <RightSection userId="test123" />
    </div>
  </div>
);

export default ProfilePage;
