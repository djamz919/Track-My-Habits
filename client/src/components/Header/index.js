import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="nav-container">
                <Link to="/">
                    <h1>Track My Habits</h1>
                </Link>
                <nav className="text-center">
                </nav>
            </div>
        </header >
    );
};



export default Header;