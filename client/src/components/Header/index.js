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
                <h1>Track My Habits</h1>
                <nav className="text-center">
                </nav>
            </div>
            {Auth.loggedIn() ? (
                <>
                    <div className='header-options'>
                        {/* <h5>You're logged in</h5> */}
                        <Link to="/login" onClick={logout}>Logout</Link>
                    </div>
                </>
            ) : (
                <>
                    <div className='header-options'>
                        {/* <h5>You're logged out</h5> */}
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </div>
                </>
            )}
        </header >
    );
};



export default Header;