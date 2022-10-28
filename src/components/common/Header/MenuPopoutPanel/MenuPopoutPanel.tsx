import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react';

import { Button } from '@/components/elements/Button';
import { Typography } from '@/components/elements/Typography';
import About from '@/public/assets/images/icon/About.svg';
import Community from '@/public/assets/images/icon/Community.svg';
import Guide from '@/public/assets/images/icon/Guide.svg';
import Partners from '@/public/assets/images/icon/Partners.svg';

export interface SidePopoutPanelProps {}

export const MenuPopoutPanel = ({ open, setOpen }: any) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-20 overflow-hidden"
        onClose={setOpen}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0" />

          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="pointer-events-auto w-screen max-w-md  bg-white">
                {/* navigation */}
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="flex justify-end ">
                    <div
                      onClick={() => setOpen(false)}
                      className="cursor-pointer self-end bg-yellow-500 p-1 hover:bg-yellow-800 md:block md:p-3 lg:p-6"
                    >
                      <XMarkIcon className="h-8 w-8 text-white " />
                    </div>
                  </div>
                  {/* Main */}
                  <div className="flex flex-col gap-4 p-10">
                    <div>
                      <Typography
                        variant="h6"
                        customWeight="bold"
                        className="text-center font-inter"
                      >
                        Join 15,000 + others in booking their next destination
                      </Typography>
                    </div>
                    <div className="flex justify-center gap-4">
                      <Link href="/auth/login">
                        <a>
                          <Button
                            variant="primary"
                            size="md"
                            className="w-36 justify-center"
                          >
                            Login
                          </Button>
                        </a>
                      </Link>

                      <Link href="/auth/register">
                        <a>
                          <Button
                            variant="secondary"
                            size="md"
                            className="w-36 justify-center"
                          >
                            Register
                          </Button>
                        </a>
                      </Link>
                    </div>
                    <div className="h-[1px] bg-gray-500"></div>
                    <div>
                      <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-5">
                          <div className="flex items-center">
                            <Image
                              src={Community}
                              alt="icon"
                              width={24}
                              height={24}
                            />
                          </div>
                          <Typography variant="lg" className="font-inter">
                            Community
                          </Typography>
                        </li>
                        <li className="flex items-center gap-5">
                          <div className="flex items-center">
                            <Image
                              src={Partners}
                              alt="icon"
                              width={24}
                              height={24}
                            />
                          </div>
                          <Typography variant="lg" className="font-inter">
                            Partners
                          </Typography>
                        </li>
                        <li className="flex items-center gap-5">
                          <div className="flex items-center">
                            <Image
                              src={Guide}
                              alt="icon"
                              width={24}
                              height={24}
                            />
                          </div>
                          <Typography variant="lg" className="font-inter">
                            Guide
                          </Typography>
                        </li>
                        <li className="flex items-center gap-5">
                          <div className="flex items-center">
                            <Image
                              src={About}
                              alt="icon"
                              width={24}
                              height={24}
                            />
                          </div>
                          <Typography variant="lg" className="font-inter">
                            About
                          </Typography>
                        </li>
                      </ul>
                    </div>
                    <div className="h-[1px] bg-gray-500"></div>
                    <div>
                      <ul className="flex flex-col gap-4">
                        <li>
                          <Typography
                            variant="lg"
                            customColor="text-gray-500"
                            className="font-inter"
                          >
                            Customers
                          </Typography>
                        </li>
                        <li>
                          <Typography
                            variant="lg"
                            customColor="text-gray-500"
                            className="font-inter"
                          >
                            Webinars
                          </Typography>
                        </li>
                        <li>
                          <Typography
                            variant="lg"
                            customColor="text-gray-500"
                            className="font-inter"
                          >
                            Careers
                          </Typography>
                        </li>
                        <li>
                          <Typography
                            variant="lg"
                            customColor="text-gray-500"
                            className="font-inter"
                          >
                            Press
                          </Typography>
                        </li>
                        <li>
                          <Typography
                            variant="lg"
                            customColor="text-gray-500"
                            className="font-inter"
                          >
                            Privacy
                          </Typography>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
