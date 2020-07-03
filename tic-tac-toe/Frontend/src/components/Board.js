import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Col, Row } from 'react-bootstrap'

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
}
const heading = {
  display:"inline-block",
  textAlign: 'center',
  width: '80%',
  lineHeight: 1.5
}
