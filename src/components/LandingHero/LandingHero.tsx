import { MapPinIcon } from '@heroicons/react/24/outline';

const mostSearched = [
  { name: 'Location', href: '#' },
  { name: 'Location', href: '#' },
  { name: 'Location', href: '#' },
  { name: 'Location', href: '#' },
  { name: 'Location', href: '#' },
];

export const LandingHero = () => {
  return (
    <div className="min-h-[760px] xl:min-h-[100vh] bg-hero-bg relative overflow-hidden bg-cover flex items-center">
      <div className="mx-auto max-w-screen-2xl flex-1">
        <div className="relative z-10 lg:w-full lg:max-w-2xl">
          <main className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 ">
            <div className="overflow-hidden rounded-lg bg-white shadow max-w-[608px]">
              <div className="px-4 py-5 sm:p-6 lg:p-8">
                <h1 className="text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                  <span className="block">Discover Yacht</span>
                  Voyage Experiences
                </h1>
                <p className="mt-3 text-base text-gray-800 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 lg:mx-0">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>

                <div className="mt-8">
                  <label
                    htmlFor="destination"
                    className="block text-sm font-medium text-gray-800"
                  >
                    Choose your Destination
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MapPinIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="destination"
                      name="destination"
                      className="mt-2 block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder:text-gray-500 focus:border-casablanca-500 focus:text-gray-900 focus:placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-casablanca-500 sm:text-sm"
                      placeholder="Where are you going?"
                      type="search"
                    />
                  </div>
                  <a
                    href="#"
                    className="mt-4 w-full inline-flex justify-center items-center rounded-full bg-gradient-to-r from-casablanca-200 to-casablanca-400 px-4 py-2 text-sm font-medium text-casablanca-900 shadow-sm hover:from-casablanca-400 hover:to-casablanca-400 focus:outline-none"
                  >
                    Search
                  </a>

                  <nav
                    className="inline-flex flex-wrap  items-center"
                    aria-label="Footer"
                  >
                    <span className="text-sm text-gray-800">
                      Most Searched:
                    </span>
                    {mostSearched.map((item) => (
                      <div key={item.name} className="p-2">
                        <a
                          href={item.href}
                          className="text-sm text-casablanca-400 hover:text-casablanca-900 underline font-semibold"
                        >
                          {item.name}
                        </a>
                      </div>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
