import classNames from 'classnames';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type ButtonTypes = {
  text: string;
  bg?: string;
  variant?: 'blue' | 'green' | 'orange' | 'purple' | 'secondary' | 'trans' | 'null';
  width?: string | number;
  height?: string | number;
  textClass?: string;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = ({
  text,
  bg,
  variant = 'blue',
  width,
  height,
  textClass,
  ...alt
}: ButtonTypes) => {
  const textClasses = classNames(
    'text-white hover:translate-y-[-2px] transition-all ease-in font-electrolize py-4 px-4 md:px-12 rounded-xl text-xl md:text-[16px] whitespace-nowrap leading-none',
    textClass, {
      'bg-gradient-to-r to-[#0ADFDB] from-[#057977]': variant === 'blue',
      'bg-gradient-to-r to-neon-green from-[#144F33]': variant === 'green',
      'bg-gradient-to-r to-neon-orange from-[#663C15]': variant === 'orange',
      'bg-gradient-to-r to-neon-purple from-[#30006C]': variant === 'purple',
      'bg-[#023340] bg-opacity-80': variant === 'secondary',
      'bg-[#0ADFDB] bg-opacity-0 border border-[#00FFFF] bg-gradient-to-r from-[#057977] to-[#0ADFDB] bg-clip-text text-transparent': variant === 'trans',
      'bg-gradient-to-r from-[#7A4A2E] to-[#5A2F1D] opacity-60': variant === 'null',
    }
  );

  return (
    <button className={textClasses} {...alt}>
      {text}
    </button>
  );
};