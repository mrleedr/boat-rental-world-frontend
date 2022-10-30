export const LandingFeaturedExperience = () => {
  return (
    <div className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:flex lg:justify-between lg:px-8">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl leading-tight">
            Featured Experience
          </h2>
          <p className="mt-3 text-base text-gray-800 max-w-xl">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>
      <div className="mt-10 mx-auto max-w-screen-2xl px-4 sm:px-6 lg:flex lg:justify-between lg:px-8">
        <div className="bg-white w-full">
          <div className="mx-auto max-w-2xl lg:max-w-screen-2xl">
            <div className="relative overflow-hidden rounded-lg lg:h-96">
              <div className="absolute inset-0">
                <img
                  src="/assets/images/yacht/yacht-3.png"
                  alt="yacht"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div
                aria-hidden="true"
                className="relative h-96 w-full lg:hidden"
              />
              <div
                aria-hidden="true"
                className="relative h-32 w-full lg:hidden"
              />
              <div className="absolute inset-x-0 bottom-0 rounded-b-lg bg-chathams-blue-900/75 p-6 backdrop-blur sm:flex sm:items-center sm:justify-between lg:inset-y-0 lg:inset-x-auto lg:w-96 lg:flex-col lg:items-start lg:rounded-tl-lg lg:rounded-br-none">
                <div>
                  <h2 className="text-xl font-bold text-white">
                    Boating at the Beach
                  </h2>
                  <p className="mt-1 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate, dolore doloremque similique eaque reiciendis
                    officia illo odio neque voluptates modi.
                  </p>
                </div>
                <a
                  href="#"
                  className="mt-6 w-full inline-flex justify-center items-center rounded-full bg-gradient-to-r from-casablanca-200 to-casablanca-400 px-6 py-2 text-sm font-medium text-casablanca-900 shadow-sm hover:from-casablanca-400 hover:to-casablanca-400 focus:outline-none"
                >
                  View more Experience
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
