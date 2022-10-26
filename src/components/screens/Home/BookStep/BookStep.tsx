import Image from 'next/image';
import React from 'react';

import { Typography } from '@/components/elements/Typography';

const features = [
  {
    name: 'Search',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    step: '/assets/images/icon/step-1-icon.svg',
  },
  {
    name: 'Get and Offer',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    step: '/assets/images/icon/step-2-icon.svg',
  },
  {
    name: 'Book your Destination',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    step: '/assets/images/icon/step-3-icon.svg',
  },
];

export const BookStep = () => {
  return (
    <div className="relative bg-[#164E63]">
      <div className="h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/3">
        <img
          className="h-full w-full object-cover"
          src="/assets/images/yacht/how-it-works.png"
          alt=""
        />
      </div>
      <div className="relative mx-auto max-w-screen-2xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="md:ml-auto md:w-2/3 md:pl-10">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 xl:grid-cols-3">
            {features.map((feature, i) => (
              <div key={feature.name} className="pt-6">
                <div className="relative mx-auto flow-root max-w-sm rounded-lg bg-gray-50 py-8">
                  <div className="absolute -top-16 left-0">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-yellow-800 p-3 shadow-lg">
                      <Typography variant="h6" className="text-white">
                        {i + 1}
                      </Typography>
                    </span>
                  </div>
                  <div>
                    <div className="px-6">
                      <Image
                        src={feature.step}
                        alt="boat image"
                        width={70}
                        height={70}
                      />
                      <h3 className="mt-2 text-lg font-medium tracking-tight text-gray-900">
                        {feature.name}
                      </h3>
                      <p className="mt-2 text-gray-800">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
