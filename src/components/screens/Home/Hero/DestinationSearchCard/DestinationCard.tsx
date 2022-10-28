import { MapPinIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';

import { Button } from '@/components/elements/Button';
import { Card } from '@/components/elements/Card';
import { TextInput } from '@/components/elements/TextInput';
import { Typography } from '@/components/elements/Typography';

export interface DestinationCardProps {}

export const DestinationCard = ({ ...props }: DestinationCardProps) => {
  const [text, setText] = useState('');

  const handleChange = (value: string) => {
    setText(value);
  };

  return (
    <div className="md:max-w-[600px]">
      <Card {...props}>
        <div className="flex flex-col gap-4 p-5 md:gap-5 lg:gap-7">
          <Typography
            variant="h2"
            customWeight="medium"
            className="font-playfair"
          >
            Discover Yacht Voyage Experiences
          </Typography>
          <Typography
            variant="lg"
            customWeight="medium"
            className="font-playfair"
          >
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </Typography>
          <div>
            <TextInput
              type="text"
              value={text}
              handleChange={handleChange}
              label="choose your destination"
              placeholder="where are you going?"
              disabled={false}
              LeadingIcon={<MapPinIcon />}
            />
          </div>

          <div>
            <Button
              variant="primary"
              size="lg"
              className={'w-full justify-center'}
            >
              Search
            </Button>
            <div className="flex flex-wrap items-center gap-1 pt-3 font-inter md:gap-2">
              Most searched:
              <Typography
                variant="sm"
                customWeight="medium"
                className="font-inter underline "
              >
                Zurich
              </Typography>
              <Typography
                variant="sm"
                customWeight="medium"
                className="font-inter underline "
              >
                Playa del Carmen
              </Typography>
              <Typography
                variant="sm"
                customWeight="medium"
                className="font-inter underline "
              >
                Alicante
              </Typography>
              <Typography
                variant="sm"
                customWeight="medium"
                className="font-inter underline"
              >
                Amalfi Coast
              </Typography>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
