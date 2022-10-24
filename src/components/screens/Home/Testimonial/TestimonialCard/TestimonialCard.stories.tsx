import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { TestimonialCard } from './TestimonialCard';

export default {
  title: 'Cards/TestimonialCard',
  component: TestimonialCard,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof TestimonialCard>;

const Template: ComponentStory<typeof TestimonialCard> = (args: any) => (
  <TestimonialCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
