import Image from 'next/image';
import Link from 'next/link';

interface BrandTextProps {
  color?: string;
}

export const BrandLogo = ({ color = 'text-white' }: BrandTextProps) => {
  return (
    <Link
      href="/"
      className="flex items-center">
      <Image
        src="/logo.svg"
        alt="Gocart"
        width={36}
        height={36}
        className="w-6 h-6 md:w-9 md:h-9"
      />
      <p className={`hidden md:block text-lg font-medium tracking-wider ${color}`}>
        <span className="text-amber-400">Go</span>cart.
      </p>
    </Link>
  );
};
