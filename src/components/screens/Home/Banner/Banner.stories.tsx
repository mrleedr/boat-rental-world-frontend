import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Banner } from './Banner';

export default {
  title: 'Sections/Banner',
  component: Banner,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args: any) => (
  <Banner {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
