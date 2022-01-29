import React from 'react';
import Habit from '../components/Habit';
import { Link } from 'react-router-dom';

const Dashboard = () => {
 return (
     <main>
         <h1 className='page-title'>
             Dashboard
         </h1>
         <section className='user-habits'>
            <Habit></Habit>
         </section>
     </main>
 )
}

export default Dashboard;