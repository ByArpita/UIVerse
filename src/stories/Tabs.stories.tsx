import type { Meta, StoryObj } from '@storybook/react';
import Tabs from '@/components/Tabs';
import React from 'react';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    tabs: { control: 'object' },
    defaultActiveTab: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    tabs: [
      { label: 'Tab 1', content: <p>Content for Tab 1</p> },
      { label: 'Tab 2', content: <p>Content for Tab 2</p> },
      { label: 'Tab 3', content: <p>Content for Tab 3</p> },
    ],
  },
};

export const WithDefaultActiveTab: Story = {
  args: {
    tabs: [
      { label: 'First Tab', content: <p>This is the content for the first tab.</p> },
      { label: 'Second Tab', content: <p>This is the content for the second tab, which is active by default.</p> },
      { label: 'Third Tab', content: <p>This is the content for the third tab.</p> },
    ],
    defaultActiveTab: 1,
  },
};

export const WithComplexContent: Story = {
  args: {
    tabs: [
      { label: 'Profile', content: (
        <div>
          <h2 className="text-xl font-semibold">User Profile</h2>
          <p>Name: John Doe</p>
          <p>Email: john.doe@example.com</p>
        </div>
      ) },
      { label: 'Settings', content: (
        <div>
          <h2 className="text-xl font-semibold">Application Settings</h2>
          <label className="block mt-4">
            <input type="checkbox" className="mr-2" /> Enable Notifications
          </label>
        </div>
      ) },
    ],
  },
};
