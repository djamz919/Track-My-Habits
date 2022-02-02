import React from 'react';

const Day = ({ days, habit }) => {
    if (!days.length) {
        return <h3>No Logs Yet</h3>;
    }

    return (
        <div className='tracked-days'>
            {days && days.map(day => (
                <div key={day._id} className='day'>
                    <div className='day-card'>
                        <h4 className='habit-day'>Day {day.day}</h4>
                    </div>
                    <div className='day-content'>
                        {day.status && (<p className='habit-question'>Congrats! You did it!</p>)}
                        {!day.status && (<p className='habit-question'>Oh no! You can try again tomorrow!</p>)}
                        {day.log && (<p className='habit-log'>Log: <span className='logText'>{day.log} </span></p>)}
                    </div>

                </div>
            ))}

        </div>

    )
}

export default Day;