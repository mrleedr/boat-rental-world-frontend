import React from 'react';

import { Button } from '@/components/elements/Button';
import { SectionContainer } from '@/components/elements/SectionContainer';
import { Typography } from '@/components/elements/Typography';

const mostSearch = [
  'Catamaran Charter Croatia',
  'Sailboat Charter Mallorca',
  'Catamaran Charter Greece',
  'Sailboat Charter Italy',
  'Catamaran Charter Mallorca',
  'Catamaran Charter Greece',
  'Catamaran Charter Ibiza',
  'Sailboat Charter Croatia',
  'Sailboat Charter BVI',
  'Catamaran Charter Ibiza',
  'Luxury Yacht Charter',
  'Sailboat Charter Croatia',
  'Gulet Charter',
  'Cruise Sailbot & Catamaran',
];

export interface SearchTagProps {}
export const SearchTag = () => {
  return (
    <SectionContainer>
      <div className=" flex flex-col items-center gap-6">
        <Typography variant="h3" className="font-dmserif">
          Most Searched
        </Typography>
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 lg:gap-4">
          {mostSearch.map((item: any, i) => (
            <Button key={i} variant="secondary">
              {item}
            </Button>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};
