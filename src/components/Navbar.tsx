import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import {
  BellDot, LogIn, Mails, Search, Users,
} from 'lucide-react';
import Link from 'next/link';

import MobileNavbar from '@/components/MobileMenu';
import Spinner from '@/components/Spinner';
import { navLinks } from '@/constants';

const Navbar = () => (
  <div className="flex h-24 items-center justify-between">
    {/* left */}
    <div className="w-1/5 md:hidden lg:block">
      <Link href="/" className="text-2xl font-extrabold uppercase text-brand">Konnect</Link>
    </div>
    {/* center */}
    <div className="hidden w-1/2 items-center justify-between md:flex">
      {/* Links */}
      <div className="flex gap-6 text-gray-600">
        {navLinks.map((navLink) => (
          <Link href={navLink.href} className="flex items-center gap-2" key={navLink.label}>
            {navLink.icon}
            <span>{navLink.label}</span>
          </Link>
        ))}
      </div>

      {/* Search */}
      <div className="hidden items-center rounded-xl bg-slate-100 p-2 xl:flex">
        <input type="text" placeholder="Search ..." className="bg-transparent outline-none" />
        <Search className="text-slate-400" />
      </div>
    </div>
    {/* right */}
    <div className="flex w-[30%] items-center justify-end gap-4 xl:gap-8">
      <ClerkLoading>
        <Spinner />
      </ClerkLoading>
      <ClerkLoaded>
        <SignedIn>
          <div className="cursor-pointer">
            <Users />
          </div>
          <div className="cursor-pointer">
            <Mails />
          </div>
          <div className="cursor-pointer">
            <BellDot />
          </div>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <div className="flex items-center gap-2">
            <LogIn />
            <Link href="/sign-in">Login</Link>
          </div>
        </SignedOut>
      </ClerkLoaded>
      <MobileNavbar />
    </div>
  </div>
);

export default Navbar;
