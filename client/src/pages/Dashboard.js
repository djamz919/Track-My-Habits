import { React, useState } from 'react';
import HabitTracker from '../components/HabitTracker';
import Auth from '../utils/auth';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME, QUERY_HABITS } from '../utils/queries';
import { ADD_HABIT } from '../utils/mutations';
import { Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

const Dashboard = () => {
    const { data: userData } = useQuery(QUERY_ME);
    const habitInfo = userData?.me.habits || []; 

    const [habitText, setHabitText] = useState('');

    const [addHabit, { error }] = useMutation(ADD_HABIT, {
        update(cache, { data: { addHabit } }) {

            // update me object's cache
            const { me } = cache.readQuery({ query: QUERY_ME });
            cache.writeQuery({
                query: QUERY_ME,
                data: { me: { ...me, habits: [...me.habits, addHabit] } },
            });
        },
    });

    const handleChange = (event) => {
        if (event.target.value.length <= 280) {
            setHabitText(event.target.value);
        }
    };

    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            await addHabit({
                variables: { habitText }
            });
            setHabitText('');
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <main>
            {Auth.loggedIn() ? (
                <>
                    {habitInfo.length > 0 && (
                        <div className='dashboard'>
                            <div>
                                <section className='user-habit' >
                                    <HabitTracker habits={habitInfo} />
                                </section>
                            </div>
                        </div>)}

                    {habitInfo.length === 0 && (
                        <div className='dashboard'>
                            <div className='card-body'>
                                <h4 className='wrong'>You don't have any habits yet!</h4>
                                <form onSubmit={handleFormSubmit}>
                                    <input
                                        className="form-input"
                                        placeholder="Enter your new habit here!"
                                        name="habit"
                                        type="habit"
                                        id="habit"
                                        value={habitText}
                                        onChange={handleChange}
                                    />
                                    <button className="button" type="submit">
                                        Get Started!
                                    </button>
                                </form>

                                {/* {error && <div>Error</div>} */}
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <>
                    <div className='dashboard animate'>
                        <section className='greeting-message'>
                            <div>
                                <h2>Welcome To 21 Days!</h2>
                                <p className='greeting-paragraph'>
                                    21 Days is an app with a simple premise: guiding you along a journey of 21 days to help you form or break a habit.
                                    Whether your goal is to exercise more, stop smoking, or learn a new skill,
                                    this app gives you the tools to hold yourself accountable for those crucial first 21 days.
                                    <p className='page-stuff'>Create your account now to start building a habit that could last a lifetime.</p>
                                </p>
                            </div>
                        </section>
                    </div>
                </>
            )}
        </main>
    )
}

export default Dashboard;