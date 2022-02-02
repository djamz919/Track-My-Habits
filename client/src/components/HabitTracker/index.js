import { React } from 'react';
import Day from '../Day';
import DayForm from '../DayForm';

const HabitTracker = ({ id, habitText, createdAt, daysCount, days }) => {

    const date = createdAt.split(' ')[0] + ' ' + createdAt.split(' ')[1] + ' ' + createdAt.split(' ')[2];

    return (
        <div className='something'>
            <section className='habit-card' key={id}>
                <div className='habit-options'>
                    <div className='habit-info'>
                        <h2 className='habit-title'>Habit: {habitText}</h2>
                        <div className='habit-created'>Habit Start Date: {date} </div>

                    </div>
                </div>
                <DayForm habitId={id} daysCount={daysCount}></DayForm>
                <div className='habit-calendar'>
                    <Day days={days} habit={habitText}></Day>
                </div>
            </section>
        </div>
    )
}

export default HabitTracker;