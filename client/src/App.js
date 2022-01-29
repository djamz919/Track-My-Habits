import React from 'react';

import { ApolloProvider, 
  ApolloClient, 
  InMemoryCache, 
  createHttpLink } 
  from '@apollo/client';

import Header from './components/Header';
import Footer from './components/Footer';
import {useQuery} from '@apollo/client';
import {HABITS, ALL_USERS} from './utils/queries'
import { BrowserRouter as Router, Route, Routes, Switch, Link } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import SingleHabit from './pages/HabitPage';

const httpLink = createHttpLink({
  uri: '/graphql'
  // uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <div className='flex-column justify-flex-start min-100-vh'>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/single-habit' element={<SingleHabit />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
