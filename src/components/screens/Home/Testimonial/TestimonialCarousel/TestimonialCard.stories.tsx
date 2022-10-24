import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { TestimonialCarousel } from './TestimonialCarousel';

export default {
  title: 'Carousel/TestimonialCarousel',
  component: TestimonialCarousel,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof TestimonialCarousel>;

const Template: ComponentStory<typeof TestimonialCarousel> = (args: any) => (
  <TestimonialCarousel {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
