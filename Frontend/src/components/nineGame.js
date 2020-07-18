import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Col, Row } from "react-bootstrap";
<<<<<<< HEAD
=======
// import axios from 'axios';
// import Board from "./threeBoard.js";
// import BigBoard from "./nineBoard.js";
>>>>>>> 0b132584... Changed to component implementation

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import styles from "../static/css/Landing.module.css";
import common from "../static/css/Common.module.css";


import NineBoard from './nineBoard.js'
<<<<<<< HEAD
import NineConfiguration from './nineConfiguration.js'
import GameResults from './gameResults.js'
=======
import NineWin from './nineWin.js'
import NineConfiguration from './nineConfiguration.js'
>>>>>>> 0b132584... Changed to component implementation

export default class ThreeGame extends Component {
    constructor(props) {
      super(props);
<<<<<<< HEAD
=======
    //   console.log("came here")
>>>>>>> 0b132584... Changed to component implementation
      this.state = {
          showNineConfigurationComponent : true,
          showNineGameComponent : false,
          showNineWinComponent : false,
<<<<<<< HEAD
          gameBeginner : " ",
          route : " ",
          winner : " "
=======
          gameBeginner : " "
>>>>>>> 0b132584... Changed to component implementation

      }

      this.updateStateOfComponents_Nine = this.updateStateOfComponents_Nine.bind(this);
<<<<<<< HEAD
      this.updateStateForWinComponent = this.updateStateForWinComponent.bind(this);  
=======
>>>>>>> 0b132584... Changed to component implementation
      this.handleStartAgent_Nine = this.handleStartAgent_Nine.bind(this);
      this.handleStartHuman_Nine = this.handleStartHuman_Nine.bind(this);
    }
    

<<<<<<< HEAD
    updateStateForWinComponent(gameRoute,gameWinner)
    {
      console.log("Heyyyyy")
      this.setState({
        showNineConfigurationComponent : false,
        showNineGameComponent : false,
        showNineWinComponent : true,
        winner : gameWinner,
        route : gameRoute
      })
    }

=======
>>>>>>> 0b132584... Changed to component implementation
    handleStartAgent_Nine(e)
    {
        this.setState({
          gameBeginner : "AGENT"
        })
    }

    handleStartHuman_Nine(e)
    {
      this.setState({
        gameBeginner : "HUMAN"
      })
    }


    updateStateOfComponents_Nine(message)
    {
      if(message === "Go To Game")
      {
<<<<<<< HEAD
        this.setState({
          showNineConfigurationComponent : false,
          showNineGameComponent : true,
          showNineWinComponent : false
        })
      }
      else if(message === "Show Configuration")
      {
        this.setState({
          shownNineConfigurationComponent : true,
          showNineGameComponent : false,
          showNineWinComponent : false,
          gameBeginner : " ",
          route : " ",
          winner : " "
=======
        //   console.log("Came here")
        this.setState({
          showNineConfigurationComponent : false,
          showNineGameComponent : true,
          showNineWinComponent : false,
        })
      }
      else if(message === "Display Win")
      {
        this.setState({
          showNineConfigurationComponent : false,
          showNineGameComponent : false,
          showNineWinComponent : true,
>>>>>>> 0b132584... Changed to component implementation
        })
      }
    }

    render() {
      return (
            <div>
<<<<<<< HEAD
                {this.state.showNineConfigurationComponent && <NineConfiguration update_Nine={this.updateStateOfComponents_Nine} handleStartAgent_Nine={this.handleStartAgent_Nine} handleStartHuman_Nine={this.handleStartHuman_Nine} gameBeginner={this.state.gameBeginner}/>}
                {this.state.showNineGameComponent && <NineBoard update_Win_Nine={this.updateStateOfComponents_Nine} gameBeginner = {this.state.gameBeginner}/>}
                {this.state.showNineWinComponent && <GameResults update_Nine={this.updateStateOfComponents_Nine} winner = {this.state.winner} route = {this.state.route}/>}
=======
                {this.state.showNineConfigurationComponent && <NineConfiguration update_Nine={this.updateStateOfComponents_Nine} handleStartAgent_Nine={this.handleStartAgent_Nine} handleStartHuman_Nine={this.handleStartHuman_Nine}/>}
                {/* <hr /> */}
                {this.state.showNineGameComponent && <NineBoard update_Nine={this.updateStateOfComponents_Nine} gameBeginner = {this.state.gameBeginner}/>}
                {/* <hr /> */}
                {this.state.showNineWinComponent && <NineWin update_Nine={this.updateStateOfComponents_Nine}/>}
                {/* <hr /> */}
>>>>>>> 0b132584... Changed to component implementation
          </div>
      )}
}