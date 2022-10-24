import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { MobileApp } from './MobileApp';

export default {
  title: 'Sections/MobileApp',
  component: MobileApp,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof MobileApp>;

const Template: ComponentStory<typeof MobileApp> = (args: any) => (
  <MobileApp {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
