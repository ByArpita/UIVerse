'use client';

import React, { useState } from 'react';
import Layout from '../components/Layout';
import Accordion from '../components/Accordion';
import Alert from '../components/Alert';
import Avatar from '../components/Avatar';
import Badge from '../components/Badge';
import Banner from '../components/Banner';
import Breadcrumbs from '../components/Breadcrumbs';
import Button from '../components/Button';
import Card from '../components/Card';
import Carousel from '../components/Carousel';
import Checkbox from '../components/Checkbox';
import EmptyState from '../components/EmptyState';
import Form from '../components/Form';
import Input from '../components/Input';
import Modal from '../components/Modal';
import Navbar from '../components/Navbar';
import Pagination from '../components/Pagination';
import ProductCard from '../components/ProductCard';
import ProgressBar from '../components/ProgressBar';
import RadioButton from '../components/RadioButton';
import SidebarMenu from '../components/SidebarMenu';
import SkeletonLoader from '../components/SkeletonLoader';
import Spinner from '../components/Spinner';
import Table from '../components/Table';
import Tabs from '../components/Tabs';
import Toast from '../components/Toast';
import Tooltip from '../components/Tooltip';
import { CheckboxGroup, HorizontalCheckboxGroup } from '../components/CheckboxGroup';
import "./globals.css";

const ModalExample = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="My Modal">
        <p>This is the content of the modal.</p>
      </Modal>
    </>
  );
};

const PaginationExample = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={10}
      onPageChange={(page) => setCurrentPage(page)}
    />
  );
};

const RadioButtonGroupExample = () => {
  const [selectedValue, setSelectedValue] = React.useState('item1');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="flex flex-col space-y-2">
      <RadioButton
        label="Item 1"
        value="item1"
        name="radio-group"
        checked={selectedValue === 'item1'}
        onChange={handleChange}
      />
      <RadioButton
        label="Item 2"
        value="item2"
        name="radio-group"
        checked={selectedValue === 'item2'}
        onChange={handleChange}
      />
      <RadioButton
        label="Item 3"
        value="item3"
        name="radio-group"
        checked={selectedValue === 'item3'}
        onChange={handleChange}
      />
    </div>
  );
};

const HorizontalRadioButtonGroupExample = () => {
  const [selectedValue, setSelectedValue] = React.useState('item1');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="flex space-x-4">
      <RadioButton
        label="Item 1"
        value="item1"
        name="radio-group-horizontal"
        checked={selectedValue === 'item1'}
        onChange={handleChange}
      />
      <RadioButton
        label="Item 2"
        value="item2"
        name="radio-group-horizontal"
        checked={selectedValue === 'item2'}
        onChange={handleChange}
      />
      <RadioButton
        label="Item 3"
        value="item3"
        name="radio-group-horizontal"
        checked={selectedValue === 'item3'}
        onChange={handleChange}
      />
    </div>
  );
};

