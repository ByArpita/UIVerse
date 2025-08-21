import type { Meta, StoryObj } from '@storybook/react';
import Badge from '@/components/Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
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
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'Default',
    type: 'default',
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary',
    type: 'primary',
  },
};

export const Success: Story = {
  args: {
    children: 'Success',
    type: 'success',
  },
};

export const Error: Story = {
  args: {
    children: 'Error',
    type: 'error',
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning',
    type: 'warning',
  },
};

export const WithNumber: Story = {
  args: {
    children: 5,
    type: 'primary',
  },
};

export const CustomClass: Story = {
  args: {
    children: 'Custom',
    type: 'default',
    className: 'bg-purple-100 text-purple-800',
  },
};
