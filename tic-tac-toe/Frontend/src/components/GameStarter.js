import React, { Component } from 'react'
// import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse} from "mdbreact";
// import {MDBRow, MDBCard, MDBCardBody,MDBCardTitle, MDBCardText, MDBCol, MDBIcon} from "mdbreact";
// import { Link } from 'react-router-dom'
import { Button, Container, Col, Row } from 'react-bootstrap'
// import axios from 'axios';
import Board from './Board.js'
// import Sky from 'react-sky';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
// import { render } from 'react-dom';

export default class GameStarter extends Component {
    constructor (props) {
        super(props);
        this.state = {
            show_3x3_BoardComponent : false,
            show_9x9_BoardComponent : false,
            showGameStarterComponent : true
        }
    }

    render () 
    {
        return (
                <div style = {{}}>
                <Button variant="info" size="lg" 
                onClick = {() => {
                  this.setState ({
                        show_3x3_BoardComponent : true,
                        showGameStarterComponent : false
                  });
                }}> 3*3 TIC-TAC-TOE
                </Button>
                <Button variant="info" size="lg" 
                onClick = {() => {
                  this.setState ({
                        show_9x9_BoardComponent : true,
                        showGameStarterComponent : false
                  });
                }}> 9*9 TIC-TAC-TOE
                </Button>
                {this.state.show_3x3_BoardComponent && <Board/>}
                {this.state.show_9x9_BoardComponent && <Board/>}
                </div>
        )
    }
}

{/* <MDBIcon icon="space-shuttle" /> */}
{/* <MDBIcon icon="rocket" /> */}