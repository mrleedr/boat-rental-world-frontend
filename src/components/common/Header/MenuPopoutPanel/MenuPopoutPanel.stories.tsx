import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { MenuPopoutPanel } from './MenuPopoutPanel';

export default {
  title: 'Cards/MenuPopoutPanel',
  component: MenuPopoutPanel,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof MenuPopoutPanel>;

const Template: ComponentStory<typeof MenuPopoutPanel> = (args: any) => (
  <MenuPopoutPanel {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
