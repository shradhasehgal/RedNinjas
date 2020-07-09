import React, { Component } from 'react'
// import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse} from "mdbreact";
// import {MDBRow, MDBCard, MDBCardBody,MDBCardTitle, MDBCardText, MDBCol, MDBIcon} from "mdbreact";
// import { Link } from 'react-router-dom'
import { Button, Container, Col, Row } from 'react-bootstrap'
import axios from 'axios';
// import Sky from 'react-sky';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


// var bgColors = { "Default": "#81b71a",
//                     "Blue": "#00B1E1",
//                     "Cyan": "#37BC9B",
//                     "Green": "#8CC152",
//                     "Red": "#E9573F",
//                     "Yellow": "#F6BB42",
// };

export default class Landing extends Component {
    constructor (props) {
        super(props)
        this.state = {
            show_3x3_BoardComponent : this.props.show_3x3_BoardComponent,
            board:[
                ["X","",""],
                ["","O",""],
                ["O","","X"]
            ],
            chosenCell:'',
            gameBeginner : '',
            startGameValue : false,
            whoPlaysFirstDialog : false,
            startGameButton : "Start Game",
            symbol : {
                X: <div style={{textAlign:"center"}}>
                <i class="fas fa-user-astronaut fa-6x orange-text mr-2"></i>
            </div>,
                O: <div style={{textAlign:"center"}}>
                <i class="fas fa-robot fa-6x orange-text mr-2"></i>
            </div>,
                WA: <div style={{textAlign:"center"}}>
                <i class="fas fa-robot fa-6x orange-text fa-spin mr-2"></i>
            </div>,
                WH: <div style={{textAlign:"center"}}>
                <i class="fas fa-user-astronaut fa-6x orange-text fa-spin mr-2"></i>
            </div>
              },
              win : false,
              showBoardComponent : this.props.showBoardComponent
        }
    }


