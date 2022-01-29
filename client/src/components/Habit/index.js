import React from 'react';
import { Link } from 'react-router-dom';

const Habits = ({ habits }) => {
    // if (!habits.length) {
        return (
            <div className='no-habits'>
                <h3 className='page-title'>No Habits Yet!</h3>
                <Link to={`/single-habit/`}>
                Click here to start one!
                </Link>
            </div>
        );
    // }
    // return (
    //     <div className='habit'>
    //         {/* <h3>{habits.text}</h3>
    //         {habits.map()} */}
    //     </div>
    // )
}

export default Habits;