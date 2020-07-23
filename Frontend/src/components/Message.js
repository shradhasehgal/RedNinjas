import React, { Component, useState ,useEffect} from "react";
import styles from "../static/css/message.module.css";
import { Button, Fade, Toast } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert'
import { toast } from 'react-toastify';


const Message = (props) => {
    const [show, setShow] = useState(true);
    var row = null
    var coloumn = null

if (props.messageForHint === "Place in the cell") {
    return (
        <div aria-live="polite" aria-atomic="true">
            <div className={styles.box} style={{ position: 'absolute', top: 50, right: 0}} >
                <Toast onClose={() => setShow(false)} show={show} delay={4000} autohide >
                    <Toast.Header className={styles.text}>
                    <strong className="mr-auto">Hint!!</strong>
            </Toast.Header>
            <Toast.Body className={styles.bodytext} >Play in localboard {props.row_to_place} {props.column_to_place} </Toast.Body>
          </Toast>
        </div>
        </div>
    );
} else {
    return (
        <div aria-live="polite" aria-atomic="true">
            <div className={styles.box} style={{ position: 'absolute', top: 50, right: 0}} >
                <Toast onClose={() => setShow(false)} show={show} delay={4000} autohide >
                    <Toast.Header className={styles.text}>
                    <strong className="mr-auto">Hint!!</strong>
            </Toast.Header>
            <Toast.Body className={styles.bodytext} >Play in any empty localboard</Toast.Body>
          </Toast>
        </div>
        </div>
    );

}

  }
  
// render(<Example />);


export default Message;


 