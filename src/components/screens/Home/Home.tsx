import React from 'react';

import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/common/Header';

import { Banner } from './Banner';
import { BoatCategory } from './BoatCategory';
import { BookStep } from './BookStep';
import { CallToAction } from './CallToAction';
import { Feature } from './Feature';
import { Hero } from './Hero';
import { MobileApp } from './MobileApp';
import { RentalDestination } from './RentalDestination';
import { SailingDestination } from './SailingDestination';
import { SearchTag } from './SearchTag';
import { Testimonial } from './Testimonial';

export interface HomeProps {}

export const Home = ({ ...props }: HomeProps) => {
  return (
    <div {...props}>
      <Header />
      <Hero />
      <Feature />
      <RentalDestination />
      <MobileApp />
      <Banner />
      <BoatCategory />
      <SailingDestination />
      <CallToAction />
      <SearchTag />
      <BookStep />
      <Testimonial />
      <Footer />
    </div>
  );
};
