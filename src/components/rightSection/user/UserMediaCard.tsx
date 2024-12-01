import Link from 'next/link';

const UserMediaCard = () => (
  <div className="home-section text-sm">
    {/* Top */}
    <div className="flex items-center justify-between font-medium">
      <span className="text-gray-500">User Media</span>
      <Link href="/" className="text-xs text-brand">See All</Link>
    </div>

  </div>
);

export default UserMediaCard;
