import classNames from 'classnames';
import type { ReactNode } from 'react';
import React from 'react';

export type ButtonProps = {
  size?: 'sm' | 'md' | 'lg';
  responsive?: boolean;
  backgroundColor?: string;
  label: string;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
  [key: string]: any;
};

const buttonSizes = (size: string) =>
  classNames({
    'px-8 py-6': size === 'lg',
    'px-6 py-4': size === 'md',
    'px-4 py-2': size === 'sm',
  });

export const Button = ({
  label,
  backgroundColor = '#333',
  size = 'md',
  className,
  responsive = true,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      style={{ backgroundColor }}
      className={`${buttonSizes(size)} ${className} ${
        responsive && 'flex w-full items-center justify-center'
      } rounded-md`}
      {...props}
    >
      {label}
      {children}
    </button>
  );
};
