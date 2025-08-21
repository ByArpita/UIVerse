import type { Meta, StoryObj } from '@storybook/react';
import RadioButton from '@/components/RadioButton';
import React, { useState } from 'react';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    name: { control: 'text' },
    value: { control: 'text' },
    checked: { control: 'boolean' },
    onChange: { action: 'changed' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    label: 'Option 1',
    name: 'default-radio',
    value: 'option1',
  },
};

export const Checked: Story = {
  args: {
    label: 'Option 2',
    name: 'default-radio',
    value: 'option2',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Option',
    name: 'disabled-radio',
    value: 'disabled',
    disabled: true,
  },
};

export const RadioGroup: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState('apple');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedValue(event.target.value);
    };

    return (
      <div className="flex flex-col space-y-2">
        <RadioButton
          label="Apple"
          name="fruit"
          value="apple"
          checked={selectedValue === 'apple'}
          onChange={handleChange}
        />
        <RadioButton
          label="Banana"
          name="fruit"
          value="banana"
          checked={selectedValue === 'banana'}
          onChange={handleChange}
        />
        <RadioButton
          label="Orange"
          name="fruit"
          value="orange"
          checked={selectedValue === 'orange'}
          onChange={handleChange}
        />
      </div>
    );
  },
};
