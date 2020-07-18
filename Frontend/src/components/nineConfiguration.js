import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Col, Row } from "react-bootstrap";
// import axios from 'axios';
import ThreeBoard from "./threeBoard.js";
import NineBoard from "./nineBoard.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import styles from "../static/css/Landing.module.css";
import common from "../static/css/Common.module.css";

export default class NineConfiguration extends Component {
    constructor(props) {
      super(props);
      this.state = {
          showWinComponent : false,
          showConfigurationComponent : false,
          showGameConfiguration : false
      }
    }
  

    handleStartAgent(e)
    {

    }

    handleStartHuman(e)
    {

    }

    handleDepth()
    {

    }

    render() {
      return (
          <div>

        <Button variant="default" onClick={(e) => this.props.handleStartHuman_Nine(e)}>
          Beginner_Human
        </Button>


        <Button variant="default" onClick={(e) => this.props.handleStartAgent_Nine(e)}>
          Beginner_Agent
        </Button>

        <div style={{}}>
          <Button
            variant="info"
            size="lg"
            style={{}}
            onClick={(e) => this.props.update_Nine("Go To Game")}
          >
              Go To Game
            {/* {this.state.startGameButton} */}
          </Button>{" "}
        </div>


          </div>
      )}
}