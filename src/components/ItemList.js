import { useState } from "react";
// import { db } from "../firebase/config";
// import { doc, deleteDoc } from "firebase/firestore";

export default function ItemList({needs}) {

    const [wants, setWants] = useState([])
    const [movedNeeds, setMovedNeeds] = useState([])

    // const handleClick = async (id) => {
    //     await deleteDoc(doc(db, 'needs', id))
    // }

    const moveNeed = (need) => {
        setWants(wants.filter(i => i !== need)); // Remove clicked item from the first list
        setMovedNeeds([...movedNeeds, need]); // Add clicked item to the second list
    };


    
    return (
        <div className="form">
            <h1 className="text-center">Need It</h1>
            <div className="table-scroll">
                <ul>
                    {needs.map(need => (
                        <li className="list" key={need.id} onClick={() => moveNeed(need.id)}>{need.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
