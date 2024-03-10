import  { useCollection } from '../hooks/useCollection'
import ItemList from '../components/ItemList'
import GotList from '../components/GotList'
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
        {needs && <GotList needs={needs} />}
        </div>
    );
}
