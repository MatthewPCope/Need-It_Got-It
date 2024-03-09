import  { useCollection } from '../hooks/useCollection'
import ItemList from '../components/ItemList'

import { useAuthContext } from '../hooks/useAuthContext'



export default function Home() {

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
        {needs && <ItemList needs={needs} />}
        </div>
    );
}
