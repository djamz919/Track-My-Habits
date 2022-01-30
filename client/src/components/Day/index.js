import React from 'react';

const Day = () => {
    return (
        <div>
            <h4 className='habit-question'>Did you meet your goal today?</h4>
            <div className='answer-buttons'>
                <button className='yes'>Yes</button>
                <button className='no'>No</button>
            </div>
        </div>
    )
}

export default Day;