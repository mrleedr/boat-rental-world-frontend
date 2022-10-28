import React from 'react';

import { Button } from '@/components/elements/Button';
import { SectionContainer } from '@/components/elements/SectionContainer';
import { Typography } from '@/components/elements/Typography';

export interface CallToActionProps {}

export const CallToAction = () => {
  return (
    <SectionContainer background="bg-CallToAction bg-cover bg-fixed bg-center">
      <div className="flex w-full flex-col gap-4 rounded-xl bg-white p-10 md:w-10/12 lg:gap-7 xl:w-5/12">
        <Typography variant="h3" className="font-playfair">
          Let your boat earn for you today.
        </Typography>
        <Typography variant="lg" className="font-inter">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt.
        </Typography>
        <div>
          <Button variant="primary">View Details</Button>
        </div>
      </div>
    </SectionContainer>
  );
};
