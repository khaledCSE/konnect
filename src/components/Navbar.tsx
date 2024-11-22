import Link from 'next/link';

import MobileNavbar from '@/components/MobileMenu';
import { navLinks } from '@/constants';

const Navbar = () => (
  <div className="flex h-24 items-center justify-between">
    {/* left */}
    <div className="w-1/5 md:hidden lg:block">
      <Link href="/" className="text-2xl font-extrabold uppercase text-brand">Konnect</Link>
    </div>
    {/* center */}
    <div className="hidden w-1/2 md:flex">
      {/* Links */}
      <div className="flex gap-6 text-gray-600">
        {navLinks.map((navLink) => (
          <Link href={navLink.href} className="flex items-center gap-2" key={navLink.label}>
            {navLink.icon}
            <span>{navLink.label}</span>
          </Link>
        ))}
      </div>
    </div>
    {/* right */}
    <div className="flex w-[30%] items-center justify-end gap-4 xl:gap-8">
      <MobileNavbar />
    </div>
  </div>
);

export default Navbar;
