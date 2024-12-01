import Feed from '@/components/homepage/Feed';
import LeftMenu from '@/components/homepage/LeftMenu';
import RightSection from '@/components/rightSection';

const ProfilePage = () => (
  <div className="flex gap-6 py-6">
    {/* Left */}
    <div className="hidden w-1/5 xl:block">
      <LeftMenu />
    </div>

    {/* Center */}
    <div className="w-full lg:w-[70%] xl:w-1/2">
      <div className="flex flex-col gap-6">
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
