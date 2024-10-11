import React, { useState } from 'react';

const ShoppingList = () => {
  // Step 3: Initialize state with an empty array to manage shopping items
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');

  // Function to handle adding a new shopping item
  const addItem = (e) => {
    e.preventDefault();
    if (itemName.trim() && quantity.trim()) {
      setItems([...items, { id: items.length + 1, name: itemName, quantity }]);
      setItemName(''); // Clear the item name input field
      setQuantity(''); // Clear the quantity input field
    }
  };

  return (
    <div>
      <h2>Shopping List</h2>

      {/* Form to add new shopping items */}
      <form onSubmit={addItem}>
        <div>
          <label>Item Name: </label>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            placeholder="Enter item name"
          />
        </div>
        <div>
          <label>Quantity: </label>
          <input
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Enter quantity"
          />
        </div>
        <button type="submit">Add Item</button>
      </form>

      {/* Display the list of shopping items */}
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
