import type { Meta, StoryObj } from '@storybook/react';
import Carousel from '@/components/Carousel';
import React from 'react';

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: false },
    autoPlay: { control: 'boolean' },
    interval: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    children: [
      <div className="w-96 h-48 bg-blue-300 flex items-center justify-center text-white text-2xl">Slide 1</div>,
      <div className="w-96 h-48 bg-green-300 flex items-center justify-center text-white text-2xl">Slide 2</div>,
      <div className="w-96 h-48 bg-red-300 flex items-center justify-center text-white text-2xl">Slide 3</div>,
    ],
  },
};

export const AutoPlaying: Story = {
  args: {
    children: [
      <div className="w-96 h-48 bg-blue-300 flex items-center justify-center text-white text-2xl">Slide A</div>,
      <div className="w-96 h-48 bg-green-300 flex items-center justify-center text-white text-2xl">Slide B</div>,
      <div className="w-96 h-48 bg-red-300 flex items-center justify-center text-white text-2xl">Slide C</div>,
    ],
    autoPlay: true,
    interval: 2000,
  },
};

export const WithDifferentContent: Story = {
  args: {
    children: [
      <img src="https://via.placeholder.com/400x200/FF5733/FFFFFF?text=Image+1" alt="Placeholder 1" className="w-full h-full object-cover" />,
      <img src="https://via.placeholder.com/400x200/33FF57/FFFFFF?text=Image+2" alt="Placeholder 2" className="w-full h-full object-cover" />,
      <img src="https://via.placeholder.com/400x200/3357FF/FFFFFF?text=Image+3" alt="Placeholder 3" className="w-full h-full object-cover" />,
    ],
  },
};
