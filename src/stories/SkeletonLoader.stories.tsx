import type { Meta, StoryObj } from '@storybook/react';
import SkeletonLoader from '@/components/SkeletonLoader';

const meta: Meta<typeof SkeletonLoader> = {
  title: 'Components/SkeletonLoader',
  component: SkeletonLoader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    count: { control: 'number' },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof SkeletonLoader>;

export const Default: Story = {
  args: {
    width: 'w-64',
    height: 'h-8',
  },
};

export const Paragraph: Story = {
  args: {
    count: 3,
    width: 'w-full',
    height: 'h-4',
  },
};

export const AvatarAndText: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <SkeletonLoader width="w-12" height="h-12" className="rounded-full" />
      <div className="space-y-2">
        <SkeletonLoader width="w-32" height="h-4" />
        <SkeletonLoader width="w-48" height="h-4" />
      </div>
    </div>
  ),
};

export const CardSkeleton: Story = {
  render: () => (
    <div className="border border-gray-200 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-gray-200 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-gray-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-gray-200 rounded col-span-2"></div>
              <div className="h-2 bg-gray-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  ),
};
