import { Dialog, Menu, Transition } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Fragment, useState } from 'react';

const user = {
  name: 'Chelsea Hagon',
  email: 'chelsea.hagon@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

const userNavigation0 = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Messages', href: '#' },
  { name: 'Entries', href: '#' },
  { name: 'Favorites', href: '#' },
];

const userNavigation1 = [
  { name: 'Listings', href: '#' },
  { name: 'Payout', href: '#' },
];

const userNavigation2 = [
  { name: 'Profile', href: '#' },
  { name: 'Logout', href: '#' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const Navbars = () => {
  const [openSide, setOpenSide] = useState(false);

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', changeNavbarColor);
  }

  return (
    <>
      <header
        className={classNames(
          'fixed lg:overflow-y-visible z-20 w-full transition-all',
          colorChange ? 'bg-white' : 'lg:bg-transparent'
        )}
      >
        <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8 py-2 lg:py-0">
          <div className="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
            <div className="flex xl:col-span-1">
              <div className="flex shrink-0 items-center">
                <Link href="/">
                  {colorChange ? (
                    <img
                      className="block h-10"
                      src="/assets/images/logo/logo-only-original.svg"
                      alt="Your Company"
                    />
                  ) : (
                    <img
                      className="block h-10"
                      src="/assets/images/logo/logo-only-white.svg"
                      alt="Your Company"
                    />
                  )}
                </Link>
              </div>
            </div>
            <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-5 hidden lg:block">
              <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                <div className="w-full">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div
                    className={`transition-all relative ${
                      colorChange ? 'visible' : 'invisible'
                    }`}
                  >
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder:text-gray-500 focus:border-casablanca-500 focus:text-gray-900 focus:placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-casablanca-500 sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center md:absolute md:inset-y-0 md:right-0 lg:hidden">
              {/* Mobile menu button */}
              <button
                onClick={() => setOpenSide(true)}
                className="-mx-2 inline-flex items-center justify-center rounded-md p-2 bg-casablanca-400 text-white hover:bg-casablanca-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-casablanca-500"
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-6">
              <a
                href="#"
                className="ml-6 inline-flex items-center rounded-full bg-gradient-to-r from-casablanca-200 to-casablanca-400 px-6 py-2 text-sm font-medium text-casablanca-900 shadow-sm hover:from-casablanca-400 hover:to-casablanca-400 focus:outline-none"
              >
                Register your Yacht
              </a>
              <Link href="/auth/login">
                <span
                  className={`ml-6 block font-medium ${
                    colorChange ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  Login
                </span>
              </Link>
              <Link href="/auth/register">
                <span
                  className={`ml-6 block font-medium ${
                    colorChange ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  Create Account
                </span>
              </Link>

              {true && (
                <>
                  {' '}
                  <a
                    href="#"
                    className="ml-5 shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-casablanca-500 focus:ring-offset-2"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </a>
                  <Menu as="div" className="relative ml-3 shrink-0">
                    <div>
                      <Menu.Button className="flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-casablanca-500 focus:ring-offset-2">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={user.imageUrl}
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                        <div className="py-1">
                          {userNavigation0.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block py-2 px-4 text-sm text-gray-700'
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                        <div className="py-1">
                          {userNavigation1.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block py-2 px-4 text-sm text-gray-700'
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                        <div className="py-1">
                          {userNavigation2.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block py-2 px-4 text-sm text-gray-700'
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
      {/* Side Menu */}
      <Transition.Root show={openSide} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setOpenSide}>
          <div className="fixed inset-0" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
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
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                      <div className="p-4">
                        <div className="flex items-center justify-between">
                          <h2 className="text-lg font-medium text-gray-900">
                            Menu
                          </h2>
                          <button
                            type="button"
                            className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-casablanca-500"
                            onClick={() => setOpenSide(false)}
                          >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      {/* Main */}
                      <div></div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
