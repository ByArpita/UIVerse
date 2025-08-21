import type { Meta, StoryObj } from '@storybook/react';
import Navbar from '@/components/Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    brandName: { control: 'text' },
    links: { control: 'object' },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    brandName: 'MyBrand',
    links: [
      { href: '#home', label: 'Home' },
      { href: '#about', label: 'About' },
      { href: '#services', label: 'Services' },
      { href: '#contact', label: 'Contact' },
    ],
  },
};

export const WithLongBrandName: Story = {
  args: {
    brandName: 'My Super Long Brand Name',
    links: [
      { href: '#home', label: 'Home' },
      { href: '#about', label: 'About' },
    ],
  },
};

export const WithFewLinks: Story = {
  args: {
    brandName: 'ShortNav',
    links: [
      { href: '#dashboard', label: 'Dashboard' },
      { href: '#settings', label: 'Settings' },
    ],
  },
};
