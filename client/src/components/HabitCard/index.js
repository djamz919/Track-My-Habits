import React from 'react';
import { Link } from 'react-router-dom';

const HabitCard = (props) => {
    return (
        <section className='habit-card'>
            <h3 className='habit-title'>{props.habitText}</h3>
            <div className='habit-created'>{props.createdAt}</div>
            <div className='habit-days'>{props.days}</div>
        </section>
    )
}

export default HabitCard;