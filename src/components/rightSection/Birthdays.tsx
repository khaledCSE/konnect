import { Gift } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Birthdays = () => (
  <div className="home-section text-sm">
    {/* Top */}
    <div className="flex items-center justify-between font-medium">
      <span className="text-gray-500">Birthdays</span>
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
        <button type="button" className="rounded-md bg-brand px-2 py-1 text-xs text-white hover:bg-brand-600">Celebrate</button>
      </div>
    </div>

    {/* Upcoming */}
    <div className="mt-2 flex items-center gap-4 rounded-lg bg-slate-100 p-4">
      <Gift className="text-brand" />
      <Link href="/" className="flex flex-col gap-1 text-xs">
        <span className="font-semibold text-gray-700">Upcoming Birthdays</span>
        <span className="text-gray-500">See 16 other upcoming birthdays</span>
      </Link>
    </div>
  </div>
);

export default Birthdays;
