import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { SailingCarousel } from './SailingCarousel';

export default {
  title: 'Carousel/SailingCarousel',
  component: SailingCarousel,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SailingCarousel>;

const Template: ComponentStory<typeof SailingCarousel> = (args: any) => (
  <SailingCarousel {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
