import { User } from '@prisma/client';
import { Suspense } from 'react';

import Birthdays from '@/components/rightSection/Birthdays';
import FriendRequests from '@/components/rightSection/FriendRequests';
import SponsoredAds from '@/components/rightSection/SponsoredAds';
import UserInfoCard from '@/components/rightSection/user/UserInfoCard';
import UserMediaCard from '@/components/rightSection/user/UserMediaCard';

type Props = {
  user?: User
}

const RightSection = ({ user }: Props) => (
  <div className="flex flex-col gap-6">
    {user && (
      <>
        <Suspense fallback="Loading ...">
          <UserInfoCard user={user} />
        </Suspense>
        <Suspense fallback="Loading ...">
          <UserMediaCard />
        </Suspense>
      </>
    )}
    <FriendRequests />
    <Birthdays />
    <SponsoredAds size="md" />
  </div>
);

export default RightSection;
