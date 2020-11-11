import React from 'react';
import logo from './logo.svg';
import './App.css';

const appointments = ['meeting', 'study', 'class', 'project'];

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <ul>
      {appointments.map(task)}
    </ul>
  );
}

export default App;
