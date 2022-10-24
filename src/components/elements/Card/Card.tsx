import type { ReactNode } from 'react';
import React from 'react';

export type CardProps = {
  className?: string;
  children?: ReactNode;
};

export const Card = ({ className, children }: CardProps) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <div className={`px-4 py-5 sm:p-6 ${className}`}>{children}</div>
    </div>
  );
};
