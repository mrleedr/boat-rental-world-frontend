import Image from 'next/image';
import React from 'react';

import { Typography } from '@/components/elements/Typography';

export interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
}

export const FeatureCard = ({
  image,
  title,
  description,
}: FeatureCardProps) => {
  return (
    <>
      <div className=" flex w-full items-center gap-5 self-start sm:py-4 md:w-[45%] lg:py-0 xl:w-[24%]">
        <div className="relative my-5 flex h-12 w-12 items-center justify-center sm:h-16 sm:w-16 md:my-0 lg:h-32 lg:w-32">
          <Image
            src={image}
            objectFit="contain"
            layout="fixed"
            alt="boat image"
            width={70}
            height={70}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Typography variant="xl" customWeight="bold" className="font-inter">
            {title}
          </Typography>
          <Typography variant="md" className="font-inter">
            {description}
          </Typography>
        </div>
      </div>
    </>
  );
};
