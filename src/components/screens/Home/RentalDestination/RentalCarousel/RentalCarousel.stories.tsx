import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { RentalCarousel } from './RentalCarousel';

export default {
  title: 'Carousel/RentalDestination',
  component: RentalCarousel,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof RentalCarousel>;

const Template: ComponentStory<typeof RentalCarousel> = (args: any) => (
  <RentalCarousel {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
