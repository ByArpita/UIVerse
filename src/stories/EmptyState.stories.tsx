import type { Meta, StoryObj } from '@storybook/react';
import EmptyState from '@/components/EmptyState';
import Button from '@/components/Button';
import React from 'react';

const NoDataIllustration = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-24 w-24 text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
    />
  </svg>
);

const meta: Meta<typeof EmptyState> = {
  title: 'Components/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    illustration: { control: 'object' },
    actionButton: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    title: 'No Items Found',
    description: 'It looks like there are no items to display here yet. Try adding some!',
    illustration: <NoDataIllustration />,
    actionButton: <Button onClick={() => alert('Add Item clicked!')}>Add New Item</Button>,
  },
};

export const NoIllustration: Story = {
  args: {
    title: 'No Results',
    description: 'Your search did not yield any results. Please try a different query.',
    actionButton: <Button onClick={() => alert('Clear Search clicked!')}>Clear Search</Button>,
  },
};

export const NoButton: Story = {
  args: {
    title: 'Coming Soon',
    description: 'This feature is under development. Please check back later!',
    illustration: <NoDataIllustration />,
  },
};
