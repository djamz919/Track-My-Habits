import React from 'react';

const Day = ({ days, habit }) => {

    return (
        <div className='tracked-days'>
            {days && days.map(day => (
                <div>
                    {day.status && (
                        <div key={day._id} className='day day-success'>
                            <div className='day-card'>
                                <h4 className='habit-day'>Day {day.day}</h4>
                            </div>
                            <div className='day-content'>
                                <p className='text-align-center'>Congrats! You did it!</p>
                                {day.log && (<p className='habit-log'>Log: <span className='logText'>{day.log} </span></p>)}
                            </div>
                        </div>
                    )}
                    {!day.status && (
                        <div key={day._id} className='day day-fail'>
                            <div className='day-card'>
                                <h4 className='habit-day'>Day {day.day}</h4>
                            </div>
                            <div className='day-content'>
                                <p className='text-align-center'>Oh no! You can try again tomorrow!</p>
                                {day.log && (<p className='habit-log'>Log: <span className='logText'>{day.log} </span></p>)}
                            </div>
                        </div>
                    )}
                </div>
            ))}

        </div>

    )
}

export default Day;