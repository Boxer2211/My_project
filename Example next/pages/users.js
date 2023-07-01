import Link from "next/link";
import { useEffect, useState } from "react";
import Maincontainer from "../components/Maincontainer";


const Users = ({users}) => {

    
    return (
        <Maincontainer >
            <div className="navbar">
              
            </div>
            <h1>Page for users</h1>
                <ul>
                    {users.map( user => 
                        <li key={user.id}>
                            <Link href={`/users/${user.id}`}>
                                {user.name}
                            </Link>
                        </li>
                    )}
                </ul>
        </Maincontainer>
    )
};

export default Users;

export async function getStaticProps(context) {
        
        const respons = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await respons.json()

    return {
        props: {users}
    }
}
