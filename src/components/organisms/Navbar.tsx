import { BrandLogo } from '@/src/components/atoms/BrandLogo';
import { ShoppingCartIcon } from '@/src/components/atoms/ShoppingCartIcon';
import { SearchBar } from '@/src/components/molecules/SearchBar';
import { Bell, Home } from 'lucide-react';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4">
      <BrandLogo color="text-gray" />
      <div className="flex items-center gap-6">
        <SearchBar />
        <Link href="/">
          <Home className="w-4 h-4 text-gray-600" />
        </Link>
        <Bell className="w-4 h-4 text-gray-600" />
        <ShoppingCartIcon />
        <Link
          href="/login"
          className="text-amber-400 hover:text-white border border-amber-400 hover:bg-amber-400 focus:outline-none font-medium rounded-lg transition-all duration-300 text-sm px-4 py-1.5 text-center">
          Sign in
        </Link>
      </div>
    </nav>
  );
};
