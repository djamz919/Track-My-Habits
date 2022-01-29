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
        }
    ]

    return (
        <section className='user-habits'>
            <h1 className='page-title'>Dashboard</h1>
            {habits.length > 0 && habits.map((habits) => (
                <HabitCard 
                key={habits.id}
                habitText={habits.habitText}
                createdAt={habits.createdAt}
                username={habits.username}
                days={habits.days}
                />
            ))}
        </section>
    )
}

export default Dashboard;