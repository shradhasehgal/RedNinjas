import React, { Component, useState } from "react";
import Toast from 'react-bootstrap/Toast'
import Button from 'react-bootstrap/Button'
import styles from "../static/css/message.module.css";
import { Row, Container } from "react-bootstrap";

export default function Message() {
    const [showA, setShowA] = useState(true);
    const toggleShowA = () => setShowA(!showA);
    // pass these are props
    var message = "Place it in"
    var row = 2
    var coloumn = 0 

    return (
        <Container className={styles.bottomleft}>
            <Row>
                <Button size="mg" variant="light" onClick={toggleShowA}>Message</Button>
            </Row>
            <Row className={styles.bottomleft}>
                <Toast show={showA} onClose={toggleShowA} style={{bottom: 0,left: 0,}} variant="success">
                    <Toast.Header className={styles.title}>
                        <strong className="mr-auto">Here's A suggestion</strong>
                    </Toast.Header>
                    <Toast.Body>{message} {row} {coloumn}</Toast.Body>
                </Toast>
            </Row>
        </Container> 
    );
  }
  

 