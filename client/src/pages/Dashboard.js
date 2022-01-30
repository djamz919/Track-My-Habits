import React from 'react';
import HabitTracker from '../components/HabitTracker';
import HabitOptions from '../components/HabitOptions';
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_HABIT, QUERY_HABITS, QUERY_ME, ALL_USERS} from '../utils/queries';

import Auth from '../utils/auth';
const Dashboard = () => {

    const { loading, data } = useQuery(ALL_USERS);
    const { data: userData } = useQuery(ALL_USERS);


const loggedIn = Auth.loggedIn();


    //replace with habit object passed in through props?
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
       
        console.log(data)
    }

    return (
        <main className='dashboard'>
            {habitInfo.map((habitInfo) => (
                <section className='user-habit' key={habitInfo.id}>
                    <HabitOptions UpdateHabit={UpdateHabit} />
                    <HabitTracker
                        habitText={habitInfo.habitText}
                        createdAt={habitInfo.createdAt}
                        username={habitInfo.username}
                        days={habitInfo.days}
                    />
                    <button className='back-button' onClick={UpdateHabit}>
                    Last Week
                </button>
                </section>
            ))}
        </main>
    )
}

export default Dashboard;