import React from 'react';

const Day = ({ days }) => {
    if (!days.length) {
        return <h3>No Logs Yet</h3>;
    }

    return (
        <div className='tracked-days'>
            {days && days.map(day => (
                    <div key={day._id} className='day'>
                        <h4 className='habit-day'>Day: {day.day}</h4>
                        {day.status && (<p className='habit-question'>Congrats! You did your habit!</p>)}
                        {!day.status && (<p className='habit-question'>Oh no! You didn't do your habit!</p>)}
                        {day.log && (<p className='habit-log'>Log: {day.log}</p>)}
                    </div>
            ))}

        </div>

    )
}

export default Day;