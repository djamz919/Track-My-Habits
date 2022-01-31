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
                    <p>You're logged in</p>
                    <a href="/" onClick={logout}>
                        Logout
                    </a>
                </>
            ) : (
                <>
                    <p>You're logged out</p>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </>
            )}
        </header >
    );
};



export default Header;