<<<<<<< HEAD

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
         Habit time!!!
        </p>
      
      </header>
    </div>
=======
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className='flex-column justify-flex-start min-100-vh'>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
>>>>>>> 9c83a2ca61f66c29105d05a5de5173fadebdbea1
  );
}

export default App;
