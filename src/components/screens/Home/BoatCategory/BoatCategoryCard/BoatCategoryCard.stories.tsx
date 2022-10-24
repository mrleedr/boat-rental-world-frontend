import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { BoatCategoryCard } from './BoatCategoryCard';

export default {
  title: 'Cards/BoatCategory',
  component: BoatCategoryCard,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof BoatCategoryCard>;

const Template: ComponentStory<typeof BoatCategoryCard> = (args: any) => (
  <BoatCategoryCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
