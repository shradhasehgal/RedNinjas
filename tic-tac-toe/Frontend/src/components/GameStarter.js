import React, { Component } from 'react'
// import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse} from "mdbreact";
// import {MDBRow, MDBCard, MDBCardBody,MDBCardTitle, MDBCardText, MDBCol, MDBIcon} from "mdbreact";
// import { Link } from 'react-router-dom'
// import { Button, Container, Col, Row } from 'react-bootstrap'
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
            showBoardComponent : false,
            showGameStarterComponent : true
        }
    }

    render () 
    {
        return (
                <div style = {{}}>
                <button class = "btn btn-primary float-right" type="button" 
                onClick = {() => {
                  this.setState ({
                     showBoardComponent : true,
                     showGameStarterComponent : false
                  });
                }}> 
                </button>
                {this.state.showBoardComponent && <Board/>}
                </div>
        )
    }
}