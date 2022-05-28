import React from 'react'
import { Link } from 'gatsby'
import './Navbar.css'

export default function Navbar() {
    return (
        <>
            <div className='logo'>
                <h3>Medi<span>Care+</span></h3>
            </div>
            <nav>
                <div className='menu'>
                    <Link to="/">Home</Link>
                    <Link to="/About1">About</Link>
                    <Link to="/Service">Services</Link>
                    <Link to="/News">News</Link>
                </div>
            </nav>
            <div>
                <button className="contact-button">Contact</button>
            </div>
        </>
    )
}
