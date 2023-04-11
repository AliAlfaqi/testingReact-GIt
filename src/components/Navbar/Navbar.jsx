import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"


const Navbar = () => {
    return (
        <nav className='d-flex justify-content-between'>
            <div className="left-nav d-flex gap-5">
                <h1 className='m-0'>Logo</h1>
                <ul className='list-unstyled d-flex m-0 align-items-center'>
                    <li className='p-2'><Link to='home'>Home</Link></li>
                    <li className='p-2'><Link to='movies'>Movies</Link></li>
                    <li className='p-2'><Link to='series'>Series</Link></li>
                    <li className='p-2'><Link to='people'>People</Link></li>
                </ul>
            </div>
            <div className="right-nav d-flex">
                <div className="social-media d-flex align-items-center">
                    <i className='fab fa-facebook mx-1'></i>
                    <i className='fab fa-instagram mx-1'></i>
                    <i className='fab fa-twitter mx-1'></i>
                    <i className='fab fa-youtube mx-1'></i>
                </div>
                <ul className='list-unstyled d-flex m-0 align-items-center'>
                    <li className=''><Link to='login'>Login</Link></li>
                    <li className=''><Link to='/'>Register</Link></li>
                    <li className=''><span>Logout</span></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar