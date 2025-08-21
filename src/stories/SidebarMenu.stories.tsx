import type { Meta, StoryObj } from '@storybook/react';
import SidebarMenu from '@/components/SidebarMenu';
import React, { useState } from 'react';

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m0 0l-7 7m7-7v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001 1h3v-3m-6 0a1 1 0 01-1 1h-3v-3m-6 3h6v-3m-3 3v-6" />
  </svg>
);

const DashboardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const SettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const meta: Meta<typeof SidebarMenu> = {
  title: 'Components/SidebarMenu',
  component: SidebarMenu,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object' },
    isCollapsed: { control: 'boolean' },
    onToggleCollapse: { action: 'toggleCollapse' },
  },
};

export default meta;
type Story = StoryObj<typeof SidebarMenu>;

export const Default: Story = {
  render: (args) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const handleToggle = () => setIsCollapsed(!isCollapsed);
    return <SidebarMenu {...args} isCollapsed={isCollapsed} onToggleCollapse={handleToggle} />;
  },
  args: {
    items: [
      { label: 'Home', icon: <HomeIcon />, href: '#home' },
      { label: 'Dashboard', icon: <DashboardIcon />, href: '#dashboard' },
      { label: 'Settings', icon: <SettingsIcon />, href: '#settings' },
    ],
  },
};

export const Collapsed: Story = {
  render: (args) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const handleToggle = () => setIsCollapsed(!isCollapsed);
    return <SidebarMenu {...args} isCollapsed={isCollapsed} onToggleCollapse={handleToggle} />;
  },
  args: {
    items: [
      { label: 'Home', icon: <HomeIcon />, href: '#home' },
      { label: 'Dashboard', icon: <DashboardIcon />, href: '#dashboard' },
      { label: 'Settings', icon: <SettingsIcon />, href: '#settings' },
    ],
  },
};
