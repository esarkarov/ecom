import { SelectionType } from '@/src/types';

interface SizeOptionsProps {
  sizes: string[];
  onChange: ({ type, value }: { type: SelectionType; value: string }) => void;
  selectedSize: string;
}

export const SizeOptions = ({ sizes, onChange, selectedSize }: SizeOptionsProps) => {
  return (
    <div className="flex flex-col gap-2 text-xs">
      <span className="text-gray-500">Size</span>
      <div className="flex items-center gap-2">
        {sizes.map((size) => (
          <div
            className={`cursor-pointer border p-2px ${selectedSize === size ? 'border-gray-600' : 'border-gray-300'}`}
            key={size}
            onClick={() => onChange({ type: 'size', value: size })}>
            <div
              className={`w-6 h-6 text-center flex items-center justify-center ${
                selectedSize === size ? 'bg-black rounded-sm text-white' : 'bg-white text-black'
              }`}>
              {size.toUpperCase()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
