import type { Meta, StoryObj } from '@storybook/react';
import Pagination from '@/components/Pagination';
import React, { useState } from 'react';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    currentPage: { control: 'number' },
    totalPages: { control: 'number' },
    onPageChange: { action: 'pageChanged' },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: (args) => {
    const [page, setPage] = useState(1);
    return <Pagination {...args} currentPage={page} onPageChange={setPage} />;
  },
  args: {
    totalPages: 10,
  },
};

export const ManyPages: Story = {
  render: (args) => {
    const [page, setPage] = useState(5);
    return <Pagination {...args} currentPage={page} onPageChange={setPage} />;
  },
  args: {
    totalPages: 50,
  },
};

export const FewPages: Story = {
  render: (args) => {
    const [page, setPage] = useState(1);
    return <Pagination {...args} currentPage={page} onPageChange={setPage} />;
  },
  args: {
    totalPages: 3,
  },
};
