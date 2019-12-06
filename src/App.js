import React, {Component} from 'react'
import { BrowserRouter as Router } from 'react-router-dom'; 
import {Route,Switch} from 'react-router-dom'

//components
import Nav from './Components/Nav'


import './App.css';


function App() {
  return (
    <div>
      <div className="App">
      <Router>
        <Nav/>
      </Router>
        <h1>Todo:</h1>
        <ul>
          <li>Learn to use Multer</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
