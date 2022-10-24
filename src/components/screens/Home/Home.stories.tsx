import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Home } from '@/components/screens/Home';

export default {
  title: 'Pages/Home',
  component: Home,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const LandingPage = Template.bind({});
