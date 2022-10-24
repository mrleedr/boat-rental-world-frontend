import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from 'next/image';
import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Typography } from '@/components/elements/Typography';

export interface DestinationCardProps {}

const Rentals = [
  {
    id: 1,
    image: '/assets/images/yacht/boat-1.png',
    rental_location: 'Seven Mile Beach',
    available: 20,
  },
  {
    id: 2,
    image: '/assets/images/yacht/boat-2.png',
    rental_location: 'Stingray City',
    available: 40,
  },
  {
    id: 3,
    image: '/assets/images/yacht/boat-3.png',
    rental_location: 'Diving in the Cayman Islands',
    available: 38,
  },
  {
    id: 4,
    image: '/assets/images/yacht/boat-4.png',
    rental_location: 'Atlantis Submarines',
    available: 28,
  },
  {
    id: 5,
    image: '/assets/images/yacht/boat-5.png',
    rental_location: 'Bloody Bay Marine Reserve',
    available: 30,
  },
];

export const RentalDestinationCard = ({ image, location, available }: any) => {
  return (
    <div className="flex h-[250px] items-center justify-center md:h-[300px] lg:h-[400px] xl:h-[600px]">
      <div className="flex grow flex-col items-start justify-center gap-2 border-l border-gray-300 px-2 md:gap-2 md:px-5 lg:gap-6">
        <div className="relative h-[100px] w-full md:h-[150px] lg:h-[225px] xl:h-[380px]">
          <Image
            className="rounded-lg"
            layout="fill"
            objectFit="cover"
            src={image}
            alt="yacht"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <Typography variant="md" customColor="text-gray-500" className="">
            {available} yachts available
          </Typography>
          <Typography variant="h6" className="h-10 ">
            {location}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export const RentalCarousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        slidesPerGroup={2}
        loop={true}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 5,
          },
        }}
        // eslint-disable-next-line tailwindcss/no-custom-classname
        className="mySwiper"
      >
        {Rentals.map((item: any) => (
          <SwiperSlide key={item.id}>
            <RentalDestinationCard
              key={item.id}
              image={item.image}
              location={item.rental_location}
              available={item.available}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
