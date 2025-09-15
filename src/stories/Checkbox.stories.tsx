import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from '@/components/Checkbox';
import React, { useState } from 'react';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    onChange: { action: 'changed' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Remember me',
  },
};

export const Checked: Story = {
  args: {
    label: 'Option selected',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled option',
    disabled: true,
  },
};

export const WithState: Story = {
  render: () => {
    const [isChecked, setIsChecked] = useState(false);
    const handleChange = () => setIsChecked(!isChecked);

    return (
      <Checkbox
        label="Toggle me"
        checked={isChecked}
        onChange={handleChange}
      />
    );
  },
};

export const CheckboxGroup: Story = {
  render: () => {
    const [selectedItems, setSelectedItems] = useState<string[]>(['item1']);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value, checked } = event.target;
      setSelectedItems(prev =>
        checked ? [...prev, value] : prev.filter(item => item !== value)
      );
    };

    return (
      <div className="flex flex-col space-y-2">
        <Checkbox
          label="Item 1"
          value="item1"
          checked={selectedItems.includes('item1')}
          onChange={handleCheckboxChange}
        />
        <Checkbox
          label="Item 2"
          value="item2"
          checked={selectedItems.includes('item2')}
          onChange={handleCheckboxChange}
        />
        <Checkbox
          label="Item 3"
          value="item3"
          checked={selectedItems.includes('item3')}
          onChange={handleCheckboxChange}
        />
      </div>
    );
  },
};

export const HorizontalCheckboxGroup: Story = {
  render: () => {
    const [selectedItems, setSelectedItems] = useState<string[]>(['item1']);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value, checked } = event.target;
      setSelectedItems(prev =>
        checked ? [...prev, value] : prev.filter(item => item !== value)
      );
    };

    return (
      <div className="flex space-x-4">
        <Checkbox
          label="Item 1"
          value="item1"
          checked={selectedItems.includes('item1')}
          onChange={handleCheckboxChange}
        />
        <Checkbox
          label="Item 2"
          value="item2"
          checked={selectedItems.includes('item2')}
          onChange={handleCheckboxChange}
        />
        <Checkbox
          label="Item 3"
          value="item3"
          checked={selectedItems.includes('item3')}
          onChange={handleCheckboxChange}
        />
      </div>
    );
  },
};
