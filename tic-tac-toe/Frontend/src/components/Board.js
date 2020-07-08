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
        // console.log(Math.floor(cell/3))
        // console.log(cell%3)

        let copy_board = this.state.board.slice();
        copy_board[Math.floor(cell/3)][cell%3] = 'x'
        this.setState({
            board : copy_board
        })
        console.log(this.state.board)


        // this.setState({
            // this.state.board.map((row,i) => {
        // })
        // this.setState( ({board}) => ({ board:
        //     board.map((row,i) => {
        //         row.map((column,j) => {
        //             console.log(i)
        //             console.log(j)
        //             if(i === 2 && j === 2)
        //             {
        //                 return 'x';
        //                 // board[i][j] = 'x'
        //             }
        //             else
        //             {
        //                 return 'o';
        //             }
        //         });
        //     })
        // }));
    };

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
                                    onClick={e=>this.handleCellClick(e,3*i+j)}
                                    >
                                        {/* {'x'} */}
                                    {this.state.board[i][j]}
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
