import { React, useState } from 'react';
import HabitTracker from '../components/HabitTracker';
import HabitOptions from '../components/HabitOptions';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_HABITS, QUERY_ME } from '../utils/queries';


const Dashboard = () => {
    // const { loading, data } = useQuery(QUERY_HABITS); //Pulls all habits in the database instead of just 
    const { data: userData } = useQuery(QUERY_ME);
    const habitInfo = userData?.me.habits || [];

    // const habitInfo = [
    //     {
    //         id: 1,
    //         habitText: "Test habit",
    //         createdAt: "1/29/2022",
    //         username: "Testuser",
    //         days: "1"
    //     }
    // ]

    function UpdateHabit() {
        // console.log(loading);
        // console.log(data);
        console.log(habitInfo);
        console.log(userData);
    }


    return (
        <main className='dashboard'>
            {Auth.loggedIn() ? (
                <>
                    {habitInfo.length > 0 && (
                        <div>You have some habits
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
                        </div>)}
                    {habitInfo.length == 0 && (<p>You don't have some habits</p>)}
                    <button className='habit-button' onClick={UpdateHabit}>
                        Update habit information
                    </button>
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