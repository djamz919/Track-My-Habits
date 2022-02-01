import { React, useState } from 'react';
import HabitTracker from '../components/HabitTracker';
import Auth from '../utils/auth';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME, QUERY_HABITS } from '../utils/queries';
import { ADD_HABIT } from '../utils/mutations';


const Dashboard = () => {
    // const { loading, data } = useQuery(QUERY_HABITS); //Pulls all habits in the database instead of just 
    const { data: userData } = useQuery(QUERY_ME);
    const habitInfo = userData?.me.habits || []; // seed a user to prevent this from erroring when no users

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

        //   console.log(habitInfo);
        // console.log(userData);
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
        <main className='dashboard'>
            {Auth.loggedIn() ? (
                <>
                    {habitInfo.length > 0 && (
                        <div>
                            <section className='user-habit' >
                                <HabitTracker habits={habitInfo} />
                            </section>
                        </div>)}

                    {habitInfo.length === 0 && (<div className='card-body'>
                        <h2>You don't have any habits yet!</h2>
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
                    )}
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