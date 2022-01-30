import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HabitOptions = (props) => {
    return (
        <button className='habit-card habit-button' onClick={props.UpdateHabit}>
            Click here to enter habit info.
        </button>
    )
}

export default HabitOptions;