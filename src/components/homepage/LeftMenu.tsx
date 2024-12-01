import Link from 'next/link';

import ProfileCard from '@/components/leftSection/ProfileCard';
import SponsoredAds from '@/components/rightSection/SponsoredAds';
import { leftBarLinks } from '@/constants';

type Props = {
  type: 'home' | 'profile'
}

const LeftMenu = ({ type }: Props) => (
  <div className="flex flex-col gap-6">
    {type === 'home' && (
      <ProfileCard />
    )}

    <div className="home-section flex flex-col gap-2 text-sm text-gray-500">
      {leftBarLinks.map((leftLink) => (
        <div key={leftLink.label}>
          <Link href={leftLink.href} className="flex items-center gap-4 rounded-lg p-2 hover:bg-slate-100">
            {leftLink.icon}
            <span>{leftLink.label}</span>
          </Link>
          {/* <hr className="w-36 self-center border-t bg-gray-50" /> */}
        </div>
      ))}
    </div>

    <SponsoredAds size="sm" />
  </div>
);

export default LeftMenu;
