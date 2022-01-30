import React from 'react';
import HabitTracker from '../components/HabitTracker';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const habitInfo = [
        {
            id: 1,
            habitText: "Test habit",
            createdAt: "1/29/2022",
            username: "Testuser",
            days: "1"
        }
    ]

    function UpdateHabit() {
        console.log("Clicked!");
    }

    return (
        <main className='dashboard'>
            {habitInfo.map((habitInfo) => (
                <section className='user-habit' key={habitInfo.id}>
                    <HabitTracker
                        UpdateHabit={UpdateHabit}
                        habitText={habitInfo.habitText}
                        createdAt={habitInfo.createdAt}
                        username={habitInfo.username}
                        days={habitInfo.days}
                    />
                </section>
            ))}
        </main>
    )
}

export default Dashboard;