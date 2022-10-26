import {
  Bars3Icon,
  GlobeAsiaAustraliaIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { Typography } from '@/components/elements/Typography';
import logo2 from '@/public/assets/images/logo/Logo.jpg';
import logo1 from '@/public/assets/images/logo/Logo-white.png';

import { MenuPopoutPanel } from './MenuPopoutPanel';

export interface HeaderProps {}

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('text-slate-50');
  const [logo, setLogo] = useState(logo1);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('bg-white');
        setTextColor('text-black');
        setLogo(logo2);
      } else {
        setColor('bg-transparent');
        setTextColor('text-slate-50');
        setLogo(logo1);
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <>
      <div
        className={classNames(
          color,
          'fixed top-0 z-20 flex items-center justify-between w-full h-10 border-y border-slate-100/50 md:h-14 lg:h-20'
        )}
      >
        <div className="relative ml-5 h-10 w-56 md:ml-6">
          <Image layout="fill" src={logo} alt="logo" />
        </div>
        <div className="flex items-center">
          <div
            className={classNames(
              textColor,
              'hidden border-l border-slate-100/50 md:block md:p-4 lg:p-7'
            )}
          >
            <Typography
              variant="md"
              customWeight="medium"
              customColor={textColor}
              className="font-manjari"
            >
              Register you Yacht
            </Typography>
          </div>
          <div className="hidden border-l border-slate-100/50 p-6 md:block md:p-3 lg:p-6">
            <GlobeAsiaAustraliaIcon
              className={classNames(textColor, 'w-8 h-8')}
            />
          </div>
          <div className="hidden border-l border-slate-100/50 p-6 md:block md:p-3 lg:p-6">
            <UserCircleIcon className={classNames(textColor, 'w-8 h-8')} />
          </div>
          <div
            onClick={() => setOpen(true)}
            className="cursor-pointer bg-yellow-500 p-1 hover:bg-yellow-800 md:block md:p-3 lg:p-6"
          >
            <Bars3Icon className="h-8 w-8 text-white" />
          </div>
        </div>
      </div>
      <MenuPopoutPanel open={open} setOpen={setOpen} />
    </>
  );
};
