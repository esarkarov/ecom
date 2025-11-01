'use client';

import { Category } from '@/src/components/atoms/Category';
import { CATEGORIES } from '@/src/constants';

export const Categories = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 bg-gray-100 p-2 rounded-lg mb-4 text-sm">
      {CATEGORIES.map(({ slug, name, icon }) => (
        <Category
          key={name}
          slug={slug}
          name={name}
          icon={icon}
        />
      ))}
    </div>
  );
};
