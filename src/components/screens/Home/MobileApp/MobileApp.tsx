import Image from 'next/image';

import { SectionContainer } from '@/components/elements/SectionContainer';
import { Typography } from '@/components/elements/Typography';
import appStoreIcon from '@/public/assets/images/icon/App-store.png';
import boatIcon from '@/public/assets/images/icon/Boat.png';
import destinationIcon from '@/public/assets/images/icon/Destination.png';
import googlePlayIcon from '@/public/assets/images/icon/Google-play.png';
import guaranteeIcon from '@/public/assets/images/icon/Guarantee.png';
import serviceIcon from '@/public/assets/images/icon/Service.png';
import mobile from '@/public/assets/images/yacht/mobile.png';

export const Service = ({ image, title }: any) => {
  return (
    <div className="flex w-[45%] items-center gap-2 md:w-[23%] xl:w-[40%] xl:gap-4 ">
      <div className="relative flex h-10 w-10 items-center justify-center  sm:h-10 sm:w-10 lg:h-32 lg:w-32">
        <Image
          objectFit="contain"
          layout="fixed"
          src={image}
          alt="guarantee icon"
          width={70}
          height={70}
        />
      </div>

      <div className="flex gap-3 lg:gap-1">
        <Typography variant="lg" className="font-inter leading-none">
          {title}
        </Typography>
      </div>
    </div>
  );
};

export const MobileApp = () => {
  return (
    <SectionContainer>
      <div className="flex">
        <div className="xl:w-[40%]">
          <div className="flex flex-col gap-4">
            <Typography
              variant="h3"
              className="mb-5 w-[90%] font-playfair leading-none xl:mb-0 xl:w-full"
            >
              Find and book boat rentals, jet skis, yachts, pontoon boats, and
              fishing charters.
            </Typography>
            <Typography variant="lg" className="font-inter">
              For captained experiences and drive-it-yourself rentals, GetMyBoat
              is the easiest way to find fun on the water anywhere in the world.
              Connect directly with boat owners and captains to securely book
              online.
            </Typography>
            <div className="my-5 flex flex-wrap items-center gap-4">
              <Service image={guaranteeIcon} title="Best price guarantee" />
              <Service image={destinationIcon} title="Curated destinations" />
              <Service image={serviceIcon} title="24/7 Customer service" />
              <Service image={boatIcon} title="100% Verified boats" />
            </div>
            <div className="flex gap-3 lg:gap-1">
              <div className="relative flex w-24 items-center sm:w-32 lg:w-56">
                <Image
                  objectFit="contain"
                  layout="fixed"
                  src={appStoreIcon}
                  alt="app store icon"
                  width={167}
                  height={55}
                />
              </div>
              <div className="relative flex w-24 items-center sm:w-32 lg:w-56">
                <Image
                  objectFit="contain"
                  layout="fixed"
                  src={googlePlayIcon}
                  alt="google play icon"
                  width={189}
                  height={55}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden h-full justify-center xl:flex xl:w-3/5">
          <Image src={mobile} alt="mobile photo" width={845} height={659} />
        </div>
      </div>
    </SectionContainer>
  );
};
