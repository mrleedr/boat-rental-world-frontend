import React from 'react';

import { Button } from '@/components/elements/Button';
import { SectionContainer } from '@/components/elements/SectionContainer';
import { Typography } from '@/components/elements/Typography';

import { RentalCarousel } from './RentalCarousel';

const rentalNavigation = [
  {
    title: 'Cayman Islands',
  },
  {
    title: ' Madagascar',
  },
  {
    title: 'Turks & Caicos',
  },
  {
    title: ' Guadeloupe',
  },
];

export interface RentalDestinationProps {}

export const RentalDestination = () => {
  return (
    <SectionContainer background="bg-gray-100">
      <div className="flex w-11/12 flex-col gap-5 xl:w-1/2">
        <Typography variant="h3" className="font-dmserif">
          Top Destinations
        </Typography>
        <Typography variant="lg" className="font-manjari">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </Typography>
      </div>
      <div className="relative xl:mt-5">
        <ul className="flex flex-wrap gap-1 md:gap-5">
          {rentalNavigation.map((item: any, i) => {
            return (
              <li
                key={i}
                className="z-10 hidden cursor-pointer border-b-4 border-transparent pr-2 text-gray-700 hover:border-yellow-800 hover:text-black md:block md:py-3"
              >
                <Typography
                  variant="lg"
                  customColor="text-gray-500 hover:text-black"
                  className="cursor-pointer font-manjari"
                >
                  {item.title}
                </Typography>
              </li>
            );
          })}
        </ul>
        <div className="bottom-5 h-[2px] w-full rounded-full bg-gray-500 md:absolute md:bottom-[1px]"></div>
      </div>
      <RentalCarousel />
      <div className="flex justify-center py-5 ">
        <Button variant="primary">More destination</Button>
      </div>
    </SectionContainer>
  );
};
