import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HabitCard = (props) => {
    return (
        <button className='habit-card' onClick={props.NavigateToHabit}>
            <h3 className='habit-title'>{props.habitText}</h3>
            <div className='habit-created'>{props.createdAt}</div>
            <div className='habit-days'>{props.days}</div>
        </button>
    )
}

export default HabitCard;