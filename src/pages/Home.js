import  { useCollection } from '../hooks/useCollection'
import ItemList from '../components/ItemList'
import GotList from '../components/GotList'
import { useAuthContext } from '../hooks/useAuthContext'
// import React, { useState } from 'react';


export default function Home() {

  //   const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']); // Initial items in the first list
  //   const [movedItems, setMovedItems] = useState([]); // Items that have been moved to the second list

  //   const moveItem = (item) => {
  //     setItems(items.filter(i => i !== item)); // Remove clicked item from the first list
  //     setMovedItems([...movedItems, item]); // Add clicked item to the second list
  // };

    const { user } = useAuthContext()
    const { documents: needs, error} = useCollection(
        "needs",
        ["uid", '==', user.uid],
        ["createdAt", "desc"]
    )
    

    return (
        <div className="container">
            {error && <p>{error}</p>}
        {needs && <ItemList needs={needs} />}
        {needs && <GotList needs={needs} />}
        </div>
    );
}
