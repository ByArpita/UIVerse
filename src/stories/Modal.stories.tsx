import type { Meta, StoryObj } from '@storybook/react';
import Modal from '@/components/Modal';
import React, { useState } from 'react';
import Button from '@/components/Button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    onClose: { action: 'closed' },
    children: { control: 'text' },
    title: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
      <>
        <Button onClick={handleOpen}>Open Modal</Button>
        <Modal {...args} isOpen={isOpen} onClose={handleClose}>
          <p>This is the content of the modal.</p>
          <Button onClick={handleClose}>Close</Button>
        </Modal>
      </>
    );
  },
  args: {
    title: 'Default Modal',
  },
};

export const WithTitle: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
      <>
        <Button onClick={handleOpen}>Open Modal With Title</Button>
        <Modal {...args} isOpen={isOpen} onClose={handleClose}>
          <p>This modal has a custom title.</p>
          <Button onClick={handleClose}>Close</Button>
        </Modal>
      </>
    );
  },
  args: {
    title: 'Important Information',
    children: (
      <div>
        <p>Please read this important message.</p>
        <p>It contains crucial details you need to know.</p>
      </div>
    ),
  },
};

export const LongContent: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
      <>
        <Button onClick={handleOpen}>Open Modal With Long Content</Button>
        <Modal {...args} isOpen={isOpen} onClose={handleClose}>
          <div>
            <p>This modal contains a lot of text to demonstrate scrolling behavior.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <Button onClick={handleClose}>Close</Button>
        </Modal>
      </>
    );
  },
  args: {
    title: 'Long Content Modal',
  },
};