    handleCellClick = (e,cell) => {

        console.log("The clicked cell is : ",cell)
        // console.log(Math.floor(cell/3))
        // console.log(cell%3)
        if(this.state.startGameValue && this.state.win === false)
        {
            let copy_board = this.state.board.slice();
            if(copy_board[Math.floor(cell/3)][cell%3] === '')
            {
                copy_board[Math.floor(cell/3)][cell%3] = 'O'
            }
            for(let i = 0; i < 3; i++)
            {
                if(copy_board[i][0] === copy_board[i][1] && copy_board[i][0] === copy_board[i][2] && copy_board[i][1] === copy_board[i][2] && copy_board[i][0] !== "")
                {
                    if(copy_board[i][0] === 'O')
                    {
                        copy_board[i][0] = 'WA'
                        copy_board[i][1] = 'WA'
                        copy_board[i][2] = 'WA'
                    }
                    else if(copy_board[i][0] === 'X')
                    {
                        copy_board[i][0] = 'WH'
                        copy_board[i][1] = 'WH'
                        copy_board[i][2] = 'WH'
                    }
                    this.setState({
                        win : true
                    })
                }
            }
            for(let i = 0; i < 3; i++)
            {
                if(copy_board[0][i] === copy_board[1][i] && copy_board[0][i] === copy_board[2][i] && copy_board[1][i] === copy_board[2][i] && copy_board[0][i] !== "")
                {
                    if(copy_board[0][i] === 'O')
                    {
                        copy_board[0][i] = 'WA'
                        copy_board[1][i] = 'WA'
                        copy_board[2][i] = 'WA'
                    }
                    else if(copy_board[0][i] === 'X')
                    {
                        copy_board[0][i] = 'WH'
                        copy_board[1][i] = 'WH'
                        copy_board[2][i] = 'WH'
                    }
                    this.setState({
                        win : true
                    })
                }
            }

            if(copy_board[0][0] === copy_board[1][1] &&  copy_board[0][0] === copy_board[2][2] && copy_board[1][1] === copy_board[2][2] && copy_board[0][0] !== "")
            {
                if(copy_board[0][0] === 'O')
                {
                    copy_board[0][0] = 'WA'
                    copy_board[1][1] = 'WA'
                    copy_board[2][2] = 'WA'
                }
                else if(copy_board[0][0] === 'X')
                {
                    copy_board[0][0] = 'WH'
                    copy_board[1][1] = 'WH'
                    copy_board[2][2] = 'WH'
                }
                this.setState({
                    win : true
                })
            }

            if(copy_board[0][2] === copy_board[1][1] && copy_board[0][2] === copy_board[1][1] && copy_board[0][2] === copy_board[2][0] && copy_board[0][2] !== "")
            {
                if(copy_board[0][2] === 'O')
                {
                    copy_board[0][2] = 'WA'
                    copy_board[1][1] = 'WA'
                    copy_board[2][0] = 'WA'
                }
                else if(copy_board[0][2] === 'X')
                {
                    copy_board[0][2] = 'WH'
                    copy_board[1][1] = 'WH'
                    copy_board[2][0] = 'WH'
                }
                this.setState({
                    win : true
                })
            }
            this.setState({
                board : copy_board
            })

            console.log(this.state.board)

            const sendData = {
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
            } 
        

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
                startGameButton : "Reset Game",
                startGameValue : true
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
                gameBeginner : '',
                whoPlaysFirstDialog : false,
                startGameButton : "Start Game",
                startGameValue : false
            })
        }
    }

    render () {
        return (
            
    //        <div> 
    //     {/* /* Sky adapts size to its container */ }
    //     <Sky 
    //       images={{
    //         /* FORMAT AS FOLLOWS */
    //         0: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fspace-background-night-sky-and-stars-black-and-vector-10884328&psig=AOvVaw1x5pVx5xBTuJgJu_FU5Ni6&ust=1594332363722000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLintIXVvuoCFQAAAAAdAAAAABAD'
    //       }}
    //       how={130} /* You have to pass a number so Sky will render that amount of images chosen randomly from the object you passed in the previous step */
    //       time={40} /* time of the animation. Dfaults at 20s */
    //       size={'100px'} /* size of the rendered images. Defaults at 150px */
    //       background={'palettedvioletred'} /* color of background. Defaults to none */
    //     />
    // {/* //   </div> */}
        // <div>
        // <a style={{backgroundColor: bgColors.Yellow}}>yellow</a>

        <div style={{marginTop:"5%"
        // <div style ={{
            // backgroundColor: 'black',
            // width: '1900px',
            // height: '945px'
          }}>
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
                                        {/* {<div style={{textAlign:"center"}}>
                        <i class="fas fa-user-astronaut fa-7x orange-text fa-spin mr-3" onClick={e=>this.handleStartHuman(e)}></i>
                    </div>} */}
                                    {this.state.symbol[this.state.board[i][j]]}
                                    </Col>
                                ))
                            }
                        </Row>
                    ))
                }
                </Container>
            </Container>
                    
                    {/* <div style={{textAlign:"center"}}>
                        <i class="fas fa-user-astronaut fa-7x orange-text mr-3" onClick={e=>this.handleStartHuman(e)}></i>
                    </div>
                    
                    <div style={{}}>
                        <i class="fas fa-robot fa-7x orange-text fa-spin" onClick={e=>this.handleStartAgent(e)}></i>
                    </div> */}

                    <div style = {{}}>
                        <Button variant="info" size="lg" style={{startButton}} onClick={e=>this.handleStartGame(e,this.state.startGameButton)}>{this.state.startGameButton}</Button>{' '}
                    </div>

                    <ButtonGroup aria-label="Basic example">
                        <Button variant="secondary" onClick={}>Depth 1</Button>
                        <Button variant="secondary" onClick={}>Depth 2</Button>
                        <Button variant="secondary" onClick={}>Depth 3</Button>
                        <Button variant="secondary" onClick={}>Depth 4</Button>
                        <Button variant="secondary" onClick={}>Ultimate</Button>

                    </ButtonGroup>

                    {/* <i class="fas fa-space-shuttle fa-6x orange-text mr-2"></i> */}
                    {/* <i class="fas fa-rocket fa-6x orange-text mr-2"></i> */}

        </div>
        // </div>
        )
  }
}


const cellStyle = {
  backgroundColor: 'black',
  textAlign: 'center',
  border : "1px solid",
  width:"10%",
  height : 185,
  padding:"3%"
}
//   border-collapse: "separate"
// }
const heading = {
    display:"inline-block",
    textAlign: 'center',
    width: '80%',
    lineHeight: 1.5
}

const startButton = {
    // position: 'absolute',
    // bottom:0,
    // right : 0
    // left:50
}
