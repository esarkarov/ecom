'use client';

import { OptionShape, SelectionType } from '@/src/types';

interface ColorSwatchProps {
  colors: string[];
  onChange: ({ type, value }: { type: SelectionType; value: string }) => void;
  selectedColor: string;
  shape: OptionShape;
  size: number;
}

export const ColorOptions = ({ colors, selectedColor, onChange, shape = 'square', size }: ColorSwatchProps) => {
  const shapeClass = shape === 'circle' ? 'rounded-full' : 'rounded-sm';

  return (
    <div className="flex flex-col gap-1">
      <span className="text-gray-500">Color</span>
      <div className="flex items-center gap-2">
        {colors.map((color) => (
          <div
            key={color}
            className={`cursor-pointer border p-2px ${selectedColor === color ? 'border-gray-400' : 'border-gray-200'} ${shapeClass}`}
            onClick={() => onChange({ type: 'color', value: color })}>
            <span
              className={`block ${shapeClass}`}
              style={{ width: size, height: size, backgroundColor: color }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
