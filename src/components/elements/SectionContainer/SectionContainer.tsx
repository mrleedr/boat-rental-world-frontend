import type { ReactNode } from 'react';
import React from 'react';

export type SectionContainerProps = {
  background?: string;
  className?: string;
  children?: ReactNode;
};

export const SectionContainer = ({
  background,
  className,
  children,
}: SectionContainerProps) => {
  return (
    <section className={`${background}`}>
      <div
        className={`mx-auto max-w-screen-2xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8 ${className}`}
      >
        {children}
      </div>
    </section>
  );
};
