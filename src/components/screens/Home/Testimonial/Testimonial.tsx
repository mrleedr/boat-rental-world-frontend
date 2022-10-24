import React from 'react';

import { SectionContainer } from '@/components/elements/SectionContainer';
import { Typography } from '@/components/elements/Typography';

import { TestimonialCarousel } from './TestimonialCarousel';

export interface TestimonialProps {}

export const Testimonial = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col gap-6 xl:my-4 xl:gap-10">
        <div className="flex justify-between">
          <div className="w-full xl:w-5/12">
            <Typography variant="h3" className="font-dmserif">
              Every sailing adventure is unique. Here’s ours.
            </Typography>
          </div>
          <div className="hidden w-4/12 items-end justify-end gap-4 xl:flex">
            {/* <button className="button">Previous</button>
              <button className="button">Next</button> */}
          </div>
        </div>
        <div className="">
          <TestimonialCarousel />
        </div>
      </div>
    </SectionContainer>
  );
};
