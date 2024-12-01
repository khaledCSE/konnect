import { Ellipsis } from 'lucide-react';
import Image from 'next/image';

type Props = {
  size: 'sm' | 'md' | 'lg'
}

const SponsoredAds = ({ size }: Props) => {
  const heightClasses = {
    sm: 'h-24',
    md: 'h-36',
    lg: 'h-48',
  };

  const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eligendi provident aperiam officiis vel,'
    + 'iste voluptatem delectus, quasi soluta id maxime blanditiis alias deserunt atque aliquam praesentium cumque nam distinctio'
    + 'dolore adipisci fugit placeat doloremque. Aliquam consectetur cupiditate, porro commodi autem doloribus'
    + 'vel perspiciatis earum exercitationem nulla eaque repudiandae perferendis?';

  let textContent = '';

  if (size === 'sm') {
    textContent = text.slice(0, 56);
  } else if (size === 'md') {
    textContent = text.slice(0, 100);
  } else {
    textContent = text;
  }

  return (
    <div className="home-section text-sm">
      {/* Top */}
      <div className="flex items-center justify-between font-medium text-gray-500">
        <span>Sponsored Ads</span>
        <Ellipsis />
      </div>
      {/* Bottom */}
      <div className={`mt-4 flex flex-col ${size === 'sm' ? 'gap-2' : 'gap-4'}`}>
        <div className={`relative ${heightClasses[size]}`}>
          <Image
            src="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill
            className="rounded-lg object-cover"
            alt="Add Img"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={24}
            height={24}
            className="size-6 rounded-full object-cover"
            alt="Ad Avatar"
          />
          <span className="font-medium text-brand">BigChef Lounge</span>
        </div>
        <p className={size === 'sm' ? 'text-xs' : 'text-sm'}>
          {textContent}
        </p>
        <button
          type="button"
          className="rounded-lg bg-gray-200 p-2 text-xs text-gray-500"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default SponsoredAds;
