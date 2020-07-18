import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Col, Row } from "react-bootstrap";
// import axios from 'axios';
// import Board from "./threeBoard.js";
// import BigBoard from "./nineBoard.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import styles from "../static/css/Landing.module.css";
import common from "../static/css/Common.module.css";


import NineBoard from './nineBoard.js'
import NineWin from './nineWin.js'
import NineConfiguration from './nineConfiguration.js'

export default class ThreeGame extends Component {
    constructor(props) {
      super(props);
    //   console.log("came here")
      this.state = {
          showNineConfigurationComponent : true,
          showNineGameComponent : false,
          showNineWinComponent : false,
          gameBeginner : " "

      }

      this.updateStateOfComponents_Nine = this.updateStateOfComponents_Nine.bind(this);
      this.handleStartAgent_Nine = this.handleStartAgent_Nine.bind(this);
      this.handleStartHuman_Nine = this.handleStartHuman_Nine.bind(this);
    }
    

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
        })
      }
    }

    render() {
      return (
            <div>
                {this.state.showNineConfigurationComponent && <NineConfiguration update_Nine={this.updateStateOfComponents_Nine} handleStartAgent_Nine={this.handleStartAgent_Nine} handleStartHuman_Nine={this.handleStartHuman_Nine}/>}
                {/* <hr /> */}
                {this.state.showNineGameComponent && <NineBoard update_Nine={this.updateStateOfComponents_Nine} gameBeginner = {this.state.gameBeginner}/>}
                {/* <hr /> */}
                {this.state.showNineWinComponent && <NineWin update_Nine={this.updateStateOfComponents_Nine}/>}
                {/* <hr /> */}
          </div>
      )}
}