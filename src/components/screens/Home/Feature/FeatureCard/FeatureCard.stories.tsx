import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { FeatureCard } from './FeatureCard';

export default {
  title: 'Cards/FeatureCard',
  component: FeatureCard,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof FeatureCard>;

const Template: ComponentStory<typeof FeatureCard> = (args: any) => (
  <FeatureCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
