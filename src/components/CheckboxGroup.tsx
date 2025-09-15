'use client';

import React, { useState } from 'react';
import Checkbox from './Checkbox';

export const CheckboxGroup = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>(['item1']);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setSelectedItems(prev =>
      checked ? [...prev, value] : prev.filter(item => item !== value)
    );
  };

  return (
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
    </div>
  );
};

export const HorizontalCheckboxGroup = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>(['item1']);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setSelectedItems(prev =>
      checked ? [...prev, value] : prev.filter(item => item !== value)
    );
  };

  return (
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
    </div>
  );
};
