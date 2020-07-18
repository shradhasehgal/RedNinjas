import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Col, Row } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";

// import axios from 'axios';
// import Board from "./threeBoard.js";/
// import nineBoard from "./nineBoard.js";

import ThreeBoard from "./threeBoard.js";
import NineBoard from "./nineBoard.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import styles from "../static/css/Landing.module.css";
import common from "../static/css/Common.module.css";

export default class ThreeConfiguration extends Component {
    constructor(props) {
      super(props);
      this.state = {
        //   showWinComponent : false,
        //   showConfigurationComponent : false,
        //   showGameConfiguration : false
      }
    }
     
    render() {
      return (
          <div>


        <Button variant="default" onClick={(e) => this.props.handleStartHuman_Three(e)}>
          Beginner_Human
        </Button>


        <Button variant="default" onClick={(e) => this.props.handleStartAgent_Three(e)}>
          Beginner_Agent
        </Button>

        <ButtonGroup aria-label="Basic example">
          <Button variant="default" onClick={(e) => this.props.handleDepth_Three(e, 1)}>
            Depth 1
          </Button>
          <Button variant="default" onClick={(e) => this.props.handleDepth_Three(e, 2)}>
            Depth 2
          </Button>
          <Button variant="default" onClick={(e) => this.props.handleDepth_Three(e, 3)}>
            Depth 3
          </Button>
          <Button variant="default" onClick={(e) => this.props.handleDepth_Three(e, 4)}>
            Depth 4
          </Button>
          <Button variant="default" onClick={(e) => this.props.handleDepth_Three(e, -1)}>
            Ultimate
          </Button>
        </ButtonGroup>

        <div style={{}}>
          <Button
            variant="info"
            size="lg"
            style={{}}
            onClick={(e) => this.props.update_Three("Go To Game")}
          >
              Go To Game
            {/* {this.state.startGameButton} */}
          </Button>{" "}
        </div>

              {/* <p>Hello</p> */}
          </div>
      )}
}