const components = [
  {
    name: 'Accordion',
    details: {
      description: 'A collapsible content area that allows users to expand and collapse sections of content.',
      props: [
        { name: 'items', type: 'AccordionItem[]', default: '[]', description: 'An array of accordion items.' },
        { name: 'allowMultipleOpen', type: 'boolean', default: 'false', description: 'Whether multiple accordion items can be open at the same time.' },
      ],
      examples: [
        {
          title: 'Default Accordion',
          code: '<Accordion items={[{ title: \'Accordion 1\', content: \'Content 1\' }]} />',
          component: <Accordion items={[{ title: 'Accordion 1', content: 'Content 1' }]} />,
        },
        {
          title: 'Accordion with multiple open items',
          code: '<Accordion items={[{ title: \'Accordion 1\', content: \'Content 1\' }, { title: \'Accordion 2\', content: \'Content 2\' }]} allowMultipleOpen />',
          component: <Accordion items={[{ title: 'Accordion 1', content: 'Content 1' }, { title: 'Accordion 2', content: 'Content 2' }]} allowMultipleOpen />,
        },
      ],
    },
  },
  {
    name: 'Alert',
    details: {
      description: 'A message to the user.',
      props: [
        { name: 'message', type: 'string', default: '', description: 'The message to display.' },
        { name: 'type', type: '\'info\' | \'success\' | \'warning\' | \'error\'', default: '\'info\'', description: 'The type of alert.' },
        { name: 'showCloseButton', type: 'boolean', default: 'false', description: 'Whether to show a close button.' },
        { name: 'onClose', type: '() => void', default: 'undefined', description: 'A callback function to be called when the alert is closed.' },
      ],
      examples: [
        {
          title: 'Info Alert',
          code: '<Alert message="This is an info alert."/>',
          component: <Alert message="This is an info alert." />,
        },
        {
          title: 'Success Alert',
          code: '<Alert message="This is a success alert." type="success"/>',
          component: <Alert message="This is a success alert." type="success" />,
        },
        {
          title: 'Warning Alert',
          code: '<Alert message="This is a warning alert." type="warning"/>',
          component: <Alert message="This is a warning alert." type="warning" />,
        },
        {
          title: 'Error Alert',
          code: '<Alert message="This is an error alert." type="error"/>',
          component: <Alert message="This is an error alert." type="error" />,
        },
        {
          title: 'Alert with close button',
          code: '<Alert message="This is an alert with a close button." showCloseButton/>',
          component: <Alert message="This is an alert with a close button." showCloseButton />,
        },
      ],
    },
  },
  {
    name: 'Avatar',
    details: {
      description: 'A user\'s profile picture or initials.',
      props: [
        { name: 'src', type: 'string', default: 'undefined', description: 'The source of the image.' },
        { name: 'alt', type: 'string', default: 'Avatar', description: 'The alt text for the image.' },
        { name: 'initials', type: 'string', default: 'undefined', description: 'The initials to display if the image fails to load.' },
        { name: 'size', type: '\'sm\' | \'md\' | \'lg\'', default: '\'md\'', description: 'The size of the avatar.' },
        { name: 'className', type: 'string', default: 'undefined', description: 'Additional CSS classes to apply to the component.' },
      ],
      examples: [
        {
          title: 'Default Avatar',
          code: '<Avatar initials="JD" />',
          component: <Avatar initials="JD" />,
        },
        {
          title: 'Avatar with image',
          code: '<Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />',
          component: <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />,
        },
        {
          title: 'Small Avatar',
          code: '<Avatar initials="JD" size="sm" />',
          component: <Avatar initials="JD" size="sm" />,
        },
        {
          title: 'Large Avatar',
          code: '<Avatar initials="JD" size="lg" />',
          component: <Avatar initials="JD" size="lg" />,
        },
      ],
    },
  },
  {
    name: 'Badge',
    details: {
      description: 'A small status descriptor for an item.',
      props: [
        { name: 'children', type: 'React.ReactNode', default: 'undefined', description: 'The content of the badge.' },
        { name: 'type', type: '\'default\' | \'primary\' | \'success\' | \'error\' | \'warning\'', default: '\'default\'', description: 'The type of badge.' },
        { name: 'className', type: 'string', default: 'undefined', description: 'Additional CSS classes to apply to the component.' },
      ],
      examples: [
        {
          title: 'Default Badge',
          code: '<Badge>Default</Badge>',
          component: <Badge>Default</Badge>,
        },
        {
          title: 'Primary Badge',
          code: '<Badge type="primary">Primary</Badge>',
          component: <Badge type="primary">Primary</Badge>,
        },
        {
          title: 'Success Badge',
          code: '<Badge type="success">Success</Badge>',
          component: <Badge type="success">Success</Badge>,
        },
        {
          title: 'Error Badge',
          code: '<Badge type="error">Error</Badge>',
          component: <Badge type="error">Error</Badge>,
        },
        {
          title: 'Warning Badge',
          code: '<Badge type="warning">Warning</Badge>',
          component: <Badge type="warning">Warning</Badge>,
        },
      ],
    },
  },
  {
    name: 'Banner',
    details: {
      description: 'A prominent message displayed to the user.',
      props: [
        { name: 'message', type: 'string', default: '', description: 'The message to display.' },
        { name: 'type', type: '\'info\' | \'success\' | \'warning\' | \'error\'', default: '\'info\'', description: 'The type of banner.' },
        { name: 'showCloseButton', type: 'boolean', default: 'true', description: 'Whether to show a close button.' },
        { name: 'onClose', type: '() => void', default: 'undefined', description: 'A callback function to be called when the banner is closed.' },
      ],
      examples: [
        {
          title: 'Info Banner',
          code: '<Banner message="This is an info banner."/>',
          component: <Banner message="This is an info banner." />,
        },
        {
          title: 'Success Banner',
          code: '<Banner message="This is a success banner." type="success"/>',
          component: <Banner message="This is a success banner." type="success" />,
        },
        {
          title: 'Warning Banner',
          code: '<Banner message="This is a warning banner." type="warning"/>',
          component: <Banner message="This is a warning banner." type="warning" />,
        },
        {
          title: 'Error Banner',
          code: '<Banner message="This is an error banner." type="error"/>',
          component: <Banner message="This is an error banner." type="error" />,
        },
      ],
    },
  },
  {
    name: 'Breadcrumbs',
    details: {
      description: 'A secondary navigation scheme that reveals the user\'s location in a website or web application.',
      props: [
        { name: 'items', type: 'BreadcrumbItem[]', default: '[]', description: 'An array of breadcrumb items.' },
      ],
      examples: [
        {
          title: 'Default Breadcrumbs',
          code: '<Breadcrumbs items={[{ label: \'Home\', href: \'/\' }, { label: \'Components\' }]} />',
          component: <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Components' }]} />,
        },
      ],
    },
  },
  {
    name: 'Button',
    details: {
      description: 'A clickable element that performs an action.',
      props: [
        { name: 'children', type: 'React.ReactNode', default: 'undefined', description: 'The content of the button.' },
        { name: 'variant', type: "'primary' | 'secondary' | 'outline' | 'ghost'", default: "'primary'", description: 'The variant of the button.' },
      ],
      examples: [
        {
          title: 'Primary Button',
          code: '<Button>Primary Button</Button>',
          component: <Button>Primary Button</Button>,
        },
        {
          title: 'Secondary Button',
          code: '<Button variant="secondary">Secondary Button</Button>',
          component: <Button variant="secondary">Secondary Button</Button>,
        },
        {
          title: 'Outline Button',
          code: '<Button variant="outline">Outline Button</Button>',
          component: <Button variant="outline">Outline Button</Button>,
        },
        {
          title: 'Success Button',
          code: '<Button variant="success">Success Button</Button>',
          component: <Button variant="success">Success Button</Button>,
        }, {
          title: 'Danger Button',
          code: '<Button variant="danger">Danger Button</Button>',
          component: <Button variant="danger">Danger Button</Button>,
        },
      ],
    },
  },
  {
    name: 'Card',
    details: {
      description: 'A container for a piece of content.',
      props: [
        { name: 'children', type: 'React.ReactNode', default: 'undefined', description: 'The content of the card.' },
        { name: 'className', type: 'string', default: 'undefined', description: 'Additional CSS classes to apply to the component.' },
      ],
      examples: [
        {
          title: 'Default Card',
          code: '<Card>This is a card.</Card>',
          component: <Card>This is a card.</Card>,
        },
      ],
    },
  },
  {
    name: 'Carousel',
    details: {
      description: 'A slideshow for cycling through a series of content.',
      props: [
        { name: 'children', type: 'React.ReactNode[]', default: '[]', description: 'An array of slides.' },
        { name: 'autoPlay', type: 'boolean', default: 'false', description: 'Whether the carousel should autoplay.' },
        { name: 'interval', type: 'number', default: '3000', description: 'The interval between slides in milliseconds.' },
      ],
      examples: [
        {
          title: 'Default Carousel',
          code: `<Carousel>{[
          <div key={1} className="w-full h-48 bg-blue-300 flex items-center justify-center text-white text-2xl">Slide 1</div>,
          <div key={2} className="w-full h-48 bg-green-300 flex items-center justify-center text-white text-2xl">Slide 2</div>,
          <div key={3} className="w-full h-48 bg-red-300 flex items-center justify-center text-white text-2xl">Slide 3</div>
          ]}</Carousel>`,
          component: <Carousel>{[
            <div key={1} className="w-full h-48 bg-blue-300 flex items-center justify-center text-white text-2xl">Slide 1</div>,
            <div key={2} className="w-full h-48 bg-green-300 flex items-center justify-center text-white text-2xl">Slide 2</div>,
            <div key={3} className="w-full h-48 bg-red-300 flex items-center justify-center text-white text-2xl">Slide 3</div>
          ]}</Carousel>,
        },
        {
          title: 'AutoPlay Carousel',
          code: `<Carousel autoPlay>{[
          <div key={1} className="w-full h-48 bg-blue-300 flex items-center justify-center text-white text-2xl">Slide 1</div>,
          <div key={2} className="w-full h-48 bg-green-300 flex items-center justify-center text-white text-2xl">Slide 2</div>,
          <div key={3} className="w-full h-48 bg-red-300 flex items-center justify-center text-white text-2xl">Slide 3</div>
          ]}</Carousel>`,
          component: <Carousel autoPlay={true}>{[
            <div key={1} className="w-full h-48 bg-blue-300 flex items-center justify-center text-white text-2xl">Slide 1</div>,
            <div key={2} className="w-full h-48 bg-green-300 flex items-center justify-center text-white text-2xl">Slide 2</div>,
            <div key={3} className="w-full h-48 bg-red-300 flex items-center justify-center text-white text-2xl">Slide 3</div>
          ]}</Carousel>,
        },
        {
          title: 'Carousel with Images',
          code: `<Carousel autoPlay>{[
          <img key={1} src="https://via.placeholder.com/800x300/1" alt="Slide 1" className="w-full h-48 object-cover" />,
          <img key={2} src="https://via.placeholder.com/800x300/2" alt="Slide 2" className="w-full h-48 object-cover" />,
          <img key={3} src="https://via.placeholder.com/800x300/3" alt="Slide 3" className="w-full h-48 object-cover" />
          ]}</Carousel>`,
          component: <Carousel autoPlay={true}>{[
            <img key={1} src="https://via.placeholder.com/800x300/1" alt="Slide 1" className="w-full h-48 object-cover" />,
            <img key={2} src="https://via.placeholder.com/800x300/2" alt="Slide 2" className="w-full h-48 object-cover" />,
            <img key={3} src="https://via.placeholder.com/800x300/3" alt="Slide 3" className="w-full h-48 object-cover" />
          ]}</Carousel>,
        },
      ],
    },
  },

  {
    name: 'Checkbox',
    details: {
      description: 'A user can select one or more options from a set.',
      props: [
        { name: 'label', type: 'string', default: '', description: 'The label for the checkbox.' },
        { name: 'checked', type: 'boolean', default: 'false', description: 'Whether the checkbox is checked.' },
        { name: 'onChange', type: '() => void', default: 'undefined', description: 'A callback function to be called when the checkbox is checked or unchecked.' },
        { name: 'disabled', type: 'boolean', default: 'false', description: 'Whether the checkbox is disabled.' },
      ],
      examples: [
        {
          title: 'Default Checkbox',
          code: '<Checkbox label="Check me" />',
          component: <Checkbox label="Check me" />,
        },
        {
          title: 'Checked Checkbox',
          code: '<Checkbox label="Option selected" checked />',
          component: <Checkbox label="Option selected" checked />,
        },
        {
          title: 'Disabled Checkbox',
          code: '<Checkbox label="Disabled option" disabled />',
          component: <Checkbox label="Disabled option" disabled />,
        },
        {
          title: 'Checkbox Group',
          code: `const [selectedItems, setSelectedItems] = useState(['item1']);

          const handleCheckboxChange = (event) => {
            const { value, checked } = event.target;
            setSelectedItems(prev =>
              checked ? [...prev, value] : prev.filter(item => item !== value)
            );
          };

          <div className="flex flex-col space-y-2">
            <Checkbox
              label="Item 1"
              value="item1"
              checked={selectedItems.includes('item1')}
              onChange={handleCheckboxChange}
            />
            <Checkbox
              label="Item 2"
              value="item2"
              checked={selectedItems.includes('item2')}
              onChange={handleCheckboxChange}
            />
            <Checkbox
              label="Item 3"
              value="item3"
              checked={selectedItems.includes('item3')}
              onChange={handleCheckboxChange}
            />
          </div>`,
          component: <CheckboxGroup />,
        },
        {
          title: 'Horizontal Checkbox Group',
          code: `const [selectedItems, setSelectedItems] = useState(['item1']);

          const handleCheckboxChange = (event) => {
            const { value, checked } = event.target;
            setSelectedItems(prev =>
              checked ? [...prev, value] : prev.filter(item => item !== value)
            );
          };

          <div className="flex space-x-4">
            <Checkbox
              label="Item 1"
              value="item1"
              checked={selectedItems.includes('item1')}
              onChange={handleCheckboxChange}
            />
            <Checkbox
              label="Item 2"
              value="item2"
              checked={selectedItems.includes('item2')}
              onChange={handleCheckboxChange}
            />
            <Checkbox
              label="Item 3"
              value="item3"
              checked={selectedItems.includes('item3')}
              onChange={handleCheckboxChange}
            />
          </div>`,
          component: <HorizontalCheckboxGroup />,
        },
      ],
    },
  },
  {
    name: 'EmptyState',
    details: {
      description: 'A message to the user when there is no data to display.',
      props: [
        { name: 'title', type: 'string', default: '', description: 'The title of the empty state.' },
        { name: 'description', type: 'string', default: '', description: 'The description of the empty state.' },
        { name: 'illustration', type: 'React.ReactNode', default: 'undefined', description: 'An illustration for the empty state.' },
        { name: 'actionButton', type: 'React.ReactNode', default: 'undefined', description: 'An action button for the empty state.' },
      ],
      examples: [
        {
          title: 'Default EmptyState',
          code: '<EmptyState title="No results" description="No results found."/>',
          component: <EmptyState title="No results" description="No results found." />,
        },
      ],
    },
  },
  {
    name: 'Form',
    details: {
      description: 'A collection of input fields.',
      props: [
        { name: 'onSubmit', type: '(event: React.FormEvent<HTMLFormElement>) => void', default: 'undefined', description: 'A callback function to be called when the form is submitted.' },
        { name: 'children', type: 'React.ReactNode', default: 'undefined', description: 'The content of the form.' },
        { name: 'className', type: 'string', default: 'undefined', description: 'Additional CSS classes to apply to the component.' },
      ],
      examples: [
        {
          title: 'Default Form',
          code: '<Form onSubmit={() => {}}><Input placeholder="Enter text"/></Form>',
          component: <Form onSubmit={() => { }}><Input placeholder="Enter text" /></Form>,
        },
        {
          title: 'Detailed Form',
          code: `<Form onSubmit={() => {}}><div>
          <label htmlFor="contactName" className="block text-sm font-medium text-gray-700">Name</label>
          <Input type="text" id="contactName" placeholder="Your Name"/>
        </div>
        <div>
          <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">Email</label>
          <Input type="email" id="contactEmail" placeholder="your@example.com"/>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea id="message" rows={4} className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your message"></textarea>
        </div>
        <Button type="submit">Send Message</Button></Form>`,
          component: <Form onSubmit={() => { }}><div>
          <label htmlFor="contactName" className="block text-sm font-medium text-gray-700">Name</label>
          <Input type="text" id="contactName" placeholder="Your Name"/>
        </div>
        <div>
          <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">Email</label>
          <Input type="email" id="contactEmail" placeholder="your@example.com"/>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea id="message" rows={4} className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your message"></textarea>
        </div>
        <Button type="submit">Send Message</Button></Form>,
        },
      ],
    },
  },
  {
    name: 'Input',
    details: {
      description: 'A text input field.',
      props: [],
      examples: [
        {
          title: 'Default Input',
          code: '<Input placeholder="Enter text"/>',
          component: <Input placeholder="Enter text" />,
        },
      ],
    },
  },
  {
    name: 'Modal',
    details: {
      description: 'A dialog that appears on top of the main content.',
      props: [
        { name: 'isOpen', type: 'boolean', default: 'false', description: 'Whether the modal is open.' },
        { name: 'onClose', type: '() => void', default: 'undefined', description: 'A callback function to be called when the modal is closed.' },
        { name: 'children', type: 'React.ReactNode', default: 'undefined', description: 'The content of the modal.' },
        { name: 'title', type: 'string', default: 'undefined', description: 'The title of the modal.' },
      ],
      examples: [
        {
          title: 'Default Modal',
          code: `const ModalExample = () => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  return (\n    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title=\"My Modal\">
        <p>This is the content of the modal.</p>
      </Modal>
    </>
  );
};`,
          component: <ModalExample />,
        },
      ],
    },
  },
  {
    name: 'Navbar',
    details: {
      description: 'A navigation bar.',
      props: [
        { name: 'brandName', type: 'string', default: '', description: 'The brand name to display in the navbar.' },
        { name: 'links', type: 'NavLink[]', default: '[]', description: 'An array of navigation links.' },
        { name: 'className', type: 'string', default: 'undefined', description: 'Additional CSS classes to apply to the component.' },
      ],
      examples: [
        {
          title: 'Default Navbar',
          code: '<Navbar brandName="Logo" links={[{ href: \'/\', label: \'Home\' }, { href: \'/about\', label: \'About\' }]} />',
          component: <Navbar brandName="Logo" links={[{ href: '/', label: 'Home' }, { href: '/about', label: 'About' }]} />,
        },
      ],
    },
  },
  {
    name: 'Pagination',
    details: {
      description: 'A set of links to navigate between pages.',
      props: [
        { name: 'currentPage', type: 'number', default: '1', description: 'The current page number.' },
        { name: 'totalPages', type: 'number', default: '1', description: 'The total number of pages.' },
        { name: 'onPageChange', type: '(page: number) => void', default: 'undefined', description: 'A callback function to be called when the page changes.' },
      ],
      examples: [
        {
          title: 'Default Pagination',
          code: `const PaginationExample = () => {\n  const [currentPage, setCurrentPage] = React.useState(1);\n\n  return (\n    <Pagination\n      currentPage={currentPage}\n      totalPages={10}\n      onPageChange={(page) => setCurrentPage(page)}\n    />\n  );\n};`,
          component: <PaginationExample />,
        },
      ],
    },
  },
  {
    name: 'ProductCard',
    details: {
      description: 'A card that displays information about a product.',
      props: [
        { name: 'imageSrc', type: 'string', default: '', description: 'The source of the product image.' },
        { name: 'imageAlt', type: 'string', default: '', description: 'The alt text for the product image.' },
        { name: 'title', type: 'string', default: '', description: 'The title of the product.' },
        { name: 'description', type: 'string', default: '', description: 'The description of the product.' },
        { name: 'buttonText', type: 'string', default: '', description: 'The text for the action button.' },
        { name: 'onButtonClick', type: '() => void', default: 'undefined', description: 'A callback function to be called when the action button is clicked.' },
      ],
      examples: [
        {
          title: 'Default ProductCard',
          code: '<ProductCard imageSrc="https://i.pravatar.cc/150?u=a042581f4e29026704d" imageAlt="Product image" title="Product" description="Description" buttonText="Add to cart" onButtonClick={() => {}} />',
          component: <ProductCard imageSrc="https://i.pravatar.cc/150?u=a042581f4e29026704d" imageAlt="Product image" title="Product" description="Description" buttonText="Add to cart" onButtonClick={() => { }} />,
        },
      ],
    },
  },
  {
    name: 'ProgressBar',
    details: {
      description: 'A visual indicator of the progress of an operation.',
      props: [
        { name: 'value', type: 'number', default: '0', description: 'The current value of the progress bar.' },
        { name: 'max', type: 'number', default: '100', description: 'The maximum value of the progress bar.' },
        { name: 'variant', type: '\'determinate\' | \'indeterminate\'', default: '\'determinate\'', description: 'The variant of the progress bar.' },
        { name: 'color', type: '\'primary\' | \'secondary\' | \'success\' | \'warning\' | \'danger\'', default: '\'primary\'', description: 'The color of the progress bar.' },
        { name: 'height', type: 'string', default: 'h-2.5\'', description: 'The height of the progress bar.' },
        { name: 'showLabel', type: 'boolean', default: 'false', description: 'Whether to show a label with the current percentage.' },
      ],
      examples: [
        {
          title: 'Default ProgressBar',
          code: '<ProgressBar value={50} />',
          component: <ProgressBar value={50} />,
        },
        {
          title: 'Indeterminate ProgressBar',
          code: '<ProgressBar variant="indeterminate" />',
          component: <ProgressBar variant="indeterminate" />,
        },
        {
          title: 'ProgressBar with label',
          code: '<ProgressBar value={50} showLabel />',
          component: <ProgressBar value={50} showLabel />,
        },
      ],
    },
  },
  {
    name: 'RadioButton',
    details: {
      description: 'A user can select only one option from a set.',
      props: [
        { name: 'label', type: 'string', default: '', description: 'The label for the radio button.' },
      ],
      examples: [
        {
          title: 'Default RadioButton',
          code: '<RadioButton label="Select me" />',
          component: <RadioButton label="Select me" />,
        },
        {
          title: 'RadioButton Group',
          code: `const RadioButtonGroupExample = () => {\n  const [selectedValue, setSelectedValue] = React.useState('item1');\n\n  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {\n    setSelectedValue(event.target.value);\n  };\n\n  return (\n    <div className=\"flex flex-col space-y-2\">
      <RadioButton
        label=\"Item 1\"
        value=\"item1\"
        name=\"radio-group\"
        checked={selectedValue === 'item1'}
        onChange={handleChange}
      />
      <RadioButton
        label=\"Item 2\"
        value=\"item2\"
        name=\"radio-group\"
        checked={selectedValue === 'item2'}
        onChange={handleChange}
      />
      <RadioButton
        label=\"Item 3\"
        value=\"item3\"
        name=\"radio-group\"
        checked={selectedValue === 'item3'}
        onChange={handleChange}
      />
    </div>
  );
};`,
          component: <RadioButtonGroupExample />,
        },
        {
          title: 'Horizontal RadioButton Group',
          code: `const HorizontalRadioButtonGroupExample = () => {\n  const [selectedValue, setSelectedValue] = React.useState('item1');\n\n  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {\n    setSelectedValue(event.target.value);\n  };\n\n  return (\n    <div className=\"flex space-x-4\">\n      <RadioButton\n        label=\"Item 1\"\n        value=\"item1\"\n        name=\"radio-group-horizontal\"\n        checked={selectedValue === 'item1'}\n        onChange={handleChange}\n      />\n      <RadioButton\n        label=\"Item 2\"\n        value=\"item2\"\n        name=\"radio-group-horizontal\"\n        checked={selectedValue === 'item2'}\n        onChange={handleChange}\n      />\n      <RadioButton\n        label=\"Item 3\"\n        value=\"item3\"\n        name=\"radio-group-horizontal\"\n        checked={selectedValue === 'item3'}\n        onChange={handleChange}\n      />\n    </div>\n  );\n};`,
          component: <HorizontalRadioButtonGroupExample />,
        },
      ],
    },
  },
  {
    name: 'SidebarMenu',
    details: {
      description: 'A vertical navigation menu.',
      props: [
        { name: 'items', type: 'MenuItem[]', default: '[]', description: 'An array of menu items.' },
      ],
      examples: [
        {
          title: 'Default SidebarMenu',
          code: `<SidebarMenu items={[{ href: '#', label: 'Home' }, { href: '#', label: 'About' }, { href: '#', label: 'Contact' }]} />`,
          component: <SidebarMenu items={[{ href: '#', label: 'Home' }, { href: '#', label: 'About' }, { href: '#', label: 'Contact' }]} />,
        },
      ],
    },
  },
  {
    name: 'SkeletonLoader',
    details: {
      description: 'A placeholder for content that is loading.',
      props: [
        { name: 'width', type: 'string', default: 'w-full\'', description: 'The width of the skeleton loader.' },
        { name: 'height', type: 'string', default: 'h-4\'', description: 'The height of the skeleton loader.' },
        { name: 'count', type: 'number', default: '1', description: 'The number of skeleton loaders to display.' },
        { name: 'className', type: 'string', default: 'undefined', description: 'Additional CSS classes to apply to the component.' },
      ],
      examples: [
        {
          title: 'Default SkeletonLoader',
          code: '<SkeletonLoader />',
          component: <SkeletonLoader />,
        },
        {
          title: 'SkeletonLoader with multiple counts',
          code: '<SkeletonLoader count={3} />',
          component: <SkeletonLoader count={3} />,
        },
      ],
    },
  },
  {
    name: 'Spinner',
    details: {
      description: 'An animated graphic that indicates that an operation is in progress.',
      props: [
        { name: 'type', type: '\'dots\' | \'ring\' | \'pulse\'', default: '\'ring\'', description: 'The type of spinner.' },
        { name: 'size', type: '\'sm\' | \'md\' | \'lg\'', default: '\'md\'', description: 'The size of the spinner.' },
        { name: 'color', type: 'string', default: 'text-primary\'', description: 'The color of the spinner.' },
      ],
      examples: [
        {
          title: 'Ring Spinner',
          code: '<Spinner />',
          component: <Spinner />,
        },
        {
          title: 'Dots Spinner',
          code: '<Spinner type="dots" />',
          component: <Spinner type="dots" />,
        },
        {
          title: 'Pulse Spinner',
          code: '<Spinner type="pulse" />',
          component: <Spinner type="pulse" />,
        },
      ],
    },
  },
  {
    name: 'Table',
    details: {
      description: 'A set of data arranged in rows and columns.',
      props: [
        { name: 'columns', type: 'Column[]', default: '[]', description: 'An array of column definitions.' },
        { name: 'data', type: 'Record<string, any>[]', default: '[]', description: 'An array of data rows.' },
        { name: 'sortable', type: 'boolean', default: 'false', description: 'Whether the table is sortable.' },
      ],
      examples: [
        {
          title: 'Default Table',
          code: '<Table columns={[{ key: \'name\', header: \'Name\' }]} data={[{ name: \'John Doe\' }]} />',
          component: <Table columns={[{ key: 'name', header: 'Name' }]} data={[{ name: 'John Doe' }]} />,
        },
      ],
    },
  },
  {
    name: 'Tabs',
    details: {
      description: 'A set of layered sections of content, known as tab panels, that are displayed one at a time.',
      props: [
        { name: 'tabs', type: 'TabProps[]', default: '[]', description: 'An array of tab definitions.' },
        { name: 'defaultActiveTab', type: 'number', default: '0', description: 'The index of the tab to be active by default.' },
      ],
      examples: [
        {
          title: 'Default Tabs',
          code: '<Tabs tabs={[{ label: \'Tab 1\', content: \'Content 1\' }]} />',
          component: <Tabs tabs={[{ label: 'Tab 1', content: 'Content 1' }]} />,
        },
      ],
    },
  },

  {
    name: 'Toast',
    details: {
      description: 'A small, temporary message that appears to the user.',
      props: [
        { name: 'message', type: 'string', default: '', description: 'The message to display.' },
        { name: 'type', type: '\'success\' | \'error\' | \'warning\' | \'info\'', default: '\'info\'', description: 'The type of toast.' },
        { name: 'duration', type: 'number', default: '3000', description: 'The duration in milliseconds to show the toast. Set to 0 for no auto-dismiss.' },
        { name: 'onDismiss', type: '() => void', default: 'undefined', description: 'A callback function to be called when the toast is dismissed.' },
      ],
      examples: [
        {
          title: 'Info Toast',
          code: '<Toast message="This is a toast."/>',
          component: <Toast message="This is a toast." />,
        },
      ],
    },
  },
  {
    name: 'Tooltip',
    details: {
      description: 'A small pop-up that displays information when the user hovers over an element.',
      props: [
        { name: 'children', type: 'React.ReactNode', default: 'undefined', description: 'The content to wrap the tooltip around.' },
        { name: 'content', type: 'React.ReactNode', default: 'undefined', description: 'The content of the tooltip.' },
        { name: 'position', type: '\'top\' | \'bottom\' | \'left\' | \'right\'', default: '\'top\'', description: 'The position of the tooltip.' },
      ],
      examples: [
        {
          title: 'Default Tooltip',
          code: '<Tooltip content="This is a tooltip.">Hover me</Tooltip>',
          component: <Tooltip content="This is a tooltip.">Hover me</Tooltip>,
        },
      ],
    },
  },
];

