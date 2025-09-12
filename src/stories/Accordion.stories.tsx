import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Accordion from '../components/Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    allowMultipleOpen: {
      control: 'boolean',
      description: 'Allow multiple accordion items to be open at once.',
    },
    items: {
      control: 'object',
      description: 'Array of accordion items with title, content, and optional defaultOpen state.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default single accordion item
export const Default: Story = {
  args: {
    items: [
      {
        title: 'Accordion Item 1',
        content: 'This is the content for the first accordion item.',
      },
    ],
  },
};

// Multiple accordion items (only one open at a time)
export const MultipleItems: Story = {
  args: {
    items: [
      {
        title: 'Accordion Item 1',
        content: 'Content for item 1.',
        defaultOpen: true,
      },
      {
        title: 'Accordion Item 2',
        content: 'Content for item 2.',
      },
      {
        title: 'Accordion Item 3',
        content: 'Content for item 3.',
      },
    ],
    allowMultipleOpen: false,
  },
};

// Multiple items (allow multiple open at once)
export const AllowMultipleOpen: Story = {
  args: {
    ...MultipleItems.args,
    allowMultipleOpen: true,
  },
};

// Accordion with long text content
export const LongContent: Story = {
  args: {
    items: [
      {
        title: 'Accordion with Long Content',
        content: (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
            blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        ),
      },
    ],
  },
};

// Accordion in dark mode background
export const DarkMode: Story = {
    parameters: {
        backgrounds: {
          default: 'dark',
        },
      },
  render: (args) => (
    <div className="dark bg-gray-900 p-4">
      <Accordion {...args} />
    </div>
  ),
  args: {
    ...MultipleItems.args,
  },
};

// Controlled Accordion (state managed externally)
export const Controlled: Story = {
  render: () => {
    const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

    const items = [
      {
        title: 'Controlled Accordion Item 1',
        content: 'This accordion is controlled by an external state.',
      },
      {
        title: 'Controlled Accordion Item 2',
        content: 'You can toggle me by clicking the button below.',
      },
    ];

    return (
      <div>
        <Accordion
          items={items}
          openIndexes={openIndexes}
          onToggle={setOpenIndexes}
          allowMultipleOpen
        />
        <div className="mt-4">
          <p>Open indexes: {JSON.stringify(openIndexes)}</p>
          <button
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() =>
              setOpenIndexes((prev) => (prev.includes(1) ? prev.filter((i) => i !== 1) : [...prev, 1]))
            }
          >
            Toggle Item 2
          </button>
        </div>
      </div>
    );
  },
};