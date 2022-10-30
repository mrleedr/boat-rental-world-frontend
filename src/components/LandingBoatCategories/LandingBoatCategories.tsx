const destinations = [
  {
    id: 1,
    title: 'Boat Rentals',
    available: 20,
    image: '/assets/images/yacht/yacht-1.png',
  },
  {
    id: 2,
    title: 'Boat Rentals',
    available: 20,
    image: '/assets/images/yacht/yacht-1.png',
  },
  {
    id: 3,
    title: 'Boat Rentals',
    available: 20,
    image: '/assets/images/yacht/yacht-1.png',
  },
  {
    id: 4,
    title: 'Boat Rentals',
    available: 20,
    image: '/assets/images/yacht/yacht-1.png',
  },
  {
    id: 5,
    title: 'Boat Rentals',
    available: 20,
    image: '/assets/images/yacht/yacht-1.png',
  },
  {
    id: 6,
    title: 'Boat Rentals',
    available: 20,
    image: '/assets/images/yacht/yacht-1.png',
  },
];

export const LandingBoatCategories = () => {
  return (
    <div className="overflow-hidden bg-bone-50 py-16 lg:py-24">
      <div className="relative mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl leading-tight">
              Boat Types and Categories
            </h2>
            <p className="mt-3 text-base text-gray-800">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui.
            </p>
          </div>
          <dl className="mt-10 space-y-10 sm:grid sm:grid-cols-3 sm:gap-x-8 sm:gap-y-10 sm:space-y-0 lg:col-span-2 lg:mt-0">
            {destinations.map((destination) => (
              <div key={destination.id} className="group relative">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-40">
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
                        <span aria-hidden="true" className="absolute inset-0" />
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
          </dl>
        </div>
      </div>
    </div>
  );
};