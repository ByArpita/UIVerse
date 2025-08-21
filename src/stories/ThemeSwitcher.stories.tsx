import type { Meta, StoryObj } from '@storybook/react';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import React, { useState } from 'react';

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'Components/ThemeSwitcher',
  component: ThemeSwitcher,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onToggle: { action: 'toggled' },
    isDarkMode: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Default: Story = {
  render: (args) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const handleToggle = () => setIsDarkMode(!isDarkMode);
    return <ThemeSwitcher {...args} isDarkMode={isDarkMode} onToggle={handleToggle} />;
  },
  args: {},
};

export const DarkMode: Story = {
  render: (args) => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const handleToggle = () => setIsDarkMode(!isDarkMode);
    return <ThemeSwitcher {...args} isDarkMode={isDarkMode} onToggle={handleToggle} />;
  },
  args: {},
};
