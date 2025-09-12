import type { Meta, StoryObj } from '@storybook/react';
import Toast from '@/components/Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    message: { control: 'text' },
    type: {
      control: { type: 'select' },
      options: ['success', 'error', 'warning', 'info'],
    },
    duration: { control: 'number' },
    onDismiss: { action: 'dismissed' },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Success: Story = {
  args: {
    message: 'Operation completed successfully!',
    type: 'success',
  },
};

export const Error: Story = {
  args: {
    message: 'Failed to save data.',
    type: 'error',
  },
};

export const Warning: Story = {
  args: {
    message: 'Please review your changes.',
    type: 'warning',
  },
};

export const Info: Story = {
  args: {
    message: 'New update available.',
    type: 'info',
  },
};

export const NoAutoDismiss: Story = {
  args: {
    message: 'This toast will not auto-dismiss.',
    type: 'info',
    duration: 0,
  },
};