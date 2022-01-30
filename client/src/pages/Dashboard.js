import React from 'react';
import HabitTracker from '../components/HabitTracker';
import HabitOptions from '../components/HabitOptions';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

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
            {Auth.loggedIn() ? (
                <>
                    {habitInfo.map((habitInfo) => (
                        <section className='user-habit' key={habitInfo.id}>
                            <HabitOptions UpdateHabit={UpdateHabit} />
                            <HabitTracker
                                habitText={habitInfo.habitText}
                                createdAt={habitInfo.createdAt}
                                username={habitInfo.username}
                                days={habitInfo.days}
                            />
                        </section>
                    ))}
                </>
            ) : (
                <>
                    <p>Log in to start tracking your habits!</p>
                </>
            )}
        </main>
    )
}

export default Dashboard;