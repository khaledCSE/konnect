import AddPost from '@/components/homepage/AddPost';
import Feed from '@/components/homepage/Feed';
import LeftMenu from '@/components/homepage/LeftMenu';
import Stories from '@/components/homepage/Stories';
import RightSection from '@/components/rightSection';

export default function Home() {
  return (
    <div className="flex gap-6 py-6">
      {/* Left */}
      <div className="hidden w-1/5 xl:block">
        <LeftMenu type="home" />
      </div>

      {/* Center */}
      <div className="w-full lg:w-[70%] xl:w-1/2">
        <div className="flex flex-col gap-6">
          <Stories />
          <AddPost />
          <Feed />
        </div>
      </div>

      {/* Right */}
      <div className="hidden w-[30%] lg:block">
        <RightSection />
      </div>
    </div>
  );
}
