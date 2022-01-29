import React from 'react';
import { Link } from 'react-router-dom';

const Habits = () => {

    const habits = [
        {
            habitText: "Test habit",
            createdAt: "2:00 PM",
            username: "Testuser",
            days: "1"
        }
    ]

     if (!habits.length) {
        return (
            <div className='no-habits'>
                <h3 className='page-title'>No Habits Yet!</h3>
                <Link to={`/single-habit/`}>
                Click here to start one!
                </Link>
            </div>
        );
     }
    return (
        <div className='habit'>
            <h3>{habits.habitText}</h3>
            {habits.map()}
        </div>
    )
}

export default Habits;