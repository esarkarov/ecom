import { BrandLogo } from '@/src/components/atoms/BrandLogo';
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className="mt-16 flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-0 bg-gray-800 p-8 rounded-lg">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <BrandLogo />
        <p className="text-sm text-gray-400">© 2025 Gocart.</p>
        <p className="text-sm text-gray-400">All rights reserved.</p>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Terms of Service</Link>
        <Link href="/">Privacy Policy</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">All Products</Link>
        <Link href="/">New Arrivals</Link>
        <Link href="/">Best Sellers</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Blog</Link>
      </div>
    </div>
  );
};
