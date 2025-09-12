import type { Meta, StoryObj } from '@storybook/react';
import Card from '@/components/Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: 'This is a default card.',
  },
};

export const WithCustomContent: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-xl font-semibold mb-2">Card Title</h3>
        <p>This card contains custom content, including a title and some descriptive text.</p>
      </div>
    ),
  },
};

export const WithCustomStyling: Story = {
  args: {
    children: 'This card has custom styling.',
    className: 'bg-blue-100 border border-blue-400 text-blue-700 p-8',
  },
};