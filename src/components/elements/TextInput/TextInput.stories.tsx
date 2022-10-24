import { MapPinIcon } from '@heroicons/react/24/outline';
import type { Meta, Story } from '@storybook/react';
import React from 'react';
import { FiAlertCircle, FiHelpCircle, FiMail } from 'react-icons/fi';

import StoryLayout from '../../../stories/StoryLayout';
import type { TextInputProps } from './TextInput';
import { TextInput } from './TextInput';

const meta: Meta = {
  title: 'Elements/TextInput',
  component: TextInput,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

interface Props extends TextInputProps {
  darkMode: boolean;
}

const StoryTextInput: Story<Props> = (args) => {
  const [text1, setText1] = React.useState<string>(args.value);

  const handleChange = (value: string) => {
    setText1(value);
  };

  return (
    <StoryLayout {...args} className="flex space-x-8">
      <div>
        <TextInput
          type="email"
          value={text1}
          handleChange={handleChange}
          label={args.label}
          placeholder="veronica@example.com"
          helperText="This is a hint text to help the user."
          LeadingIcon={<FiMail />}
          TrailingIcon={<FiHelpCircle />}
          disabled={args.disabled}
        />
        <div className="mb-4" />
        <TextInput
          type="email"
          value={text1}
          handleChange={handleChange}
          label={args.label}
          placeholder="veronica@example.com"
          error="This is an error message."
          LeadingIcon={<FiMail />}
          TrailingIcon={<FiAlertCircle />}
          disabled={args.disabled}
        />
      </div>
      <div>
        <TextInput
          type="text"
          value={text1}
          handleChange={handleChange}
          label={args.label}
          placeholder="example.com"
          leadingText="https://"
          helperText="This is a hint text to help the user."
          TrailingIcon={<FiHelpCircle />}
          disabled={args.disabled}
        />
        <div className="mb-4" />
        <TextInput
          type="text"
          value={text1}
          handleChange={handleChange}
          label={args.label}
          placeholder="example.com"
          leadingText="https://"
          error="This is an error message."
          TrailingIcon={<FiAlertCircle />}
          disabled={args.disabled}
        />
      </div>

      <div>
        <TextInput
          type="text"
          value={text1}
          handleChange={handleChange}
          label={args.label}
          placeholder="where are you going?"
          disabled={args.disabled}
          LeadingIcon={<MapPinIcon />}
        />
        <div className="mb-4" />
        <TextInput
          type="text"
          value={text1}
          handleChange={handleChange}
          label={args.label}
          placeholder="where are you going?"
          LeadingIcon={<MapPinIcon />}
          error="This is an error message."
          disabled={args.disabled}
        />
      </div>
    </StoryLayout>
  );
};

export const Default = StoryTextInput.bind({});

Default.args = {
  darkMode: false,
  disabled: false,
  value: 'email',
  label: 'choose your destination',
};

Default.parameters = {
  controls: {
    exclude: [
      'value',
      'type',
      'handleChange',
      'leadingText',
      'placeholder',
      'error',
      'helperText',
      'LeadingIcon',
      'TrailingIcon',
    ],
  },
};
