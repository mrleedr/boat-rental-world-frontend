import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Header } from '@/components/common/Header';

export default {
  title: 'Common/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args: any) => (
  <Header {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
