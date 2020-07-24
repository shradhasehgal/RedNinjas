import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button} from "react-bootstrap";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import styles from "../static/css/Landing.module.css";

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className={styles.landingBody}>
        <div className={styles.content}>
          <h1 className={styles.heading}>The Mars Rover Mission</h1>
          <h4 className={styles.subheading}>
            This game is an AI driven Tic Tac Toe <br /> The game has
            incremental levels of difficulty, but let's see if you can win
            against the ultimate 3x3!
          </h4>
          <Link to="/three">
            <Button variant="danger" size="lg">
              {" "}
              3*3 TIC-TAC-TOE
            </Button>
          </Link>
          <Link to="/nine">
            <Button variant="danger" size="lg">
              {" "}
              9*9 TIC-TAC-TOE
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
