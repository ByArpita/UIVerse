import type { Meta, StoryObj } from '@storybook/react';
import Avatar from '@/components/Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    initials: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=3',
    alt: 'User Avatar',
  },
};

export const WithInitials: Story = {
  args: {
    initials: 'JD',
  },
};

export const ImageFallbackToInitials: Story = {
  args: {
    src: 'invalid-image-url',
    initials: 'AB',
  },
};

export const ImageFallbackToDefault: Story = {
  args: {
    src: 'invalid-image-url',
  },
};

export const SmallAvatar: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=1',
    size: 'sm',
  },
};

export const LargeAvatar: Story = {
  args: {
    initials: 'XL',
    size: 'lg',
  },
};
