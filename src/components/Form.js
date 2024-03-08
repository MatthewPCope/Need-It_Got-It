import { useState } from "react"

export default function Form() {

    const [ newItem, setNewItem] = useState('')

    return (
        <>
            <form>
                <div>
                    <label>
                        <input type="text" />
                    </label>
                </div>
            </form>
        </>
    )
}
