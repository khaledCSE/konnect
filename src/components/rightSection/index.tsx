import Birthdays from '@/components/rightSection/Birthdays';
import FriendRequests from '@/components/rightSection/FriendRequests';
import SponsoredAds from '@/components/rightSection/SponsoredAds';
import UserInfoCard from '@/components/rightSection/user/UserInfoCard';
import UserMediaCard from '@/components/rightSection/user/UserMediaCard';

type Props = {
  userId?: string
}

const RightSection = ({ userId }: Props) => (
  <div className="flex flex-col gap-6">
    {userId && (
      <>
        <UserInfoCard />
        <UserMediaCard />
      </>
    )}
    <FriendRequests />
    <Birthdays />
    <SponsoredAds size="md" />
  </div>
);

export default RightSection;
