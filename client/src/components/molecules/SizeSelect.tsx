'use client';

import { SelectionType } from '@/src/types';

interface SizeSelectProps {
  sizes: string[];
  onChange: ({ type, value }: { type: SelectionType; value: string }) => void;
}

export const SizeSelect = ({ sizes, onChange }: SizeSelectProps) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-gray-500">Size</span>
      <select
        id="size"
        name="size"
        onChange={(e) => onChange({ type: 'size', value: e.target.value })}
        className="ring ring-gray-300 rounded-md px-2 py-1">
        {sizes.map((size) => (
          <option
            key={size}
            value={size}>
            {size.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};
