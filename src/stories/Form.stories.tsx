import type { Meta, StoryObj } from '@storybook/react';
import Form from '@/components/Form';
import Input from '@/components/Input';
import Button from '@/components/Button';
import React from 'react';

const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onSubmit: { action: 'submitted' },
    children: { control: 'object' },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Form>;

export const Default: Story = {
  args: {
    onSubmit: (e) => {
      e.preventDefault();
      alert('Form submitted!');
    },
    children: (
      <>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <Input type="text" id="name" placeholder="Your Name" className="mt-1 block w-full" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <Input type="email" id="email" placeholder="your@example.com" className="mt-1 block w-full" />
        </div>
        <Button type="submit">Submit</Button>
      </>
    ),
  },
};

export const ContactForm: Story = {
  args: {
    onSubmit: (e) => {
      e.preventDefault();
      alert('Contact form submitted!');
    },
    children: (
      <>
        <div>
          <label htmlFor="contactName" className="block text-sm font-medium text-gray-700">Name</label>
          <Input type="text" id="contactName" placeholder="Your Name" className="mt-1 block w-full" />
        </div>
        <div>
          <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">Email</label>
          <Input type="email" id="contactEmail" placeholder="your@example.com" className="mt-1 block w-full" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea id="message" rows={4} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your message"></textarea>
        </div>
        <Button type="submit">Send Message</Button>
      </>
    ),
  },
};
