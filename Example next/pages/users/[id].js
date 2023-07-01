import {useRouter} from 'next/router'
import Maincontainer from '../../components/Maincontainer'

export default function ({user}) {
    const {query} = useRouter()

    return (
        <Maincontainer>
            some user id = {query.id}
            <div>
                User name {user.name}
            </div>
        </Maincontainer>
    )

}

export async function getServerSideProps({params}) {
    const respons = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await respons.json()
return {
    props: {user}
}
}