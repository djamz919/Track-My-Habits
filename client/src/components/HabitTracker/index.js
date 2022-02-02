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
                    <DayForm habitId={habit._id} daysCount={habit.daysCount}></DayForm>
                    {habit.daysCount >= 21 && (
                        <div>
                            <h4>Congrats! You've tracked your habit for 21 days!</h4>
                        </div>
                    )}
                    <div className='habit-calendar'>
                            <Day days={habit.days} habit={habit.habitText}></Day>
                    </div>
                </section>
            ))}
        </div>
    )
}

export default HabitTracker;