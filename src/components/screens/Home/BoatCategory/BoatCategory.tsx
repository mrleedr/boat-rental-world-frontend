import React from 'react';

import { Button } from '@/components/elements/Button';
import { SectionContainer } from '@/components/elements/SectionContainer';
import { Typography } from '@/components/elements/Typography';

import { BoatCategoryCard } from './BoatCategoryCard';

const Categories = [
  {
    id: 1,
    image: '/assets/images/yacht/boat-types/Boat.png',
    rental_types: 'Boat',
    available: 1200,
  },
  {
    id: 2,
    image: '/assets/images/yacht/boat-types/Yacht.png',
    rental_types: 'Yacht',
    available: 200,
  },
  {
    id: 3,
    image: '/assets/images/yacht/boat-types/Houseboat.png',
    rental_types: 'House',
    available: 1800,
  },
  {
    id: 4,
    image: '/assets/images/yacht/boat-types/Sailboat.png',
    rental_types: 'Sailingboat',
    available: 890,
  },
  {
    id: 5,
    image: '/assets/images/yacht/boat-types/Kayak.png',
    rental_types: 'Kayak',
    available: 550,
  },
  {
    id: 6,
    image: '/assets/images/yacht/boat-types/Pontoon.png',
    rental_types: 'Pontoon Rental',
    available: 1000,
  },
];

export interface BoatCategoryProps {}

export const BoatCategory = () => {
  return (
    <SectionContainer background="bg-gray-100">
      <div className="block xl:flex">
        <div className="flex w-11/12 flex-col gap-4 xl:w-4/12 xl:pt-5">
          <Typography variant="h3" className="font-playfair">
            Boat Types and Categories
          </Typography>
          <Typography variant="lg" className="font-inter">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui.
          </Typography>
          <div className="hidden xl:block">
            <Button variant="primary">Explore more boats</Button>
          </div>
        </div>
        <div className="my-4 block h-[1px]  bg-gray-500/100 xl:hidden "></div>
        <div className="flex w-full flex-wrap items-center justify-center xl:w-8/12">
          {Categories.map((category: any) => (
            <BoatCategoryCard
              key={category.id}
              image={category.image}
              available={category.available}
              type={category.rental_types}
            />
          ))}
          <div className="mt-4 block xl:hidden">
            <Button variant="primary">Explore more boats</Button>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
