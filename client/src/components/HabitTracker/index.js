import { React, useState } from 'react';
import Day from '../Day';

const HabitTracker = (props) => {

    const dayInfo = [
        // {
        //     id: 1
        // },
        // {
        //     id: 2
        // },
        // {
        //     id: 3
        // },
        // {
        //     id: 4
        // },
        // {
        //     id: 5
        // },
        // {
        //     id: 6
        // },
        // {
        //     id: 7
        // },
        // {
        //     id: 8
        // },
        // {
        //     id: 9
        // },
        // {
        //     id: 10
        // },
        // {
        //     id: 11
        // },
        // {
        //     id: 12
        // },
        // {
        //     id: 13
        // },
        // {
        //     id: 14
        // },
        // {
        //     id: 15
        // },
        // {
        //     id: 16
        // },
        // {
        //     id: 17
        // },
        // {
        //     id: 18
        // },
        // {
        //     id: 19
        // },
        // {
        //     id: 20
        // },
        // {
        //     id: 21
        // }
    ]

        const [count, setCount] = useState(1);

        function decrementCount() {
            setCount(previousCount => {
                if(previousCount > 1)
                {
                    return(previousCount - 1 )
                }
                return previousCount;
            })
        }

        function incrementCount() {
            setCount(previousCount => {
                if(previousCount < 3)
                {
                    return(previousCount + 1 )
                }
                return previousCount;
            })
        }

    return (
        <section className='habit-card'>
            <div className='habit-options'>
                <div className='habit-info'>
                    <h3 className='habit-title'>Current Habit: {props.habitText}</h3>
                    <div className='habit-created'>Habit Start Date: {props.days}</div>
                   
                </div>
                <div className='button-div'>
                    <button className='habit-button' onClick={props.UpdateHabit}>Update Habit</button>
                
                </div>
            </div>
            <div className='habit-calendar'>
                <div className='tracked-days'>
                    {dayInfo.map((dayInfo) => (
                        <div key={dayInfo.id}>
                            <Day habitDay={dayInfo.id}></Day>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HabitTracker;