import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { DestinationCard } from './DestinationCard';

export default {
  title: 'Cards/DestinationCard',
  component: DestinationCard,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof DestinationCard>;

const Template: ComponentStory<typeof DestinationCard> = (args) => (
  <DestinationCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
