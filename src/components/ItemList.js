import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

export default function ItemList({needs}) {

    const handleClick = async (id) => {
        await deleteDoc(doc(db, 'needs', id))
    }
    
    return (
        <div className="form">
            <h1 className="text-center">Need It</h1>
            <div className="table-scroll">
                <ul>
                    {needs.map(need => (
                        <li className="list" key={need.id} >{need.name}<button onClick={() => handleClick(need.id)}>Got it</button></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
