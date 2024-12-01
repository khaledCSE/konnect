import { CircleCheckBig, CircleX } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const FriendRequests = () => (
  <div className="home-section text-sm">
    {/* Top */}
    <div className="flex items-center justify-between font-medium">
      <span className="text-gray-500">Friend Requests</span>
      <Link href="/" className="text-xs text-brand">See All</Link>
    </div>
    {/* Bottom */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/28712680/pexels-photo-28712680/free-photo-of-sunset-view-of-landscape-in-catalca-turkey.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Avatar"
          width={40}
          height={40}
          className="size-10 rounded-full object-cover"
        />
        <span>Angel Di Maria</span>
      </div>
      <div className="flex justify-end gap-3">
        <CircleCheckBig className="text-brand" />
        <CircleX className="text-red-500" />
      </div>
    </div>
  </div>
);

export default FriendRequests;
