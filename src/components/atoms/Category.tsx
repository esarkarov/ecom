'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { JSX } from 'react';

interface CategoryProps {
  slug: string;
  name: string;
  icon: JSX.Element;
}

export const Category = ({ slug, name, icon }: CategoryProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const selectedCategory = searchParams.get('category');

  const handleChange = (value: string | null) => {
    const params = new URLSearchParams(searchParams);
    params.set('category', value || 'all');
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div
      className={`flex items-center justify-center gap-2 cursor-pointer px-2 py-1 rounded-md ${
        slug === selectedCategory ? 'bg-white' : 'text-gray-800'
      }`}
      onClick={() => handleChange(slug)}>
      {icon}
      {name}
    </div>
  );
};
