import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Hero } from './Hero';

export default {
  title: 'Sections/Hero',
  component: Hero,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args: any) => <Hero {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
