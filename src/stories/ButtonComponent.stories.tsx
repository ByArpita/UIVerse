import type { Meta, StoryObj } from '@storybook/react';
import Button from '@/components/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    onClick: () => alert('Primary Button Clicked!'),
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    className: 'bg-gray-300 text-gray-800 hover:bg-gray-400',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    className: 'px-6 py-3 text-lg',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    className: 'px-2 py-1 text-sm',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};
