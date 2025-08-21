import type { Meta, StoryObj } from '@storybook/react';
import Chip from '@/components/Chip';
import React, { useState } from 'react';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    type: {
      control: { type: 'select' },
      options: ['default', 'primary', 'success', 'error', 'warning'],
    },
    isSelectable: { control: 'boolean' },
    isSelected: { control: 'boolean' },
    onSelectChange: { action: 'selected' },
    onClose: { action: 'closed' },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    children: 'Tag',
    onClose: undefined,
  },
};

export const Primary: Story = {
  args: {
    children: 'New',
    type: 'primary',
    onClose: undefined,
  },
};

export const Success: Story = {
  args: {
    children: 'Active',
    type: 'success',
    onClose: undefined,
  },
};

export const Closable: Story = {
  args: {
    children: 'Dismissible',
    onClose: () => alert('Chip closed!'),
  },
};

export const Selectable: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(false);
    return (
      <Chip
        {...args}
        isSelectable
        isSelected={selected}
        onSelectChange={setSelected}
        onClose={undefined} // Explicitly set onClose to undefined
      >
        Select Me
      </Chip>
    );
  },
  args: {},
};

export const SelectableGroup: Story = {
  render: () => {
    const [selectedChips, setSelectedChips] = useState<string[]>(['Apple']);

    const handleSelectChange = (chipName: string, selected: boolean) => {
      setSelectedChips(prev =>
        selected ? [...prev, chipName] : prev.filter(name => name !== chipName)
      );
    };

    return (
      <div className="flex space-x-2">
        <Chip
          isSelectable
          isSelected={selectedChips.includes('Apple')}
          onSelectChange={(s) => handleSelectChange('Apple', s)}
        >
          Apple
        </Chip>
        <Chip
          isSelectable
          isSelected={selectedChips.includes('Banana')}
          onSelectChange={(s) => handleSelectChange('Banana', s)}
        >
          Banana
        </Chip>
        <Chip
          isSelectable
          isSelected={selectedChips.includes('Orange')}
          onSelectChange={(s) => handleSelectChange('Orange', s)}
        >
          Orange
        </Chip>
      </div>
    );
  },
};
