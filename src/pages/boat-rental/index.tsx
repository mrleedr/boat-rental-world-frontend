import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const products = [
  {
    name: 'Scuba Diving in Philippines Island',
    price: 'PHP7,500',
    href: '#',
    imageSrc: '/assets/images/yacht/yacht-1.png',
    imageAlt: 'Yacht',
  },
  {
    name: 'Scuba Diving in Philippines Island',
    price: 'PHP7,500',
    href: '#',
    imageSrc: '/assets/images/yacht/yacht-1.png',
    imageAlt: 'Yacht',
  },
  {
    name: 'Scuba Diving in Philippines Island',
    price: 'PHP7,500',
    href: '#',
    imageSrc: '/assets/images/yacht/yacht-1.png',
    imageAlt: 'Yacht',
  },
  {
    name: 'Scuba Diving in Philippines Island',
    price: 'PHP7,500',
    href: '#',
    imageSrc: '/assets/images/yacht/yacht-1.png',
    imageAlt: 'Yacht',
  },
  {
    name: 'Scuba Diving in Philippines Island',
    price: 'PHP7,500',
    href: '#',
    imageSrc: '/assets/images/yacht/yacht-1.png',
    imageAlt: 'Yacht',
  },
  {
    name: 'Scuba Diving in Philippines Island',
    price: 'PHP7,500',
    href: '#',
    imageSrc: '/assets/images/yacht/yacht-1.png',
    imageAlt: 'Yacht',
  },
  {
    name: 'Scuba Diving in Philippines Island',
    price: 'PHP7,500',
    href: '#',
    imageSrc: '/assets/images/yacht/yacht-1.png',
    imageAlt: 'Yacht',
  },
  {
    name: 'Scuba Diving in Philippines Island',
    price: 'PHP7,500',
    href: '#',
    imageSrc: '/assets/images/yacht/yacht-1.png',
    imageAlt: 'Yacht',
  },
  {
    name: 'Scuba Diving in Philippines Island',
    price: 'PHP7,500',
    href: '#',
    imageSrc: '/assets/images/yacht/yacht-1.png',
    imageAlt: 'Yacht',
  },
  {
    name: 'Scuba Diving in Philippines Island',
    price: 'PHP7,500',
    href: '#',
    imageSrc: '/assets/images/yacht/yacht-1.png',
    imageAlt: 'Yacht',
  },
  {
    name: 'Scuba Diving in Philippines Island',
    price: 'PHP7,500',
    href: '#',
    imageSrc: '/assets/images/yacht/yacht-1.png',
    imageAlt: 'Yacht',
  },
  {
    name: 'Scuba Diving in Philippines Island',
    price: 'PHP7,500',
    href: '#',
    imageSrc: '/assets/images/yacht/yacht-1.png',
    imageAlt: 'Yacht',
  },
  {
    name: 'Scuba Diving in Philippines Island',
    price: 'PHP7,500',
    href: '#',
    imageSrc: '/assets/images/yacht/yacht-1.png',
    imageAlt: 'Yacht',
  },
  {
    name: 'Scuba Diving in Philippines Island',
    price: 'PHP7,500',
    href: '#',
    imageSrc: '/assets/images/yacht/yacht-1.png',
    imageAlt: 'Yacht',
  },
  {
    name: 'Scuba Diving in Philippines Island',
    price: 'PHP7,500',
    href: '#',
    imageSrc: '/assets/images/yacht/yacht-1.png',
    imageAlt: 'Yacht',
  },
  {
    name: 'Scuba Diving in Philippines Island',
    price: 'PHP7,500',
    href: '#',
    imageSrc: '/assets/images/yacht/yacht-1.png',
    imageAlt: 'Yacht',
  },
  {
    name: 'Scuba Diving in Philippines Island',
    price: 'PHP7,500',
    href: '#',
    imageSrc: '/assets/images/yacht/yacht-1.png',
    imageAlt: 'Yacht',
  },
  {
    name: 'Scuba Diving in Philippines Island',
    price: 'PHP7,500',
    href: '#',
    imageSrc: '/assets/images/yacht/yacht-1.png',
    imageAlt: 'Yacht',
  },
  {
    name: 'Scuba Diving in Philippines Island',
    price: 'PHP7,500',
    href: '#',
    imageSrc: '/assets/images/yacht/yacht-1.png',
    imageAlt: 'Yacht',
  },
  {
    name: 'Scuba Diving in Philippines Island',
    price: 'PHP7,500',
    href: '#',
    imageSrc: '/assets/images/yacht/yacht-1.png',
    imageAlt: 'Yacht',
  },
];

const Login = () => {
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
        <div className="bg-white py-20">
          <div className="mx-auto px-4 sm:px-6 max-w-screen-2xl lg:px-8">
            <div className="md:flex md:items-center md:justify-between">
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
                Browse Boat Rentals Near You
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product, i) => (
                <div key={i} className="group relative">
                  <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-4 text-base text-gray-900 font-inter">
                    <a href={product.href}>
                      <span className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm font-medium text-gray-900">
                    {product.price}{' '}
                    <span className="text-xs text-gray-700">person</span>
                  </p>
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
                    <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">
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
                  <p className="text-sm text-gray-700">
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
