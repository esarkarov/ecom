'use client';

import { SelectionType } from '@/src/types';

interface ColorSwatchProps {
  colors: string[];
  onChange: ({ type, value }: { type: SelectionType; value: string }) => void;
  productColor: string;
}

export const ColorOption = ({ colors, onChange, productColor }: ColorSwatchProps) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-gray-500">Color</span>
      <div className="flex items-center gap-2">
        {colors.map((color) => (
          <div
            key={color}
            className={`cursor-pointer border-1 ${productColor === color ? 'border-gray-400' : 'border-gray-200'} rounded-full p-[1.2px]`}
            onClick={() => onChange({ type: 'color', value: color })}>
            <div
              className="w-[14px] h-[14px] rounded-full"
              style={{ backgroundColor: color }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
