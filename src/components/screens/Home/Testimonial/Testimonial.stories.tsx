import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Testimonial } from './Testimonial';

export default {
  title: 'Sections/Testimonial',
  component: Testimonial,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Testimonial>;

const Template: ComponentStory<typeof Testimonial> = (args: any) => (
  <Testimonial {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
