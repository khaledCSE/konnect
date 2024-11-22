'use client';

import Link from 'next/link';
import { useState } from 'react';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="md:hidden">
      <button
        className="flex cursor-pointer flex-col gap-[4px]"
        onClick={handleToggle}
        aria-label="Toggle menu"
        type="button"
      >
        <span className={`h-1 w-6 rounded-sm bg-brand ${isOpen ? 'rotate-45' : ''} origin-left duration-500 ease-in-out`} />
        <span className={`h-1 w-6 rounded-sm bg-brand ${isOpen ? 'opacity-0' : ''} duration-500 ease-in-out`} />
        <span className={`h-1 w-6 rounded-sm bg-brand ${isOpen ? '-rotate-45' : ''} origin-left duration-500 ease-in-out`} />
      </button>

      {isOpen && (
        <div className="mobile-menu">
          <Link href="/">Home</Link>
          <Link href="/">Friends</Link>
          <Link href="/">Groups</Link>
          <Link href="/">Stories</Link>
          <Link href="/">Login</Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
