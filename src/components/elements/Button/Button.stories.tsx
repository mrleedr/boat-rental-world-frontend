import type { Meta, Story } from '@storybook/react';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FiArrowRight, FiStar } from 'react-icons/fi';

import type { ButtonProps } from '@/components/elements/Button';
import { Button } from '@/components/elements/Button';

import StoryLayout from '../../../stories/StoryLayout';

const meta: Meta = {
  title: 'Elements/Button',
  component: Button,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

interface Props extends ButtonProps {
  darkMode: boolean;
}

const StoryButton: Story<Props> = (args) => (
  <StoryLayout {...args} className="space-y-2">
    <Button {...args}></Button>

    <Button {...args} className={'w-full justify-center'}>
      {args.children}
    </Button>

    <Button {...args} LeadingIcon={<FiStar />}>
      {args.children}
    </Button>

    <Button {...args} TrailingIcon={<FiArrowRight />}>
      {args.children}
    </Button>

    {/* <Button {...args} IconOnly={<FiArrowRight />} /> */}
  </StoryLayout>
);

export const Default = StoryButton.bind({});

Default.args = {
  variant: 'primary',
  size: 'md',
  darkMode: false,
  disabled: false,
  children: 'edit this text',
};

Default.parameters = {
  controls: { exclude: ['LeadingIcon', 'TrailingIcon', 'IconOnly'] },
};

// import type { ComponentMeta, ComponentStory } from '@storybook/react';
// import React from 'react';

// import { Button } from '@/components/elements/Button';

// // More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// export default {
//   title: 'Elements/Button',
//   component: Button,
//   // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// } as ComponentMeta<typeof Button>;

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// const onClicked = () => {
//   alert('click works');
// };

// export const Primary = Template.bind({});
// Primary.args = {
//   onClick: onClicked,
//   children: [<>Button</>],
// };

// export const Full = Template.bind({});
// Full.args = {
//   full: true,
//   onClick: onClicked,
//   children: [<>Button</>],
// };

// export const Outline = Template.bind({});
// Outline.args = {
//   outline: true,
//   onClick: onClicked,
//   children: [<>Button</>],
// };
