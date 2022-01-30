import React from 'react';
import { ADD_DAY } from '../../utils/mutations';

const Day = (props) => {
    return (
        <div id={'day' + props.habitDay} className='day'>
            <h4 className='habit-day'>Day: {props.habitDay}</h4>
            <h5 className='habit-question'>Did you meet your goal today?</h5>
            <div className='answer-buttons'>
                <button className='yes'>Yes</button>
                <button className='no'>No</button>
            </div>
        </div>
    )
}

export default Day;