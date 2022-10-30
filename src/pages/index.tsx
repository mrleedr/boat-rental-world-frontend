import { LandingBanner } from '@/components/LandingBanner';
import { LandingBoatCategories } from '@/components/LandingBoatCategories';
import { LandingCallToAction } from '@/components/LandingCallToAction';
import { LandingFeaturedExperience } from '@/components/LandingFeaturedExperience';
import { LandingFeatures } from '@/components/LandingFeatures';
import { LandingHero } from '@/components/LandingHero';
import { LandingHowItWorks } from '@/components/LandingHowItWorks';
import { LandingMobileApp } from '@/components/LandingMobileApp';
import { LandingSearchCloud } from '@/components/LandingSearchCloud';
import { LandingTestimonial } from '@/components/LandingTestimonial';
import { LandingTopDestinations } from '@/components/LandingTopDestinations';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Boat Rentals & Yacht Charters | Boat Rental World"
          description="Search boat rentals, jet skis, yachts, pontoons, and fishing charters. Compare updated prices and availability, photos, reviews and more!"
        />
      }
    >
      <LandingHero />
      <LandingFeatures />
      <LandingTopDestinations />
      <LandingMobileApp />
      <LandingBanner />
      <LandingBoatCategories />
      <LandingFeaturedExperience />
      <LandingCallToAction />
      <LandingSearchCloud />
      <LandingHowItWorks />
      <LandingTestimonial />
    </Main>
  );
};

export default Index;
