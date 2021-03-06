import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_DAY } from '../../utils/mutations';

const DayForm = ({ habitId, daysCount }) => {
    const [formState, setFormState] = useState({
        habitId: '',
        day: '',
        log: '',
        status: ''
    });

    const [count, setCount] = useState(daysCount);
    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };

    const dayDisplay = count + 1;

    const [addDay, { error }] = useMutation(ADD_DAY);

    // update state based on form input changes
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

        formState.day = count;
        formState.habitId = habitId;
        formState.status = isChecked;

        console.log(formState);

        try {
            const { data } = await addDay({
                variables: { ...formState },
            });
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className='day-form'>
            {count >= 21 && (
                <div>
                    <h4 className="congrats">Congrats! You've tracked your habit for 21 days!</h4>
                </div>
            )}
            <form
                className="add-day-form flex-row justify-center justify-space-between-md align-stretch"
                onSubmit={handleFormSubmit}
            >
                <h3>
                    Track your progress for Day {dayDisplay}:
                </h3>
                <textarea
                    className="form-input"
                    placeholder="Share your thoughts..."
                    name="log"
                    type="log"
                    id="log"
                    value={formState.log}
                    onChange={handleChange}
                />
                <div className="form-input">
                    <input
                        type="checkbox"
                        id="status"
                        name="status"
                        checked={isChecked}
                        onChange={handleOnChange}
                    />
                    <span className="checkbox">Check if you did it!</span>
                </div>
                <button className="button" type="submit" onClick={() => setCount(count + 1)}>
                    Submit
                </button>

            </form>

            {error && <div>Something went wrong...</div>}
        </div >
    );
};

export default DayForm;
