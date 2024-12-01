import Image from 'next/image';
import Link from 'next/link';

const UserMediaCard = () => (
  <div className="home-section text-sm">
    {/* Top */}
    <div className="flex items-center justify-between font-medium">
      <span className="text-gray-500">User Media</span>
      <Link href="/" className="text-xs text-brand">See All</Link>
    </div>

    {/* Bottom */}
    <div className="flex flex-wrap justify-between gap-4">
      <div className="relative h-24 w-1/5">
        <Image
          src="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Image1"
          fill
          className="rounded-md object-cover"
        />
      </div>
      <div className="relative h-24 w-1/5">
        <Image
          src="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Image1"
          fill
          className="rounded-md object-cover"
        />
      </div>
      <div className="relative h-24 w-1/5">
        <Image
          src="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Image1"
          fill
          className="rounded-md object-cover"
        />
      </div>
      <div className="relative h-24 w-1/5">
        <Image
          src="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Image1"
          fill
          className="rounded-md object-cover"
        />
      </div>
      <div className="relative h-24 w-1/5">
        <Image
          src="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Image1"
          fill
          className="rounded-md object-cover"
        />
      </div>
      <div className="relative h-24 w-1/5">
        <Image
          src="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Image1"
          fill
          className="rounded-md object-cover"
        />
      </div>
      <div className="relative h-24 w-1/5">
        <Image
          src="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Image1"
          fill
          className="rounded-md object-cover"
        />
      </div>
      <div className="relative h-24 w-1/5">
        <Image
          src="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Image1"
          fill
          className="rounded-md object-cover"
        />
      </div>
    </div>
  </div>
);

export default UserMediaCard;
