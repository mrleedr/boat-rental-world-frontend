import React from 'react';

import { SectionContainer } from '@/components/elements/SectionContainer';
import boatIcon from '@/public/assets/images/icon/Boat.png';
import destinationIcon from '@/public/assets/images/icon/Destination.png';
import guaranteeIcon from '@/public/assets/images/icon/Guarantee.png';
import serviceIcon from '@/public/assets/images/icon/Service.png';

import { FeatureCard } from './FeatureCard';

const features = [
  {
    image: guaranteeIcon,
    title: 'Best price guarantee',
    description:
      'Tempor tellus in aliquet eu et sit nulla tellus. Suspendi, molestie blan',
  },
  {
    image: destinationIcon,
    title: 'Curated destinations',
    description:
      'Ornare donec rhoncus vitae  neque, mauris dictum duis. Nibh urna ',
  },
  {
    image: serviceIcon,
    title: '24/7 Customer service',
    description: 'Etiam cras augue ornare pretium sit malesuada morbi or',
  },
  {
    image: boatIcon,
    title: '100% Verified boats',
    description:
      'Interdum quam pulvinar turpis tortor, egestas quiauris sagittis.',
  },
];

export interface FeatureProps {}

export const Feature = () => {
  return (
    <SectionContainer>
      <div className="flex flex-wrap items-center justify-center gap-1 md:gap-2 xl:gap-4">
        {features.map((item: any, i) => {
          return (
            <FeatureCard
              key={i}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
    </SectionContainer>
  );
};
