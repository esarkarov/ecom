import { InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
}

export const FormField = ({ label, error, id, placeholder, ...props }: FormFieldProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={id}
        className="text-xs text-gray-500 font-medium">
        {label}
      </label>
      <input
        className="border-b border-gray-200 py-2 outline-none text-sm"
        type="text"
        id={id}
        placeholder={placeholder}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error?.message}</p>}
    </div>
  );
};
