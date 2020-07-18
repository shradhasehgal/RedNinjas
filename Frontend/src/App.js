// import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Board from './components/Board'
import BigBoard from './components/BigBoard'
import GameStarter from './components/GameStarter'
import Landing from './components/Landing'
import Error from './components/Error'
import Result from './components/Result'
import 'bootstrap/dist/css/bootstrap.min.css'
// import axios from 'axios';

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
    };
  }

  componentDidMount() {
    this.listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (this.state.status !== "nav") {
          this.setState({ status: "nav" });
        }
      } else {
        if (this.state.status !== "top") {
          this.setState({ status: "top" });
        }
      }
    });
  }
  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }
  render() {
    return (
      <Navbar expand="lg" style={navstyles} variant="dark">
        <Navbar.Brand href="/">Red Ninjas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">3x3</Nav.Link>
            <Nav.Link href="#home">9x9</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Rules</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/three' component={Board} />
            <Route exact path='/nine' component={BigBoard} />
            <Route exact path='/Result' component={Result} />
            <Route path='*' exact={true} component={Error} />
          </Switch>
        </Router>
      </div>
  );
}

export default App;

const navstyles = {
  backgroundColor: "#3b3251",
  position: "fixed",
  top: "0%",
  overflow: "hidden",
  width: "100%",
  zIndex: "9999999 !important",
};
