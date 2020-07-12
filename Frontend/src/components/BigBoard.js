import React, { Component,useEffect } from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse} from "mdbreact";
import {MDBRow, MDBCard, MDBCardBody,MDBCardTitle, MDBCardText, MDBCol, MDBIcon} from "mdbreact";
// import { Link } from 'react-router-dom'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { Button, Container, Col, Row } from 'react-bootstrap'
import axios from 'axios';
// import Sky from 'react-sky';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';



export default class BigBoard extends Component {
    constructor (props) {
        super(props)
        this.state = {
            show_9x9_BoardComponent : this.props.show_9x9_BoardComponent,
            bigboard:[

                [ [ ["X","","X"],
                    ["","O",""],
                    ["","X","X"] ] , 
                    
                    [ ["X","","X"],
                      ["","O",""],
                      ["","X","X"] ],

                      [ ["X","","X"],
                        ["","O",""],
                        ["","X","X"] ] ], 

                        [ [ ["X","","X"],
                    ["","O",""],
                    ["","X","X"] ] , 
                    
                    [ ["X","","X"],
                      ["","O",""],
                      ["","X","X"] ],

                      [ ["X","","X"],
                        ["","O",""],
                        ["","X","X"] ] ],

                        [ [ ["X","","X"],
                    ["","O",""],
                    ["","X","X"] ] , 
                    
                    [ ["X","","X"],
                      ["","O",""],
                      ["","X","X"] ],

                      [ ["X","","X"],
                        ["","O",""],
                        ["","X","X"] ] ]

            ],

            symbol : {
                X: <div style={{textAlign:"center"}}>
                <i class="fas fa-times fa-2x amber-text mr-2"></i>
                {/* <i class="far fa-grin fa-3x amber-text mr-2"></i> */}
            </div>,
                O: <div style={{textAlign:"center"}}>
                 <i class="far fa-circle fa-2x pink-text mr-2"></i>
                 {/* <i class="fas fa-grin fa-3x pink-text mr-2"></i> */}
            </div>,
                WA: <div style={{textAlign:"center"}}>
                {/* <i class="fas fa-robot fa-6x light-green-text fa-spin mr-2"></i> */}
            </div>,
                WH: <div style={{textAlign:"center"}}>
                {/* <i class="fas fa-user-astronaut fa-6x green-text fa-spin mr-2"></i> */}
            </div>
              },
        }
    }
    render () {
        return (
            <div style={{marginTop:"2%"}}>
            <div style={{textAlign:"center"}}>
            <h1 style={heading}>RED NINJA TIC TAC TOE</h1>
            </div>
            <Container>
                <Container fluid='true'>
                {
                    this.state.bigboard.map((row, i)=>(
                        <Row>
                            {
                                row.map((column, j)=> (
                                    <Col md style={cellStyle1}
                                    // onClick={}
                                    >
                                        {
                                            this.state.bigboard.map((inner_row,ii)=>(
                                            <Row>
                                            {
                                                inner_row.map((inner_column,jj)=> (
                                                    <Col md style={cellStyle2}>
                                                {
                                                    <div style={{textAlign:"center"}}>
                                                        {this.state.symbol[this.state.bigboard[i][j][ii][jj]]}
                                                </div>
                                                }
                                                </Col>
                                            ))
                                                
                                            }
                                        </Row>
                                            ))
                                        }
                                    </Col>
                                ))
                            }
                        </Row>
                    ))
                }
                </Container>
            </Container>
</div>
        )
    }    
}

const cellStyle1 = {
    backgroundColor: 'black',
    textAlign: 'center',
    border : "1px solid",
    width:"10%",
    height : 250,
    padding:"3%"
  }

  const cellStyle2 = {
    backgroundColor: 'black',
    textAlign: 'center',
    border : "1px solid",
    width:"5%",
    height : 70,
    padding:"1%"
  }
  //   border-collapse: "separate"
  // }
  const heading = {
      display:"inline-block",
      textAlign: 'center',
      width: '80%',
      lineHeight: 1.5
  }