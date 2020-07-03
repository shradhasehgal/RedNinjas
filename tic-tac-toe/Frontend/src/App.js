import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Board from './components/Board'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div>
        <Router>
          <Switch>
            <Route exact path='/' component={Board} />
          </Switch>
        </Router>
      </div>
  );
}

export default App;
