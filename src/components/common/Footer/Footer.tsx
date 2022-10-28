import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Typography } from '@/components/elements/Typography';
import Logo from '@/public/assets/images/logo/Logo.jpg';

const navigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
};

// export const FooterNavigation = () => {
//   return <></>;
// };
export interface FooterProps {
  navigation: any;
}

export const Footer = () => {
  return (
    <footer aria-labelledby="footer-heading">
      <div className="flex flex-col gap-5 bg-gray-100 py-5 md:pt-10 lg:pt-14 xl:pt-20">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-between gap-4 px-4 md:pb-10 lg:flex-row lg:pb-14">
            <div className="flex flex-col gap-4 lg:w-[60%] xl:w-[40%] ">
              <div className="relative h-14 w-56 xl:h-20 xl:w-96">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={Logo}
                  alt="logo"
                />
              </div>
              <Typography variant="lg" className="font-inter">
                Venenatis tellus in metus vulputate eu scelerisque felis. Dictum
                fusce ut placerat orci. Cursus euismod quis viverra nibh. Diam
                donec adipiscing tristique risus nec feugiat in. Tellus mauris a
                diam maecenas sed enim ut. Nunc scelerisque viverra mauris in.
              </Typography>
            </div>
            <div className="flex w-full flex-wrap justify-around gap-4 lg:flex-nowrap lg:gap-7 xl:w-[40%] ">
              <div className="flex w-[27%] flex-col gap-3 lg:w-[20%] lg:gap-5">
                <Typography
                  variant="xl"
                  customWeight="bold"
                  className="font-inter"
                >
                  Quick Links
                </Typography>

                <ul>
                  {navigation.solutions.map((item: any) => (
                    <li key={item.name}>
                      <Link href={item.href}>
                        <a>
                          <Typography
                            customColor="hover:text-yellow-500"
                            variant="lg"
                          >
                            {item.name}
                          </Typography>
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-[27%] flex-col gap-3 lg:w-[20%] lg:gap-5">
                <Typography
                  variant="xl"
                  customWeight="bold"
                  className="font-inter"
                >
                  Experiences
                </Typography>

                <ul>
                  {navigation.support.map((item: any) => (
                    <li key={item.name}>
                      <Link href={item.href}>
                        <a>
                          <Typography
                            customColor="hover:text-yellow-500"
                            variant="lg"
                          >
                            {item.name}
                          </Typography>
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-[27%] flex-col gap-3 lg:w-[20%] lg:gap-5">
                <Typography
                  variant="xl"
                  customWeight="bold"
                  className="font-inter"
                >
                  Information
                </Typography>

                <ul>
                  {navigation.company.map((item: any) => (
                    <li key={item.name}>
                      <Link href={item.href}>
                        <a>
                          <Typography
                            customColor="hover:text-yellow-500"
                            variant="lg"
                          >
                            {item.name}
                          </Typography>
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="h-1 bg-gray-500"></div>
        <div className="container mx-auto flex items-center bg-gray-100 py-5 px-4">
          <div className="block w-full justify-between gap-4 xl:flex ">
            <h3>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolo
            </h3>
            <div className="flex gap-2 xl:gap-10">
              <p>Duis aute</p>
              <p>Duis aute i</p>
              <p>Duis aute iru</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
