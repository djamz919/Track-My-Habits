import React from 'react';
import HabitTracker from '../components/HabitTracker';
import HabitOptions from '../components/HabitOptions';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_ME_BASIC } from '../utils/queries';


const Dashboard = () => {
    const { loading, data } = useQuery(QUERY_ME); //Pulls all habits in the database
    const { data: userData} = useQuery(QUERY_ME);
    const habitInfo = data?.habits || [];

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
        console.log(data);
        console.log(habitInfo);
        console.log(userData);
    }

    return (
        <main className='dashboard'>
            {Auth.loggedIn() ? (
                <>
                    <button className='habit-button' onClick={UpdateHabit}>
                        Update habit information
                    </button>
                    {/* {habitInfo.map((habitInfo) => (
                        <section className='user-habit' key={habitInfo.id}>
                            <HabitOptions UpdateHabit={UpdateHabit} />
                            <HabitTracker
                                habitText={habitInfo.habitText}
                                createdAt={habitInfo.createdAt}
                                username={habitInfo.username}
                                days={habitInfo.days}
                            />
                        </section>
                    ))} */}
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