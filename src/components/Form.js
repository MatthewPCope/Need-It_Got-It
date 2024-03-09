import { useState } from "react"
import {db} from '../firebase/config'
import { collection, addDoc } from "firebase/firestore"
import { useAuthContext } from "../hooks/useAuthContext"

export default function Form() {

    const [ newItem, setNewItem] = useState('')
    const { user } = useAuthContext()

    const submitHandler = async (e) => {
        e.preventDefault()

        await addDoc(collection(db, 'needs'), {
            name: newItem,
            uid: user.uid
        })
        setNewItem('')
    }

    return (
        <>
            <form onSubmit={submitHandler} className="">
                <div className="form-group">
                    <label className='form-label text-center'>
                        What do you Need?
                        <input type="text"
                        required
                        className="form-control"
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}/>
                    </label>
                    <button className="">Add</button>
                </div>
            </form>
        </>
    )
}
