const features = [
  {
    name: 'Best Price Guarantee',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco labo.',
    image: '/assets/images/icon/feature-icon-1.svg',
  },
  {
    name: 'Curated Destinations',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco labo.',
    image: '/assets/images/icon/feature-icon-2.svg',
  },
  {
    name: '24/7 Customer Service',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco labo.',
    image: '/assets/images/icon/feature-icon-3.svg',
  },
  {
    name: '100% Verified Boats',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco labo.',
    image: '/assets/images/icon/feature-icon-4.svg',
  },
];

export const LandingFeatures = () => {
  return (
    <div className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-screen-2xl lg:px-8">
        <h2 className="sr-only">A better way to send money.</h2>
        <dl className="space-y-10 lg:grid lg:grid-cols-4 lg:gap-8 lg:space-y-0">
          {features.map((feature) => (
            <div key={feature.name} className="flex gap-x-6">
              <dt>
                <div className="flex h-16 w-16 items-center justify-center text-casablanca-400">
                  <img src={feature.image} alt="feature icon" />
                </div>
              </dt>
              <dd className="text-base text-gray-800">
                <p className="mb-2 text-lg font-medium leading-6 text-gray-900">
                  {feature.name}
                </p>
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};
