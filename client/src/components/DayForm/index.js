import { React, useState } from 'react';

import Auth from '../utils/auth';
import { useQuery, useMutation } from '@apollo/client';
import { ADD_DAY } from '../utils/mutations';




const DayCard = () => {



    const [logBody, updateLog] = useState('');
    const [newDay, {err}] = useMutation(ADD_DAY);
    
    const daySubmit = async (event) =>{
        event.preventDefault();
        updateLog(event.target.value);
    try {
        await newDay({
            variable:{logBody}
        });
        updateLog('')
    }
    catch(e) {
        console.log(e);
    }
    };


    


return(
<form onSubmit={daySubmit}>
    <input
        className="form-input"
        placeholder="Enter your new habit here!"
        name="habit"
        type="habit"
        id="habit"
        value={logBody}
        onChange={handleFormSubmit}
    />   <button className="button" type="submit">
        Get Started!
    </button>
</form>

)

}

export default DayCard;