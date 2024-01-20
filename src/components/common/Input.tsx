import { HTMLInputTypeAttribute } from 'react';
import { twMerge } from 'tailwind-merge';

type InputProps = {
  name: string;
  placeholder: string;
  required?: boolean;
  className?: string;
  type?: HTMLInputTypeAttribute | 'textarea';
  /** Only applicable if type is 'textarea' */
  rows?: number;
};

const Input = ({
  name,
  placeholder,
  required,
  className,
  type,
  rows,
}: InputProps) =>
  type === 'textarea' ? (
    <textarea
      name={name}
      placeholder={placeholder}
      required
      className={twMerge(
        'rounded border border-zinc-400 px-3 py-3 placeholder:font-semibold',
        className,
      )}
      rows={rows}
    ></textarea>
  ) : (
    <input
      name={name}
      type={type ?? 'text'}
      placeholder={placeholder}
      required={required}
      className={twMerge(
        'rounded border border-zinc-400 px-3 py-3 placeholder:font-semibold',
        className,
      )}
    />
  );

export default Input;
