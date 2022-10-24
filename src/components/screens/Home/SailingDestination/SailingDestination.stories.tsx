import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { SailingDestination } from './SailingDestination';

export default {
  title: 'Sections/SailingDestination',
  component: SailingDestination,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SailingDestination>;

const Template: ComponentStory<typeof SailingDestination> = (args: any) => (
  <SailingDestination {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
