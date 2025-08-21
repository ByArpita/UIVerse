import type { Meta, StoryObj } from '@storybook/react';
import Table from '@/components/Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    columns: { control: 'object' },
    data: { control: 'object' },
    sortable: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

const sampleColumns = [
  { key: 'id', header: 'ID' },
  { key: 'name', header: 'Name' },
  { key: 'age', header: 'Age' },
  { key: 'city', header: 'City' },
];

const sampleData = [
  { id: 1, name: 'John Doe', age: 30, city: 'New York' },
  { id: 2, name: 'Jane Smith', age: 24, city: 'London' },
  { id: 3, name: 'Peter Jones', age: 35, city: 'Paris' },
  { id: 4, name: 'Alice Brown', age: 28, city: 'Tokyo' },
  { id: 5, name: 'Bob White', age: 42, city: 'Berlin' },
];

export const Default: Story = {
  args: {
    columns: sampleColumns,
    data: sampleData,
  },
};

export const Sortable: Story = {
  args: {
    columns: sampleColumns,
    data: sampleData,
    sortable: true,
  },
};

export const Responsive: Story = {
  args: {
    columns: [
      { key: 'id', header: 'ID' },
      { key: 'productName', header: 'Product Name' },
      { key: 'category', header: 'Category' },
      { key: 'price', header: 'Price' },
      { key: 'stock', header: 'Stock' },
      { key: 'lastUpdated', header: 'Last Updated' },
    ],
    data: [
      { id: 1, productName: 'Laptop Pro X', category: 'Electronics', price: 1200, stock: 50, lastUpdated: '2023-01-15' },
      { id: 2, productName: 'Mechanical Keyboard', category: 'Peripherals', price: 150, stock: 200, lastUpdated: '2023-01-10' },
      { id: 3, productName: 'Ergonomic Mouse', category: 'Peripherals', price: 75, stock: 120, lastUpdated: '2023-01-20' },
      { id: 4, productName: '4K Monitor 27"', category: 'Electronics', price: 450, stock: 80, lastUpdated: '2023-01-18' },
    ],
    sortable: true,
  },
};
