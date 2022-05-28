import React from 'react'
import { Link } from 'gatsby'
import './FootNav.css'

export default function FootNav() {
    return (
        <>
            <div className='container'>
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
            </div>
        </>
    )
}
