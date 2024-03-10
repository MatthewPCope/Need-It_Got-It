import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

export default function GotList({needs}) {

    const handleClick = async (id) => {
        await deleteDoc(doc(db, 'needs', id))
    }
    
    return (
        <div className="form">
            <h1 className="text-center">Got It</h1>
            <div className="table-scroll">
                <ul>
                    {needs.map(need => (
                        <li className="list" key={need.id} onClick={() => handleClick(need.id)}>{need.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}