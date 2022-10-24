import Image from 'next/image';
import React from 'react';

export type AvatarProps = {
  image: string;
};

export const Avatar = ({ image }: AvatarProps) => {
  return (
    <div className="relative h-10 w-10 lg:h-14 lg:w-14">
      <Image
        layout="fill"
        src={image}
        className="rounded-full"
        alt="avatar image"
      />
    </div>
  );
};
