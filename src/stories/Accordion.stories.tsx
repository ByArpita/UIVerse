import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem } from '@/components/Accordion';
import React from 'react';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultOpenIndex: { control: 'number' },
    onItemToggle: { action: 'itemToggled' },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    children: (
      <>
        <AccordionItem title="What is UIverse?">
          UIverse is a comprehensive UI component library designed to accelerate your development process.
        </AccordionItem>
        <AccordionItem title="How do I install it?">
          You can install UIverse using npm or yarn: `npm install uiverse` or `yarn add uiverse`.
        </AccordionItem>
        <AccordionItem title="Is it customizable?">
          Yes, UIverse components are highly customizable to fit your project's design system.
        </AccordionItem>
      </>
    ),
  },
};

export const WithDefaultOpen: Story = {
  args: {
    defaultOpenIndex: 1,
    children: (
      <>
        <AccordionItem title="What is UIverse?">
          UIverse is a comprehensive UI component library designed to accelerate your development process.
        </AccordionItem>
        <AccordionItem title="How do I install it?">
          You can install UIverse using npm or yarn: `npm install uiverse` or `yarn add uiverse`.
        </AccordionItem>
        <AccordionItem title="Is it customizable?">
          Yes, UIverse components are highly customizable to fit your project's design system.
        </AccordionItem>
      </>
    ),
  },
};

const metaItem: Meta<typeof AccordionItem> = {
  title: 'Components/AccordionItem',
  component: AccordionItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    children: { control: 'text' },
    isOpen: { control: 'boolean' },
    onToggle: { action: 'toggled' },
  },
};

export const AccordionItemDefault: StoryObj<typeof AccordionItem> = {
  args: {
    title: 'Accordion Item Title',
    children: 'This is the content of the accordion item.',
  },
};

export const AccordionItemOpen: StoryObj<typeof AccordionItem> = {
  args: {
    title: 'Accordion Item Title (Open)',
    children: 'This is the content of the accordion item.',
    isOpen: true,
  },
};
