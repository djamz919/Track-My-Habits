import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Day from '../Day';
//import day data from habit

const HabitTracker = (props) => {
//use useState, and hooks to pass in data
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
//use the days.map below to render all of the days in each habit
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
            <div className='week-number'>Week </div>
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
                {/* <button className='back-button' onClick={UpdateHabit}>
                    Last Week
                </button>
                <button className='next-button' onClick={UpdateHabit}>
                    Next Week
                </button> */}
            </div>
        </section>
    )
}

export default HabitTracker;