import type { Meta, StoryObj } from '@storybook/react';
import Banner from '@/components/Banner';

const meta: Meta<typeof Banner> = {
  title: 'Components/Banner',
  component: Banner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    message: { control: 'text' },
    type: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
    },
    showCloseButton: { control: 'boolean' },
    onClose: { action: 'closed' },
  },
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Info: Story = {
  args: {
    message: 'This is an informational banner.',
    type: 'info',
  },
};

export const Success: Story = {
  args: {
    message: 'Your operation was successful!',
    type: 'success',
  },
};

export const Warning: Story = {
  args: {
    message: 'Warning: Something might be wrong.',
    type: 'warning',
  },
};

export const Error: Story = {
  args: {
    message: 'An error occurred. Please try again.',
    type: 'error',
  },
};

export const WithCloseButton: Story = {
  args: {
    message: 'You can close this banner.',
    showCloseButton: true,
  },
};

export const WithoutCloseButton: Story = {
  args: {
    message: 'This banner cannot be closed by the user.',
    showCloseButton: false,
  },
};
