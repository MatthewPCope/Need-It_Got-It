import { useState } from "react"
import {db} from '../firebase/config'
import { collection, addDoc } from "firebase/firestore"
import { useAuthContext } from "../hooks/useAuthContext"

export default function Form() {

    const [ newItem, setNewItem] = useState('')
    const { user } = useAuthContext()

    const submitHandler = (e) => {
        e.preventDefault()

    }

    return (
        <>
            <form onSubmit={submitHandler} className="form">
                <div className="form-group">
                    <labe className='form-label'>
                        <span>Enter Item:</span>
                        <input type="text"
                        required
                        className="form-control"/>
                    </labe>
                </div>
            </form>
        </>
    )
}
