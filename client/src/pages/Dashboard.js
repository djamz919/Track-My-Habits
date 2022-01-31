import { React, useState } from 'react';
import HabitTracker from '../components/HabitTracker';
import HabitOptions from '../components/HabitOptions';
// import NewHabitForm from '../components/NewHabitForm';
import Auth from '../utils/auth';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_HABITS, QUERY_ME } from '../utils/queries';
import { ADD_HABIT } from '../utils/mutations';

const Dashboard = () => {
    // const { loading, data } = useQuery(QUERY_HABITS); //Pulls all habits in the database instead of just 
    const { data: userData } = useQuery(QUERY_ME);
    const habitInfo = userData?.me.habits || [];



    const [formState, setFormState] = useState({
        habitText: ''
    })
    
    const [addHabit, { error }] = useMutation(ADD_HABIT);
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        })
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addHabit({
                variables: { ...formState },
            });
            
            Auth.addHabit(data.addHabit.token);
        } catch (e) {
            console.error(e);
        }
    };

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
                    {habitInfo.length == 0 && (<p>You don't have any habits yet!</p>)}
                    <div className='card-body'>
                <h5>You don't have any habits yet!</h5>
                <form onSubmit={handleFormSubmit}>
                    <input
                        className="form-input"
                        placeholder="Enter your new habit here!"
                        name="habit"
                        type="habit"
                        id="habit"
                        value={formState.habitText}
                        onChange={handleChange}
                    />
                    <button className="button" type="submit">
                        Get Started!
                    </button>
                </form>
                {error && <div>Error</div>}
            </div>
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