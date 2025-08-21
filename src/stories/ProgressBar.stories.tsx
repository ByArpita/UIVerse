import type { Meta, StoryObj } from '@storybook/react';
import ProgressBar from '@/components/ProgressBar';
import React, { useState, useEffect } from 'react';
import '@/app/globals.css'; // Ensure global styles are imported

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'number' },
    max: { control: 'number' },
    variant: {
      control: { type: 'select' },
      options: ['determinate', 'indeterminate'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'danger'],
    },
    height: { control: 'text' },
    showLabel: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  render: (args) => (
    <div className="w-96">
      <ProgressBar {...args} />
    </div>
  ),
  args: {
    value: 50,
    variant: 'determinate',
    color: 'primary',
  },
};

export const Determinate: Story = {
  render: (args) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
      }, 500);
      return () => {
        clearInterval(timer);
      };
    }, []);

    return (
      <div className="w-96">
        <ProgressBar {...args} value={progress} />
      </div>
    );
  },
  args: {
    variant: 'determinate',
    color: 'success',
  },
};

export const Indeterminate: Story = {
  render: (args) => (
    <div className="w-96">
      <ProgressBar {...args} variant="indeterminate" />
    </div>
  ),
  args: {
    color: 'primary',
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="w-96">
      <ProgressBar {...args} />
    </div>
  ),
  args: {
    value: 60,
    variant: 'determinate',
    color: 'primary',
    showLabel: true,
  },
};

export const DifferentColors: Story = {
  render: (args) => (
    <div className="space-y-4">
      <ProgressBar {...args} value={20} color="primary" />
      <ProgressBar {...args} value={40} color="secondary" />
      <ProgressBar {...args} value={60} color="success" />
      <ProgressBar {...args} value={80} color="warning" />
      <ProgressBar {...args} value={100} color="danger" />
      <ProgressBar {...args} variant="indeterminate" color="primary" />
      <ProgressBar {...args} variant="indeterminate" color="success" />
    </div>
  ),
  args: {
    variant: 'determinate',
  },
};

export const CustomHeight: Story = {
  args: {
    value: 40,
    variant: 'determinate',
    color: 'primary',
    height: 'h-4',
  },
};
