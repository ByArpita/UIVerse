import type { Meta, StoryObj } from '@storybook/react';
import ProductCard from '@/components/ProductCard';

const meta: Meta<typeof ProductCard> = {
  title: 'Components/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    imageSrc: { control: 'text' },
    imageAlt: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    buttonText: { control: 'text' },
    onButtonClick: { action: 'buttonClicked' },
  },
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
  args: {
    imageSrc: 'https://via.placeholder.com/320x240/007bff/ffffff?text=Product+Image',
    imageAlt: 'Product Image',
    title: 'Awesome Product',
    description: 'This is a fantastic product that you will absolutely love. Buy it now!',
    buttonText: 'Add to Cart',
    onButtonClick: () => alert('Add to Cart clicked!'),
  },
};

export const LongDescription: Story = {
  args: {
    imageSrc: 'https://via.placeholder.com/320x240/28a745/ffffff?text=Another+Product',
    imageAlt: 'Another Product Image',
    title: 'Super Duper Item',
    description: 'This item has a very long and detailed description to showcase how the card handles extensive text. It covers all the features and benefits you could ever imagine, making it an irresistible purchase for anyone looking for quality and performance.',
    buttonText: 'View Details',
    onButtonClick: () => alert('View Details clicked!'),
  },
};
