import React from 'react';
import ReactDOM from 'react-dom';

import ToDoContainer from './components/TodoContainer';

import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <ToDoContainer />
  </React.StrictMode>,
  document.getElementById('root')
);
