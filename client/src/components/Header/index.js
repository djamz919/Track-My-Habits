import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <header className="header">
            <div className="nav-container">
                <Link to="/">
                    <div className='header-box'>
                        <h1>Track My Habits</h1>
                    </div>
                </Link>
                <nav className="text-center">
                </nav>
            </div>
            {Auth.loggedIn() ? (
                <>
                    <div className='header-options'>
                        <a href="/" onClick={logout}>
                            Logout
                        </a>
                    </div>
                </>
            ) : (
                <>
                    <div className='header-options'>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </div>
                </>
            )}
        </header >
    );
};



export default Header;