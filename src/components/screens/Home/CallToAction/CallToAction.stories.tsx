import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { CallToAction } from './CallToAction';

export default {
  title: 'Sections/CallToAction',
  component: CallToAction,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof CallToAction>;

const Template: ComponentStory<typeof CallToAction> = (args: any) => (
  <CallToAction {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
