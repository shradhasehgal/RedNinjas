import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Button, Container, Col, Row } from "react-bootstrap";
// import axios from 'axios';
// import Board from "./threeBoard.js";
// import BigBoard from "./nineBoard.js";
import { Button, Container, Col, Row } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import styles from "../static/css/Landing.module.css";
import common from "../static/css/Common.module.css";


<<<<<<< HEAD

import ThreeBoard from './threeBoard.js'
import ThreeConfiguration from './threeConfiguration.js'
import GameResults from './gameResults.js'

=======
import ThreeBoard from './threeBoard.js'
import ThreeWin from './threeWin.js'
import ThreeConfiguration from './threeConfiguration.js'
>>>>>>> 0b132584... Changed to component implementation

export default class ThreeGame extends Component {
    constructor(props) {
      super(props);
<<<<<<< HEAD
=======
      // console.log("came here")
>>>>>>> 0b132584... Changed to component implementation
      this.state = {
          showThreeConfigurationComponent : true,
          showThreeGameComponent : false,
          showThreeWinComponent : false,
          depth : " ",
<<<<<<< HEAD
          gameBeginner : " ",
          route : " ",
          winner : " "

      }

      this.updateStateOfComponents_Three = this.updateStateOfComponents_Three.bind(this);
      this.updateStateForWinComponent = this.updateStateForWinComponent.bind(this);  
=======
          gameBeginner : " "

      }

      this.updateStateOfComponents_Three = this.updateStateOfComponents_Three.bind(this);  
>>>>>>> 0b132584... Changed to component implementation
      this.handleStartAgent_Three = this.handleStartAgent_Three.bind(this);
      this.handleStartHuman_Three = this.handleStartHuman_Three.bind(this);
      this.handleDepth_Three = this.handleDepth_Three.bind(this);

    }
<<<<<<< HEAD
=======
    

>>>>>>> 0b132584... Changed to component implementation

    handleStartAgent_Three(e)
    {
        this.setState({
          gameBeginner : "AGENT"
        })
    }

    handleStartHuman_Three(e)
    {
      this.setState({
        gameBeginner : "HUMAN"
      })
    }

    handleDepth_Three(e,selected_depth)
    {
<<<<<<< HEAD
=======
      // console.log("came to change depth")
>>>>>>> 0b132584... Changed to component implementation
      this.setState({
        depth : selected_depth
      })
    }

<<<<<<< HEAD
    updateStateForWinComponent(gameRoute,gameWinner)
    {
      console.log("Heyyyyy")
      this.setState({
        showThreeConfigurationComponent : false,
        showThreeGameComponent : false,
        showThreeWinComponent : true,
        winner : gameWinner,
        route : gameRoute
      })
    }

=======
>>>>>>> 0b132584... Changed to component implementation
    updateStateOfComponents_Three(message)
    {
      if(message === "Go To Game")
      {
        this.setState({
          showThreeConfigurationComponent : false,
          showThreeGameComponent : true,
          showThreeWinComponent : false,
        })
<<<<<<< HEAD
      } 
      else if(message === "Show Configuration")
      {
        this.setState({
          showThreeConfigurationComponent : true,
          showThreeGameComponent : false,
          showThreeWinComponent : false,
          depth : " ",
          gameBeginner : " ",
          route : " ",
          winner : " "
=======
      }
      else if(message === "Display Win")
      {
        this.setState({
          showThreeConfigurationComponent : false,
          showThreeGameComponent : false,
          showThreeWinComponent : true,
>>>>>>> 0b132584... Changed to component implementation
        })
      }
    }

    render() {
      return (
            <div>
<<<<<<< HEAD
                {this.state.showThreeConfigurationComponent && <ThreeConfiguration update_Three={this.updateStateOfComponents_Three} handleStartAgent_Three={this.handleStartAgent_Three} handleStartHuman_Three={this.handleStartHuman_Three} handleDepth_Three={this.handleDepth_Three} depth={this.state.depth} gameBeginner={this.state.gameBeginner}/>}
                {this.state.showThreeGameComponent && <ThreeBoard update_Win_Three = {this.updateStateForWinComponent} depth = {this.state.depth} gameBeginner = {this.state.gameBeginner}/>}
                {this.state.showThreeWinComponent && <GameResults update_Three={this.updateStateOfComponents_Three} winner = {this.state.winner} route = {this.state.route}/>}

          </div>
    )}
=======
              {/* calculation : {this.state.showThreeConfigurationComponent} */}
              {/* <p>hello</p> */}
                {this.state.showThreeConfigurationComponent && <ThreeConfiguration update_Three={this.updateStateOfComponents_Three} handleStartAgent_Three={this.handleStartAgent_Three} handleStartHuman_Three={this.handleStartHuman_Three} handleDepth_Three={this.handleDepth_Three}/>}
                {/* <hr /> */}
                {this.state.showThreeGameComponent && <ThreeBoard update_Three={this.updateStateOfComponents_Three} depth = {this.state.depth} gameBeginner = {this.state.gameBeginner}/>}
                {/* <hr /> */}
                {this.state.showThreeWinComponent && <ThreeWin update_Three={this.updateStateOfComponents_Three}/>}
                {/* <hr /> */}
          </div>
      )}
>>>>>>> 0b132584... Changed to component implementation
}