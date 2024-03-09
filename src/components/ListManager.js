import React, { useState } from 'react';

function ListManager() {
const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']); // Initial items in the first list
const [movedItems, setMovedItems] = useState([]); // Items that have been moved to the second list

const moveItem = (item) => {
    setItems(items.filter(i => i !== item)); // Remove clicked item from the first list
    setMovedItems([...movedItems, item]); // Add clicked item to the second list
};

const addItem = (item) => {
    setItems([...items, item]); // Add new item to the first list
};

return (
    <div className='form'>
    <div>
        <h2>Need It</h2>
        <ul>
        {items.map((item, index) => (
            <li key={index} onClick={() => moveItem(item)}>{item}</li>
        ))}
        </ul>
        <button onClick={() => addItem(`Item ${items.length + 1}`)}>Add Item</button>
    </div>
    <div>
        <h2>Got It</h2>
        <ul>
        {movedItems.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
        </ul>
    </div>
    </div>
);
}

export default ListManager;
