import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from 'next/image';
import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Typography } from '@/components/elements/Typography';

export interface SailingCarouselProps {}

const topDestination = [
  {
    id: 1,
    image: '/assets/images/yacht/yacht-1.png',
    rental_location: 'Manhattan Luxury Boat at Chelsea Piers',
    city: 'Powerboats in Manhattan',
  },
  {
    id: 2,
    image: '/assets/images/yacht/yacht-2.png',
    rental_location: 'Fishing & Cruising New York City',
    city: 'Powerboats in Long Island',
  },
  {
    id: 3,
    image: '/assets/images/yacht/yacht-3.png',
    rental_location: 'Classic Yacht Charter in New York, New York',
    city: 'Sailing in Manhattan',
  },
  {
    id: 4,
    image: '/assets/images/yacht/yacht-4.png',
    rental_location: 'La Vie on Rose in New York and New Jersey',
    city: 'Sailing in Manhattan',
  },
  {
    id: 5,
    image: '/assets/images/yacht/yacht-5.png',
    rental_location: 'Classic Picnic Motorboat in New Yor...',
    city: 'Motorboat in Manhattan',
  },
];

export const SailingDestinationCard = ({ image, location, available }: any) => {
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
            {available}
          </Typography>
          <Typography variant="h6" className="h-10 ">
            {location}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export const SailingCarousel = () => {
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
        {topDestination.map((item: any) => (
          <SwiperSlide key={item.id}>
            <SailingDestinationCard
              key={item.id}
              image={item.image}
              location={item.rental_location}
              available={item.city}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
