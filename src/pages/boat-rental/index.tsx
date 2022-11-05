import {
  Dialog,
  Disclosure,
  Menu,
  Popover,
  Transition,
} from '@headlessui/react';
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  HeartIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { Fragment, useState } from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const sortOptions = [
  { name: 'Most Popular', href: '#' },
  { name: 'Best Rating', href: '#' },
  { name: 'Newest', href: '#' },
];
const filters = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'boat 1', label: 'Boat 1' },
      { value: 'boat 2', label: 'Boat 2' },
      { value: 'boat 3', label: 'Boat 3' },
    ],
  },
  {
    id: 'tags',
    name: 'Tags',
    options: [
      { value: 'boat 1', label: 'Boat 1' },
      { value: 'boat 2', label: 'Boat 2' },
      { value: 'boat 3', label: 'Boat 3' },
    ],
  },
  {
    id: 'group-size',
    name: 'Group Size',
    options: [
      { value: '1', label: '1-3 Guests' },
      { value: '2', label: '4-10 Guests' },
      { value: '3', label: '11-30 Guests' },
      { value: '4', label: '30+ Guests' },
    ],
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

const products = [
  {
    name: 'Scuba Diving in Philippines Island',
    price: '$7,500',
    href: '#',
    imageSrc: '/assets/images/yacht/yacht-1.png',
    imageAlt: 'Yacht',
  },
  {
    name: 'Scuba Diving in Philippines Island',
    price: '$7,500',
    href: '#',
    imageSrc: '/assets/images/yacht/yacht-1.png',
    imageAlt: 'Yacht',
  },
  {
    name: 'Scuba Diving in Philippines Island',
    price: '$7,500',
    href: '#',
    imageSrc: '/assets/images/yacht/yacht-1.png',
    imageAlt: 'Yacht',
  },
  {
    name: 'Scuba Diving in Philippines Island',
    price: '$7,500',
    href: '#',
    imageSrc: '/assets/images/yacht/yacht-1.png',
    imageAlt: 'Yacht',
  },
  {
    name: 'Scuba Diving in Philippines Island',
    price: '$7,500',
    href: '#',
    imageSrc: '/assets/images/yacht/yacht-1.png',
    imageAlt: 'Yacht',
  },
  {
    name: 'Scuba Diving in Philippines Island',
    price: '$7,500',
    href: '#',
    imageSrc: '/assets/images/yacht/yacht-1.png',
    imageAlt: 'Yacht',
  },
  {
    name: 'Scuba Diving in Philippines Island',
    price: '$7,500',
    href: '#',
    imageSrc: '/assets/images/yacht/yacht-1.png',
    imageAlt: 'Yacht',
  },
  {
    name: 'Scuba Diving in Philippines Island',
    price: '$7,500',
    href: '#',
    imageSrc: '/assets/images/yacht/yacht-1.png',
    imageAlt: 'Yacht',
  },
  {
    name: 'Scuba Diving in Philippines Island',
    price: '$7,500',
    href: '#',
    imageSrc: '/assets/images/yacht/yacht-1.png',
    imageAlt: 'Yacht',
  },
  {
    name: 'Scuba Diving in Philippines Island',
    price: '$7,500',
    href: '#',
    imageSrc: '/assets/images/yacht/yacht-1.png',
    imageAlt: 'Yacht',
  },
  {
    name: 'Scuba Diving in Philippines Island',
    price: '$7,500',
    href: '#',
    imageSrc: '/assets/images/yacht/yacht-1.png',
    imageAlt: 'Yacht',
  },
  {
    name: 'Scuba Diving in Philippines Island',
    price: '$7,500',
    href: '#',
    imageSrc: '/assets/images/yacht/yacht-1.png',
    imageAlt: 'Yacht',
  },
  {
    name: 'Scuba Diving in Philippines Island',
    price: '$7,500',
    href: '#',
    imageSrc: '/assets/images/yacht/yacht-1.png',
    imageAlt: 'Yacht',
  },
  {
    name: 'Scuba Diving in Philippines Island',
    price: '$7,500',
    href: '#',
    imageSrc: '/assets/images/yacht/yacht-1.png',
    imageAlt: 'Yacht',
  },
  {
    name: 'Scuba Diving in Philippines Island',
    price: '$7,500',
    href: '#',
    imageSrc: '/assets/images/yacht/yacht-1.png',
    imageAlt: 'Yacht',
  },
  {
    name: 'Scuba Diving in Philippines Island',
    price: '$7,500',
    href: '#',
    imageSrc: '/assets/images/yacht/yacht-1.png',
    imageAlt: 'Yacht',
  },
  {
    name: 'Scuba Diving in Philippines Island',
    price: '$7,500',
    href: '#',
    imageSrc: '/assets/images/yacht/yacht-1.png',
    imageAlt: 'Yacht',
  },
  {
    name: 'Scuba Diving in Philippines Island',
    price: '$7,500',
    href: '#',
    imageSrc: '/assets/images/yacht/yacht-1.png',
    imageAlt: 'Yacht',
  },
  {
    name: 'Scuba Diving in Philippines Island',
    price: '$7,500',
    href: '#',
    imageSrc: '/assets/images/yacht/yacht-1.png',
    imageAlt: 'Yacht',
  },
  {
    name: 'Scuba Diving in Philippines Island',
    price: '$7,500',
    href: '#',
    imageSrc: '/assets/images/yacht/yacht-1.png',
    imageAlt: 'Yacht',
  },
];

const Login = () => {
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <Main
      meta={
        <Meta
          title="Boat Rentals Near You | Boat Rental World"
          description="Search boat rentals, jet skis, yachts, pontoons, and fishing charters. Compare updated prices and availability, photos, reviews and more!"
        />
      }
    >
      <div className="bg-chathams-blue-900 pt-[56px] lg:pt-[74px]">
        <Transition.Root show={openFilter} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 sm:hidden"
            onClose={setOpenFilter}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-casablanca-500"
                      onClick={() => setOpenFilter(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4">
                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.name}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-gray-400">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  <ChevronDownIcon
                                    className={classNames(
                                      open ? '-rotate-180' : 'rotate-0',
                                      'h-5 w-5 transform'
                                    )}
                                    aria-hidden="true"
                                  />
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      className="h-4 w-4 rounded border-gray-300 text-casablanca-600 focus:ring-casablanca-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 text-sm text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <div className="mx-auto max-w-full px-4 text-center sm:px-6 lg:px-8">
          <div className="py-24">
            <h1 className="text-4xl font-semibold tracking-tight text-casablanca-400">
              Browse Boat Rentals Near You
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <section
            aria-labelledby="filter-heading"
            className="border-t border-gray-200 py-6"
          >
            <h2 id="filter-heading" className="sr-only">
              Product filters
            </h2>

            <div className="flex items-center justify-between">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-white hover:text-casablanca-400">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 shrink-0 text-white group-hover:text-casablanca-400"
                      aria-hidden="true"
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
                  <Menu.Items className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option, i) => (
                        <Menu.Item key={i}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm font-medium text-gray-900'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button
                type="button"
                className="inline-block text-sm font-medium text-white hover:text-casablanca-400 sm:hidden"
                onClick={() => setOpenFilter(true)}
              >
                Filters
              </button>

              <Popover.Group className="hidden sm:flex sm:items-baseline sm:space-x-8">
                {filters.map((section, sectionIdx) => (
                  <Popover
                    as="div"
                    key={section.name}
                    id={`desktop-menu-${sectionIdx}`}
                    className="relative inline-block text-left"
                  >
                    <div>
                      <Popover.Button className="group inline-flex items-center justify-center text-sm font-medium text-white hover:text-casablanca-400 focus:outline-none">
                        <span>{section.name}</span>
                        <ChevronDownIcon
                          className="-mr-1 ml-1 h-5 w-5 shrink-0 text-white group-hover:text-casablanca-400"
                          aria-hidden="true"
                        />
                      </Popover.Button>
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
                      <Popover.Panel className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black/5 focus:outline-none">
                        <form className="space-y-4">
                          {section.options.map((option, optionIdx) => (
                            <div
                              key={option.value}
                              className="flex items-center"
                            >
                              <input
                                id={`filter-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                defaultValue={option.value}
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-casablanca-600 focus:ring-casablanca-500"
                              />
                              <label
                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </form>
                      </Popover.Panel>
                    </Transition>
                  </Popover>
                ))}
              </Popover.Group>
            </div>
          </section>
        </div>
        <div className="bg-white py-16 sm:py-20">
          <div className="mx-auto px-4 sm:px-6 max-w-screen-2xl lg:px-8">
            <div className="mt-10 grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product, i) => (
                <div key={i} className="group relative">
                  <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                    <HeartIcon className="h-6 w-6 text-white absolute top-2 right-2" />
                  </div>
                  <h3 className="mt-4 text-base text-gray-900 font-inter">
                    <a href={product.href}>
                      <span className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <div className="flex justify-between items-center">
                    <p className="mt-1 text-sm font-medium text-casablanca-500">
                      {product.price}{' '}
                      <span className="text-xs text-gray-800">person</span>
                    </p>
                    <div className="flex items-center gap-x-1">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 text-casablanca-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-base text-casablanca-500">4.5</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* pagination */}
            <div className="mt-10 flex items-center justify-between bg-white px-4 py-3 sm:px-6">
              <div className="flex flex-col items-center justify-center w-full">
                <div>
                  <nav
                    className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                    aria-label="Pagination"
                  >
                    <a
                      href="#"
                      className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                    >
                      <span className="sr-only">Previous</span>
                      <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                    </a>
                    <a
                      href="#"
                      aria-current="page"
                      className="relative z-10 inline-flex items-center border border-casablanca-500 bg-casablanca-50 px-4 py-2 text-sm font-medium text-casablanca-600 focus:z-20"
                    >
                      1
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                    >
                      2
                    </a>
                    <a
                      href="#"
                      className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
                    >
                      3
                    </a>
                    <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-white">
                      ...
                    </span>
                    <a
                      href="#"
                      className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
                    >
                      8
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                    >
                      9
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                    >
                      10
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                    >
                      <span className="sr-only">Next</span>
                      <ChevronRightIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </a>
                  </nav>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-white">
                    Showing <span className="font-medium">1</span> to{' '}
                    <span className="font-medium">10</span> of{' '}
                    <span className="font-medium">97</span> results
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Login;
