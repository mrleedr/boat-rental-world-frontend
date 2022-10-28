import { SectionContainer } from '@/components/elements/SectionContainer';
import { Typography } from '@/components/elements/Typography';

export const Banner = () => {
  return (
    <SectionContainer background="bg-yellow-800">
      <div className="mx-auto xl:w-1/2">
        <Typography variant="h3" className="text-center font-playfair">
          Explore the most amazing destinations in a luxury yacht
        </Typography>
      </div>
    </SectionContainer>
  );
};
