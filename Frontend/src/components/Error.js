import React, { Component } from "react";
import { Button, Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import styles from "../static/css/error.module.css";

export default class Error extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.landingBody}>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            Looks like you're lost in deep space.
          </h1>
          <Link to="/">
            <Button size="lg" variant="danger" className={styles.button}>
              Go back home
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
