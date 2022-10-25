import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';

export interface TestimonialCardProps {}

export const TestimonialCard = ({
  image,
  name,
  location,
  title,
  content,
}: any) => {
  return (
    <div className="relative m-4 flex flex-col rounded-lg p-4 shadow-lg shadow-gray-300 md:p-10">
      <div className="flex items-center justify-start gap-2 md:gap-3">
        <div className="relative h-10 w-10 lg:h-14 lg:w-14">
          <Image
            layout="fill"
            src={image}
            className="rounded-full"
            alt="profile image"
          />
        </div>
        <div className="flex-1">
          <div className="flex w-full items-center justify-between">
            <h2 className="flex items-center justify-center gap-2 pt-1 md:gap-4">
              {name}
            </h2>
            <span className="flex items-center justify-center gap-1 text-yellow-800">
              <StarIcon className="w-4 md:w-5" />
              <StarIcon className="w-4 md:w-5" />
              <StarIcon className="w-4 md:w-5" />
              <StarIcon className="w-4 md:w-5" />
              <StarIcon className="w-4 md:w-5" />
            </span>
          </div>

          <p className="text-gray-500">{location}</p>
        </div>
      </div>
      <h3 className="mt-4 text-blue-500">{title}</h3>
      <p className="">{content}</p>
    </div>
  );
};
