// import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Board from './components/Board'
import BigBoard from './components/BigBoard'
import GameStarter from './components/GameStarter'
import Landing from './components/Landing'
import 'bootstrap/dist/css/bootstrap.min.css'
// import axios from 'axios';



function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/three' component={Board} />
            <Route exact path='/nine' component={BigBoard} />
          </Switch>
        </Router>
      </div>
  );
}

export default App;
