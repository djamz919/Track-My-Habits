import { React } from 'react';
import Day from '../Day';
import DayForm from '../DayForm';

const HabitTracker = ({ habits }) => {

    if (!habits.length) {
        return <h3>No Habits Yet</h3>;
    }

    function displayHabit() {
        console.log(habits);
    }

    return (
        <div>
            <button className='habit-button' onClick={displayHabit}>
                Display Habit in HabitTracker
            </button>
            {habits && habits.map(habit => (
                <section className='habit-card' key={habit._id}>
                    <div className='habit-options'>
                        <div className='habit-info'>
                            <h3 className='habit-title'>Current Habit: {habit.habitText}</h3>
                            <div className='habit-created'>Habit Start Date: {habit.createdAt} </div>

                        </div>
                    </div>
                    <DayForm habitId={habit._id} daysCount={habit.daysCount}></DayForm>
                    <Day days={habit.days}></Day>
                    <div className='habit-calendar'>
                        <div className='tracked-days'>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    )
}

export default HabitTracker;