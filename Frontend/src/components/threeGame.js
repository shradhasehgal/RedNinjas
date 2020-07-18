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


import ThreeBoard from './threeBoard.js'
import ThreeWin from './threeWin.js'
import ThreeConfiguration from './threeConfiguration.js'

export default class ThreeGame extends Component {
    constructor(props) {
      super(props);
      // console.log("came here")
      this.state = {
          showThreeConfigurationComponent : true,
          showThreeGameComponent : false,
          showThreeWinComponent : false,
          depth : " ",
          gameBeginner : " "

      }

      this.updateStateOfComponents_Three = this.updateStateOfComponents_Three.bind(this);  
      this.handleStartAgent_Three = this.handleStartAgent_Three.bind(this);
      this.handleStartHuman_Three = this.handleStartHuman_Three.bind(this);
      this.handleDepth_Three = this.handleDepth_Three.bind(this);

    }
    


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
      // console.log("came to change depth")
      this.setState({
        depth : selected_depth
      })
    }

    updateStateOfComponents_Three(message)
    {
      if(message === "Go To Game")
      {
        this.setState({
          showThreeConfigurationComponent : false,
          showThreeGameComponent : true,
          showThreeWinComponent : false,
        })
      }
      else if(message === "Display Win")
      {
        this.setState({
          showThreeConfigurationComponent : false,
          showThreeGameComponent : false,
          showThreeWinComponent : true,
        })
      }
    }

    render() {
      return (
            <div>
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
}