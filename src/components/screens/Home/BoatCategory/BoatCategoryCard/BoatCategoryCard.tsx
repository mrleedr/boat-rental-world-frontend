import Image from 'next/image';
import React from 'react';

import { Typography } from '@/components/elements/Typography';

export interface BoatCategoryCardProps {}

export const BoatCategoryCard = ({ image, available, type }: any) => {
  return (
    <>
      <div className="w-[50%] p-2 md:w-[50%] md:p-5  lg:w-[30%] xl:w-4/12">
        <div className="  relative h-[100px] w-full md:h-[150px]">
          <Image
            layout="fill"
            objectFit="cover"
            src={image}
            className="rounded-md"
            alt={type}
          />
        </div>
        <div className="mt-2 flex flex-col gap-1">
          <Typography variant="md" customColor="text-gray-500" className="">
            {available} available
          </Typography>
          <Typography variant="lg" className="">
            {type} Rentals
          </Typography>
        </div>
      </div>
    </>
  );
};
