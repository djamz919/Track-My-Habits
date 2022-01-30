import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Day from '../Day';

const HabitTracker = (props) => {

    const dayInfo = [
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        },
        {
            id: 4
        },
        {
            id: 5
        },
        {
            id: 6
        },
        {
            id: 7
        },
    ]

        const [count, setCount] = useState(1);

        function decrementCount() {
            setCount(previousCount => {
                if(previousCount > 1)
                {
                    return(previousCount - 1 )
                }
                return previousCount;
            })
        }

        function incrementCount() {
            setCount(previousCount => {
                if(previousCount < 3)
                {
                    return(previousCount + 1 )
                }
                return previousCount;
            })
        }

    return (
        <section className='habit-card'>
            <div className='habit-options'>
                <div className='habit-info'>
                    <h3 className='habit-title'>Current Habit: {props.habitText}</h3>
                    <div className='habit-created'>Habit Start Date: {props.createdAt}</div>
                    <div className='habit-days'>Current Streak: {props.days} day(s)</div>
                </div>
                <div className='button-div'>
                    <button className='habit-button' onClick={props.UpdateHabit}>
                        Update habit information
                    </button>
                </div>
            </div>
            <div className='week-number'>Week {count}</div>
            <div className='habit-calendar'>
                <div className='week'>
                    {dayInfo.map((dayInfo) => (
                        <div id={'day' + dayInfo.id} className='day' key={dayInfo.id}>
                            <Day habitDay={dayInfo.id}></Day>
                        </div>
                    ))}
                </div>
            </div>
            <div className='nav-buttons'>
                <button className='back-button' onClick={decrementCount}>
                    Last Week
                </button>
                <button className='next-button' onClick={incrementCount}>
                    Next Week
                </button>
            </div>
        </section>
    )
}

export default HabitTracker;