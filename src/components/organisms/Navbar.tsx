import { Bell, Home } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SearchBar } from '../molecules/SearchBar';
import { ShoppingCartIcon } from '../atoms/ShoppingCartIcon';

export const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4">
      <Link
        href="/"
        className="flex items-center">
        <Image
          src="/logo.png"
          alt="Gocart"
          width={36}
          height={36}
          className="w-6 h-6 md:w-9 md:h-9"
        />
        <p className="hidden md:block text-md font-medium tracking-wider">
          <span className="text-amber-400">Go</span>cart.
        </p>
      </Link>
      <div className="flex items-center gap-6">
        <SearchBar />
        <Link href="/">
          <Home className="w-4 h-4 text-gray-600" />
        </Link>
        <Bell className="w-4 h-4 text-gray-600" />
        <ShoppingCartIcon />
        <Link
          href="/login"
          className="text-amber-400 hover:text-white border border-amber-400 hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-4 py-1.5 text-center dark:border-amber-300 dark:text-amber-300 dark:hover:text-white dark:hover:bg-amber-400 dark:focus:ring-amber-900">
          Sign in
        </Link>
      </div>
    </nav>
  );
};
