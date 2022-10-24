import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { SearchTag } from './SearchTag';

export default {
  title: 'Sections/SearchTag',
  component: SearchTag,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SearchTag>;

const Template: ComponentStory<typeof SearchTag> = (args: any) => (
  <SearchTag {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
