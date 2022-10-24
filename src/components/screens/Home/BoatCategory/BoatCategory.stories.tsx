import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { BoatCategory } from './BoatCategory';

export default {
  title: 'Sections/BoatCategory',
  component: BoatCategory,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof BoatCategory>;

const Template: ComponentStory<typeof BoatCategory> = (args: any) => (
  <BoatCategory {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
