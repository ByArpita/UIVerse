import type { Meta, StoryObj } from '@storybook/react';
import Spinner from '@/components/Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['dots', 'ring', 'pulse'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    color: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Ring: Story = {
  args: {
    type: 'ring',
  },
};

export const Dots: Story = {
  args: {
    type: 'dots',
    color: 'text-blue-500',
  },
};

export const Pulse: Story = {
  args: {
    type: 'pulse',
    color: 'text-blue-500',
  },
};

export const SmallRing: Story = {
  args: {
    type: 'ring',
    size: 'sm',
  },
};

export const LargeDots: Story = {
  args: {
    type: 'dots',
    size: 'lg',
  },
};

export const CustomColor: Story = {
  args: {
    type: 'ring',
    color: 'text-red-500',
  },
};
