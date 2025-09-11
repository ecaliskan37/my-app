import React from 'react';
import { Link } from 'react-router-dom';
export const Navbar = () => {
    return (
        <navbar>
            <Link to='/'>home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/contact'>contact</Link>
        </navbar>
    )
}