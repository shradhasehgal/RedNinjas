import React, { Component } from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse} from "mdbreact";
import {MDBRow, MDBCard, MDBCardBody,MDBCardTitle, MDBCardText, MDBCol, MDBIcon} from "mdbreact";
import { Link } from 'react-router-dom'
import { Button, Container, Col, Row } from 'react-bootstrap'

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

export default class Landing extends Component {
    constructor (props) {
        super(props)
        this.state = {
            board:[
                ['','',''],
                ['','',''],
                ['','','']
            ],
            chosenCell:''
        }
    }


    handleCellClick = (e,cell) => {
      console.log("The clicked cell is : ",cell)
    }

    handleStartHuman = (e) => {
        console.log('Human begins the game!')
    }

    handleStartAgent = (e) => {
        console.log('Agent begins the game!')
    }

    handleStartGame = (e) => {
        console.log('The game begins!')
    }

    render () {
        return (
            
        <div style={{marginTop:"5%"}}>
            <div style={{textAlign:"center"}}>
            <h1 style={heading}>RED NINJA TIC TAC TOE</h1>
            </div>
            <Container>
                <Container fluid='true'>
                {
                    this.state.board.map((row, i)=>(
                        <Row>
                            {
                                row.map((cell, j)=> (
                                    <Col md style={cellStyle}
                                    onClick={e=>this.handleCellClick(e,3*i+j+1)}
                                    >
                                    {3*i+j+1}
                                    </Col>
                                ))
                            }
                        </Row>
                    ))
                }
                </Container>
            </Container>
                    
                    <div style={{textAlign:"center"}}>
                        <i class="fas fa-user-astronaut fa-7x orange-text mr-3" onClick={this.handleStartHuman}></i>
                    </div>
                    
                    <div style={{}}>
                        <i class="fas fa-robot fa-7x orange-text fa-spin" onClick={this.handleStartAgent}></i>
                    </div>

                    <div style = {{}}>
                        <Button variant="info" size="sm" style={{float: 'bottom'}} onClick={this.handleStartGame}>Start Game</Button>{' '}
                    </div>
        </div>
        )
  }
}


const cellStyle = {
  backgroundColor: 'pink',
  textAlign: 'center',
  border : "1px solid",
  width:"10%",
  padding:"5%"
//   border-collapse: "separate"
}
const heading = {
  display:"inline-block",
  textAlign: 'center',
  width: '80%',
  lineHeight: 1.5
}

// const startGame = {
//     padding:"1%"
// }

// const alignHuman = {
    // left : "70%",
    // right: "20%"

// }
const alignAgent = {
    position : 'absolute',
    bottom : 0
}