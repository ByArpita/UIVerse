import type { Meta, StoryObj } from '@storybook/react';
import Breadcrumbs from '@/components/Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Category', href: '#' },
      { label: 'Current Page' },
    ],
  },
};

export const ShortTrail: Story = {
  args: {
    items: [
      { label: 'Dashboard', href: '#' },
      { label: 'Analytics' },
    ],
  },
};

export const LongTrail: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Products', href: '#' },
      { label: 'Electronics', href: '#' },
      { label: 'Smartphones', href: '#' },
      { label: 'iPhone 15 Pro' },
    ],
  },
};
