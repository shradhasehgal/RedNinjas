import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Col, Row } from 'react-bootstrap'
import axios from 'axios';

export default class Landing extends Component {
    constructor (props) {
        super(props)
        this.state = {
            board:[
                ['','',''],
                ['','',''],
                ['','','']
            ],
            chosenCell:'',
            humanSymbol : '',
            agentSymbol : '',
            gameBeginner : '',
            whoPlaysFirstDialog : false,
            startGameButton : "Start Game"
        }
    }
    handleCellClick = (e,cell) => {

        console.log("The clicked cell is : ",cell)
        // console.log(Math.floor(cell/3))
        // console.log(cell%3)

        let copy_board = this.state.board.slice();
        if(copy_board[Math.floor(cell/3)][cell%3] == '')
        {
            copy_board[Math.floor(cell/3)][cell%3] = 'x'
        }
        this.setState({
            board : copy_board
        })


        console.log(this.state.board)

        const sendData = {
            humanSymbol: this.state.humanSymbol,
            agentSymbol: this.state.agentSymbol,
            gameBeginner: this.state.gameBeginner,
            board: this.state.board
        }

        axios.post('http://localhost:5000/',sendData) //route to filled according to flask route name
        .then(res=> {
            console.log(res.data);
            // copy_resultant_board = res.data.resultant_board.slice();       /////// will uncomment when backend and frontend are bound together because for now this will give error

            // this.setState({
            //     board : copy_resultant_board
            // })

        })
        .catch(err=>{
            console.log(err);
        })

    };

    handleStartHuman = (e) => {
        console.log('Human begins the game!')

        this.setState({
            gameBeginner : 'HUMAN'
        })
    }


    handleStartAgent = (e) => {
        console.log('Agent begins the game!')

        this.setState({
            gameBeginner : 'AGENT'
        })
    }

    handleStartGame = (e,startGame) => {
        console.log('The game begins!')

        // this.setState({
        //     whoPlaysFirstDialog : true
        // })

        if(startGame === 'Start Game')
        {
            this.setState({
                startGameButton : "Reset Game"
            })
        }
        else if(startGame === 'Reset Game')
        {

            let copy_board = this.state.board.slice();
            for(let i = 0; i < 3; i++)
            {
                for(let j = 0; j < 3; j++)
                {
                    copy_board[i][j] = '';
                }
            }
            this.setState({
                board : copy_board,
                humanSymbol : '',
                agentSymbol : '',
                gameBeginner : '',
                whoPlaysFirstDialog : false,
                startGameButton : "Start Game"
            })
        }
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
                    
                    <div style={{textAlign:"center"}}>
                        <i class="fas fa-user-astronaut fa-7x orange-text mr-3" onClick={e=>this.handleStartHuman(e)}></i>
                    </div>
                    
                    <div style={{}}>
                        <i class="fas fa-robot fa-7x orange-text fa-spin" onClick={e=>this.handleStartAgent(e)}></i>
                    </div>

                    <div style = {{}}>
                        <Button variant="info" size="sm" style={{float: 'bottom'}} onClick={e=>this.handleStartGame(e,this.state.startGameButton)}>{this.state.startGameButton}</Button>{' '}
                    </div>

                        {/* <> */}
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

// var images = imgs.map(function(image) {
//     return (<Image src={image} rounded />);
//    });
