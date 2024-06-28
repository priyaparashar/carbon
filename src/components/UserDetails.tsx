import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { User } from "./Users";


export default function UserDetails() {
    const [user, setUser] = useState<User>()
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://reqres.in/api/users/${id}`).then((res) => {
            return res.json();
        }).then((res) => {
            console.log(res);

            setUser(res.data)
        }).catch((error) => { console.log(error) })
    }, [id])
    return (

        <div>User {id} ka detail
            <div>{user?.email}</div>
            <img src={user?.avatar} />
        </div>
    )
}
