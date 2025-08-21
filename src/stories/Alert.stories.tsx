import type { Meta, StoryObj } from '@storybook/react';
import Alert from '@/components/Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
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
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    message: 'This is an informational alert.',
    type: 'info',
  },
};

export const Success: Story = {
  args: {
    message: 'Your action was successful!',
    type: 'success',
  },
};

export const Warning: Story = {
  args: {
    message: 'Warning: Please review your input.',
    type: 'warning',
  },
};

export const Error: Story = {
  args: {
    message: 'Error: Something went wrong.',
    type: 'error',
  },
};

export const ClosableAlert: Story = {
  args: {
    message: 'You can dismiss this alert.',
    type: 'info',
    showCloseButton: true,
  },
};