const Page = () => {
  const [selectedComponent, setSelectedComponent] = useState(components[0]);

  return (
    <Layout
      sidebar={(
        <ul className="h-full overflow-y-auto">
          {components.map((component) => (
            <li key={component.name}>
              <button
                className="w-full text-left p-2 hover:bg-gray-700 rounded"
                onClick={() => setSelectedComponent(component)}
              >
                {component.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    >
      <div>
        <h1 className="text-2xl font-bold mb-4">{selectedComponent.name}</h1>
        <p className="mb-4">{selectedComponent.details.description}</p>

        <h2 className="text-xl font-bold mt-8 mb-4">Props</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2">Name</th>
              <th className="border-b p-2">Type</th>
              <th className="border-b p-2">Default</th>
              <th className="border-b p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {selectedComponent.details.props.map((prop) => (
              <tr key={prop.name}>
                <td className="border-b p-2">{prop.name}</td>
                <td className="border-b p-2"><code>{prop.type}</code></td>
                <td className="border-b p-2"><code>{prop.default}</code></td>
                <td className="border-b p-2">{prop.description}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="text-xl font-bold mt-8 mb-4">Examples</h2>
        {selectedComponent.details.examples.map((example) => (
          <div key={example.title} className="mb-8">
            <h3 className="text-lg font-bold mb-2">{example.title}</h3>
            <div className="border p-4 rounded mb-4">
              {example.component}
            </div>
            <pre className="bg-gray-800 text-white p-4 rounded"><code>{example.code}</code></pre>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Page;
