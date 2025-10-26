import { BrandLogo } from '@/src/components/atoms/BrandLogo';
import { ShoppingCartIcon } from '@/src/components/atoms/ShoppingCartIcon';
import { SignInLink } from '@/src/components/atoms/SignInLink';
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
        <SignInLink />
      </div>
    </nav>
  );
};
