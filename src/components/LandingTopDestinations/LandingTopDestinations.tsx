import { Tab } from '@headlessui/react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const categories = {
  'Cayman Islands': [
    {
      id: 1,
      title: 'Seven Mile Beach',
      available: 20,
      image: '/assets/images/yacht/yacht-1.png',
    },
    {
      id: 2,
      title: 'Seven Mile Beach',
      available: 20,
      image: '/assets/images/yacht/yacht-1.png',
    },
    {
      id: 3,
      title: 'Seven Mile Beach',
      available: 20,
      image: '/assets/images/yacht/yacht-1.png',
    },
    {
      id: 4,
      title: 'Seven Mile Beach',
      available: 20,
      image: '/assets/images/yacht/yacht-1.png',
    },
    {
      id: 5,
      title: 'Seven Mile Beach',
      available: 20,
      image: '/assets/images/yacht/yacht-1.png',
    },
    {
      id: 6,
      title: 'Seven Mile Beach',
      available: 20,
      image: '/assets/images/yacht/yacht-1.png',
    },
  ],
  Madagascar: [
    {
      id: 1,
      title: 'Seven Mile Beach',
      available: 20,
      image: '/assets/images/yacht/yacht-1.png',
    },
    {
      id: 2,
      title: 'Seven Mile Beach',
      available: 20,
      image: '/assets/images/yacht/yacht-1.png',
    },
    {
      id: 3,
      title: 'Seven Mile Beach',
      available: 20,
      image: '/assets/images/yacht/yacht-1.png',
    },
    {
      id: 4,
      title: 'Seven Mile Beach',
      available: 20,
      image: '/assets/images/yacht/yacht-1.png',
    },
    {
      id: 5,
      title: 'Seven Mile Beach',
      available: 20,
      image: '/assets/images/yacht/yacht-1.png',
    },
    {
      id: 6,
      title: 'Seven Mile Beach',
      available: 20,
      image: '/assets/images/yacht/yacht-1.png',
    },
  ],
  'Turks & Caicos': [
    {
      id: 1,
      title: 'Seven Mile Beach',
      available: 20,
      image: '/assets/images/yacht/yacht-1.png',
    },
    {
      id: 2,
      title: 'Seven Mile Beach',
      available: 20,
      image: '/assets/images/yacht/yacht-1.png',
    },
    {
      id: 3,
      title: 'Seven Mile Beach',
      available: 20,
      image: '/assets/images/yacht/yacht-1.png',
    },
    {
      id: 4,
      title: 'Seven Mile Beach',
      available: 20,
      image: '/assets/images/yacht/yacht-1.png',
    },
    {
      id: 5,
      title: 'Seven Mile Beach',
      available: 20,
      image: '/assets/images/yacht/yacht-1.png',
    },
    {
      id: 6,
      title: 'Seven Mile Beach',
      available: 20,
      image: '/assets/images/yacht/yacht-1.png',
    },
  ],
  Guadeloupe: [
    {
      id: 1,
      title: 'Seven Mile Beach',
      available: 20,
      image: '/assets/images/yacht/yacht-1.png',
    },
    {
      id: 2,
      title: 'Seven Mile Beach',
      available: 20,
      image: '/assets/images/yacht/yacht-1.png',
    },
    {
      id: 3,
      title: 'Seven Mile Beach',
      available: 20,
      image: '/assets/images/yacht/yacht-1.png',
    },
    {
      id: 4,
      title: 'Seven Mile Beach',
      available: 20,
      image: '/assets/images/yacht/yacht-1.png',
    },
    {
      id: 5,
      title: 'Seven Mile Beach',
      available: 20,
      image: '/assets/images/yacht/yacht-1.png',
    },
    {
      id: 6,
      title: 'Seven Mile Beach',
      available: 20,
      image: '/assets/images/yacht/yacht-1.png',
    },
  ],
};

export const LandingTopDestinations = () => {
  return (
    <div className="bg-bone-50 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:justify-between lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl leading-tight">
          Top Destinations
        </h2>
        <p className="mt-3 text-base text-gray-800">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="mt-8 mx-auto max-w-screen-2xl px-4 sm:px-6 lg:flex lg:justify-between lg:px-8">
        <div className="w-full max-w-full px-2 sm:px-0">
          <Tab.Group>
            <Tab.List className="-mb-px flex space-x-8 overflow-x-auto">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      'whitespace-nowrap py-4 px-1 border-b-2 text-sm focus:outline-none',
                      selected
                        ? 'border-casablanca-500 text-casablanca-500'
                        : 'border-transparent text-gray-600 hover:text-gray-700 hover:border-gray-300'
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {Object.values(categories).map((destinations, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                  )}
                >
                  <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 xl:gap-x-8">
                    {destinations.map((destination) => (
                      <div key={destination.id} className="group relative">
                        <div className="w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80 max-h-64 lg:max-h-80">
                          <img
                            src={destination.image}
                            alt="yacht"
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                          />
                        </div>
                        <div className="mt-4 flex justify-between">
                          <div>
                            <h3 className="text-sm text-gray-600">
                              <a href="#">
                                <span
                                  aria-hidden="true"
                                  className="absolute inset-0"
                                />
                                {destination.available} Yachts Available
                              </a>
                            </h3>
                            <p className="mt-1 text-xl text-gray-900">
                              {destination.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
      <div className="mt-4 text-center">
        <a
          href="#"
          className="mt-4 inline-flex justify-center items-center rounded-full bg-gradient-to-r from-casablanca-200 to-casablanca-400 px-6 py-2 text-sm font-medium text-casablanca-900 shadow-sm hover:from-casablanca-400 hover:to-casablanca-400 focus:outline-none"
        >
          More Destinations
        </a>
      </div>
    </div>
  );
};
