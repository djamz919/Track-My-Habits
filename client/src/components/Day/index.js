import React from 'react';

const Day = ({ days }) => {
    if (!days.length) {
        return <h3>No Logs Yet</h3>;
    }

    function displayDays() {
        console.log(days);
        console.log(days[0].status);
    }

    return (
        <div>
            <button className='habit-button' onClick={displayDays}>
                Display Days in Day
            </button>
            {days && days.map(day => (
                <div id={'day' + day.day} className='day'>
                    <h4 className='habit-day'>Day: {day.day}</h4>
                    {day.status && (<p className='habit-question'>Congrats! You did your habit!</p>)}
                    {!day.status && (<p className='habit-question'>Oh no! You didn't do your habit!</p>)}
                    <p className='habit-log'>Log: {day.log}</p>
                </div>
            ))}

        </div>

    )
}

export default Day;