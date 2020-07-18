import React, { Component } from 'react'
// import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse} from "mdbreact";
// import {MDBRow, MDBCard, MDBCardBody,MDBCardTitle, MDBCardText, MDBCol, MDBIcon} from "mdbreact";
// import { Link } from 'react-router-dom'
import { Button, Container, Col, Row } from 'react-bootstrap'
// import axios from 'axios';
import Board from './threeBoard.js'
import bigBoard from './nineBoard.js'
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

          {/* <section style = {sectionStyle}></section> */}
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
                {this.state.show_9x9_BoardComponent && <bigBoard/>}
                </div>
        )
    }
}


// var sectionStyle = {
//   width: "100%",
//   height: "400px",
//   backgroundImage: "url(" + "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fastronaut-standing-at-mars-vector-19656662&psig=AOvVaw2xG1bjZqrv24uSLeNYwXMg&ust=1594645072145000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjYl5Dix-oCFQAAAAAdAAAAABAI" + ")"
// };
{/* <MDBIcon icon="space-shuttle" /> */}
{/* <MDBIcon icon="rocket" /> */}