import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from '@/components/Tooltip';
import Button from '@/components/Button';
import React from 'react';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'object' },
    content: { control: 'text' },
    position: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Top: Story = {
  args: {
    children: (
      <span className="inline-block text-gray-500 text-xl font-bold cursor-pointer w-8 h-8 bg-blue-200 flex items-center justify-center rounded-full">
        ?
      </span>
    ),
    content: 'This is a top tooltip',
    position: 'top',
  },
};

export const Bottom: Story = {
  args: {
    children: (
      <span className="inline-block text-gray-500 text-xl font-bold cursor-pointer w-8 h-8 bg-blue-200 flex items-center justify-center rounded-full">
        i
      </span>
    ),
    content: 'This is a bottom tooltip',
    position: 'bottom',
  },
};

export const Left: Story = {
  args: {
    children: (
      <span className="inline-block text-gray-500 text-xl font-bold cursor-pointer w-8 h-8 bg-blue-200 flex items-center justify-center rounded-full">
        i
      </span>
    ),
    content: 'This is a left tooltip',
    position: 'left',
  },
};

export const Right: Story = {
  args: {
    children: (
      <span className="inline-block text-gray-500 text-xl font-bold cursor-pointer w-8 h-8 bg-blue-200 flex items-center justify-center rounded-full">
        i
      </span>
    ),
    content: 'This is a right tooltip',
    position: 'right',
  },
};

export const WithCustomContent: Story = {
  args: {
    children: <Button>Hover for rich content</Button>,
    content: (
      <div className="p-2">
        <h3 className="font-bold">Custom Tooltip</h3>
        <p>This tooltip has <strong>rich</strong> content.</p>
      </div>
    ),
    position: 'bottom',
  },
};
