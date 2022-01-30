import React from 'react';

const Day = () => {
    return (
        <div>
            <h4 className='habit-day'>Day: </h4>
            <h5 className='habit-question'>Did you meet your goal today?</h5>
            <div className='answer-buttons'>
                <button className='yes'>Yes</button>
                <button className='no'>No</button>
            </div>
        </div>
    )
}

export default Day;