import React from 'react';
import HabitCard from '../components/HabitCard';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const habits = [
        {
            id: 1,
            habitText: "Test habit",
            createdAt: "2:00 PM",
            username: "Testuser",
            days: "1"
        },
        {
            id: 2,
            habitText: "Test habit",
            createdAt: "12:00 PM",
            username: "Testuser",
            days: "1"
        },
        {
            id: 3,
            habitText: "Test habit",
            createdAt: "12:00 PM",
            username: "Testuser",
            days: "1"
        }
    ]


    function GoToHabit() {
        console.log("Clicked!");
    }

    return (
        <main className='dashboard'>
            <h1 className='page-title'>Dashboard</h1>
            <section className='user-habits'>
                {habits.length > 0 && habits.map((habits) => (
                    <HabitCard
                        key={habits.id}
                        NavigateToHabit = {GoToHabit}
                        habitText={habits.habitText}
                        createdAt={habits.createdAt}
                        username={habits.username}
                        days={habits.days}
                    />
                ))}
            </section>
            <section className='new-habit-button'>
                    <button>Click here to start a new habit!</button>
            </section>
            <section className='habit-info'>

            </section>
        </main>
    )
}

export default Dashboard;