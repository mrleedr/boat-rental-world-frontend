import React from 'react';

import { DestinationCard } from './DestinationSearchCard';

export interface HeroProps {}

export const Hero = () => {
  return (
    <main className="bg-hero lg:relative">
      <div className="mx-auto w-full max-w-screen-2xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <div className="px-4 lg:w-1/2 ">
          <DestinationCard />
        </div>
      </div>
    </main>
  );
};
