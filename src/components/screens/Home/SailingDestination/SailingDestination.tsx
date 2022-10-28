import { MapPinIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react';

import { Button } from '@/components/elements/Button';
import { SectionContainer } from '@/components/elements/SectionContainer';
import { Typography } from '@/components/elements/Typography';
import yacht from '@/public/assets/images/yacht/pexels-szelei-robert-1482193.jpg';

import { SailingCarousel } from './SailingCarousel';

const sailingNavigation = [
  {
    title: 'New York City',
  },
  {
    title: ' British Virgin Islands',
  },
  {
    title: 'Barcelona',
  },
  {
    title: ' Amsterdam',
  },
  {
    title: ' Bahamas',
  },
  {
    title: ' Newport Beach',
  },
];

export interface SailingDestinationProps {}

export const SailingDestination = () => {
  return (
    <SectionContainer>
      <div className="my-4 flex w-[90%] flex-col gap-5  xl:w-[50%]">
        <Typography variant="h3" className="font-playfair">
          Top Destinations
        </Typography>
        <Typography variant="lg" className="font-inter">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </Typography>
      </div>
      <div className="relative xl:mt-5">
        <ul className="flex flex-wrap gap-1 md:gap-5">
          {sailingNavigation.map((item: any, i) => {
            return (
              <li
                key={i}
                className="z-10 hidden cursor-pointer border-b-4 border-transparent pr-2 text-gray-700 hover:border-yellow-800 hover:text-black md:block md:py-3"
              >
                <Typography
                  variant="lg"
                  customColor="text-gray-500 hover:text-black"
                  className="cursor-pointer font-inter"
                >
                  {item.title}
                </Typography>
              </li>
            );
          })}
        </ul>
        <div className="bottom-5 h-[2px] w-full rounded-full bg-gray-500 md:absolute md:bottom-[1px]"></div>
      </div>
      <div className="my-10 block xl:flex">
        <div className="  relative h-[120px] w-full md:h-[350px] xl:h-[410px] xl:w-[50%] ">
          <Image
            className="rounded-lg"
            layout="fill"
            objectFit="cover"
            src={yacht}
            alt="yacht"
          />
        </div>
        <div className="flex w-full items-center xl:w-1/2">
          <div className="flex w-full flex-col justify-center gap-4 pt-6 xl:ml-7 xl:w-3/4 xl:gap-6 xl:pt-0">
            <Typography
              variant="md"
              customColor="text-gray-500"
              className="font-inter"
            >
              80+ available listings in this destination
            </Typography>
            <div className="flex items-center gap-2">
              <MapPinIcon className="w-7" />
              <Typography variant="h6" className="font-inter">
                New York City
              </Typography>
            </div>

            <Typography variant="sm" className="font-inter">
              Facilisis magna etiam tempor orci eu lobortis elementum nibh. Nec
              feugiat in fermentum posuere urna nec. Fringilla est ullamcorper
              eget nulla facilisi etiam dignissim diam. Cras fermentum odio eu
              feugiat pretium nibh. Fringilla urna porttitor rhoncus dolor.
              Aliquet bibendum enim facilisis gravida.
            </Typography>
          </div>
        </div>
      </div>
      <div>
        <Typography variant="xl" className="font-inter">
          Discover New York Citys sailing hotspots.
        </Typography>
      </div>

      <SailingCarousel />
      <div className="flex justify-center py-5">
        <Button variant="primary">View all destination</Button>
      </div>
    </SectionContainer>
  );
};
