import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_HABIT } from '../../utils/mutations';

import Auth from '../../utils/auth';

const NewHabitForm = (props) => {
    const [formState, setFormState] = useState({
        habitText: '',
        username: 'Test',
        createdAt: Date.now(),
        habitComplete: false,
        days: 0
    })

    const [addHabit, { error }] = useMutation(ADD_HABIT);
    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(name);
        console.log(value);
        setFormState({
            ...formState,
            [name]: value
        })
    }

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            console.log({...formState});
            const { data } = await addHabit({
                variables: { ...formState },
            });
            console.log(data);
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
                        name="habitText"
                        type="text"
                        id="habitText"
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