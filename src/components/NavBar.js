import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import Form from '../components/Form'

export default function Navbar() {

    const { logout } = useLogout()

return (
    <nav>
    <h1>Need It - Got It</h1>
        <div className='navform'>
            <Form  />
        </div>
        <div className='links'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li onClick={logout}>Logout</li>
            </ul>
        </div>
    </nav>
)
}