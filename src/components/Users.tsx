import React, { useContext, useEffect, useReducer, useState } from 'react'
import { ThemeContext, reducer } from '../components/Home'
import { Link } from 'react-router-dom'

export interface User {
    avatar: string
    email: string
    first_name: string
    id: number
    last_name: string
}


function Users() {
    const [state, dispatch] = useReducer(reducer, { age: 10 })
    const title = useContext(ThemeContext)
    const [data, setData] = useState<User[]>()
    const increaseAge = () => { dispatch({ type: 'increment' }) }
    const decreaseAge = () => { dispatch({ type: 'decrement' }) }
    // const handleParent = () => { onChildClick(state.age) }

    useEffect(() => {
        fetch('https://reqres.in/api/users?page=2').then((res) => {
            return res.json();
        }).then((res) => {
            setData(res.data)
        }).catch((error) => { console.log(error) })
    }, [])

    return (
        <div className="App" data-testid="user-list">
            <h1>{title}-{state?.age}</h1>
            <button onClick={increaseAge} disabled={state.age === 5}>Click me</button>
            <button onClick={decreaseAge} disabled={state.age < 1} >decreaseAge</button>
            {/* <button onClick={handleParent}>Update Parent</button> */}
            <div className='flex'>
                {data?.map(item => {
                    return <Link className='card' key={item.id} to={`/user-details/${item.id}`}>
                        <img src={item.avatar} />
                        <p>{item.first_name} {item.last_name}</p></Link>
                })}
            </div>
        </div>
    );
}

export default Users