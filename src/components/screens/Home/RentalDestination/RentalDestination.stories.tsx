import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { RentalDestination } from './RentalDestination';

export default {
  title: 'Sections/Rental',
  component: RentalDestination,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof RentalDestination>;

const Template: ComponentStory<typeof RentalDestination> = (args: any) => (
  <RentalDestination {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
