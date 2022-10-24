import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Feature } from '@/components/screens/Home/Feature';

export default {
  title: 'Sections/Feature',
  component: Feature,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Feature>;

const Template: ComponentStory<typeof Feature> = (args: any) => (
  <Feature {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
