import React from 'react';
import { ADD_DAY } from '../../utils/mutations';

const Day = (props) => {
    if (!props.length) {
        return <h3>No Habits Yet</h3>;
    }

    function displayDays() {
        console.log(props);
    }

    return (
        <div>
            <button className='habit-button' onClick={displayDays}>
                Display Days in Day
            </button>
            <div id={'day' + props.habitDay} className='day'>
                <h4 className='habit-day'>Day: {props.habitDay}</h4>
                <h5 className='habit-question'>Did you meet your goal today?</h5>
                <div className='answer-buttons'>
                    <button className='yes'>Yes</button>
                    <button className='no'>No</button>
                </div>
            </div>
        </div>

    )
}

export default Day;