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
        <div>
            <form
                className="flex-row justify-center justify-space-between-md align-stretch"
                onSubmit={handleFormSubmit}
            >
                <input
                    className="form-input"
                    placeholder="Enter a log"
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
                    Check if you completed your habit today
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
