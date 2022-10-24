import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { BookStep } from './BookStep';

export default {
  title: 'Sections/BookStep',
  component: BookStep,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof BookStep>;

const Template: ComponentStory<typeof BookStep> = (args: any) => (
  <BookStep {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
