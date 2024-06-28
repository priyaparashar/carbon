import React from 'react'
import { Link } from 'react-router-dom'

function Links() {
    return (
        <><h1>Practice Components</h1>
            <Link to="create-account" >Create Account</Link>
            <br />
            <Link to="users" >Users list</Link>
        </>)
}

export default Links