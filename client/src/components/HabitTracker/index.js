import { React } from 'react';
import Day from '../Day';
import DayForm from '../DayForm';

const HabitTracker = ({ habits }) => {

    return (
        <div className='something'>
            {habits && habits.map(habit => (
                <section className='habit-card' key={habit._id}>
                    <div className='habit-options'>
                        <div className='habit-info'>
                            <h3 className='habit-title'>Habit: {habit.habitText}</h3>
                            <div className='habit-created'>Habit Start Date: {habit.createdAt} </div>

                        </div>
                    </div>
                    {habit.daysCount < 21 && (<DayForm habitId={habit._id} daysCount={habit.daysCount}></DayForm>)}
                    <div className='habit-calendar'>
                            <Day days={habit.days} habit={habit.habitText}></Day>
                    </div>
                </section>
            ))}
        </div>
    )
}

export default HabitTracker;