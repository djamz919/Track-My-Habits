import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_HABIT } from '../../utils/mutations';

import Auth from '../../utils/auth';

const NewHabitForm = (props) => {
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

    // submit form
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

    return (
        <main className='card'>
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
        </main>
    );
};

export default NewHabitForm;