import React from 'react';
import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <ul>
      {task('first item')}
      {task('second item')}
      {task('third item')}
    </ul>
  );
}

export default App;
