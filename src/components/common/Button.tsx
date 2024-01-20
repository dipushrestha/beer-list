import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = {
  theme: 'primary' | 'secondary' | 'link';
  children: React.ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  theme,
  children,
  className,
  type,
  ...restProps
}: ButtonProps) => {
  return (
    <button
      {...restProps}
      type={type ?? 'button'}
      className={twMerge(
        'rounded px-6 py-3 font-semibold',
        theme === 'primary' && 'bg-sky-700 text-white hover:bg-sky-800',
        theme === 'secondary' &&
          'bg-white text-neutral-400 hover:text-neutral-500',
        theme === 'link' && 'text-sky-700 hover:text-sky-800',
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
