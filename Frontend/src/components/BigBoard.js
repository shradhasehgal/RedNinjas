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
            startGameButton: "Start Game",
            startGameValue: false,
            ultimateWin : false,
            gameBeginner : "",
            ultimateWinBoard: [
                [" ", " ", " "],
                [" ", " ", " "],
                [" ", " ", " "],
              ],
            bigboard:[

                [ [ ["X"," ","X"],
                    [" ","O"," "],
                    [" ","X","X"] ], 
                    
                    [ ["X"," ","X"],
                      [" ","O"," "],
                      [" ","X","X"] ],

                      [ ["X"," ","X"],
                        [" ","O"," "],
                        [" ","X","X"] ] ], 

                        [ [ ["X"," ","X"],
                    [" ","O"," "],
                    [" ","X","X"] ], 
                    
                    [ ["X"," ","X"],
                      [" ","O"," "],
                      [" ","X","X"] ],

                      [ ["X"," ","X"],
                        [" ","O"," "],
                        [" ","X","X"] ] ],

                        [ [ ["X"," ","X"],
                    [" ","O"," "],
                    [" ","X","X"] ] , 
                    
                    [ ["X"," ","X"],
                      [" ","O"," "],
                      [" ","X","X"] ],

                      [ ["X"," ","X"],
                        [" ","O"," "],
                        [" ","X","X"] ] ]

            ],

            symbol : {
                X: <div style={{textAlign:"center"}}>
                <i class="fas fa-grin fa-3x amber-text mr-2"></i>

                {/* <i class="fas fa-times fa-2x amber-text mr-2"></i> */}
                {/* <i class="far fa-grin fa-3x amber-text mr-2"></i> */}
            </div>,
                O: <div style={{textAlign:"center"}}>
                   <i class="far fa-grin fa-3x pink-text mr-2"></i>

                 {/* <i class="far fa-circle fa-2x pink-text mr-2"></i> */}
                 {/* <i class="fas fa-grin fa-3x pink-text mr-2"></i> */}
            </div>,
                WA: <div style={{textAlign:"center"}}>
                <i class="fas fa-laugh-wink fa-3x amber-text mr-2"></i>

                {/* <i class="fas fa-times fa-2x amber-text mr-2"></i> */}
                {/* <i class="fas fa-robot fa-2x light-green-text mr-2"></i> */}
                </div>,
                WH: <div style={{textAlign:"center"}}>
                    <i class="far fa-laugh-wink fa-3x pink-text mr-2"></i>

                {/* <i class="fas fa-user-astronaut fa-2x green-text mr-2"></i> */}
                {/* <i class="far fa-circle fa-2x pink-text mr-2"></i> */}
                </div>,
                LA: <div style={{textAlign:"center"}}>
                <i class="fas fa-sad-cry fa-3x amber-text mr-2"></i>

                {/* <i class="fas fa-times fa-2x amber-text mr-2"></i> */}
                {/* <i class="fas fa-robot fa-2x light-green-text mr-2"></i> */}
            </div>,
                LH: <div style={{textAlign:"center"}}>
                    <i class="far fa-sad-cry fa-3x pink-text mr-2"></i>

                {/* <i class="fas fa-user-astronaut fa-2x green-text mr-2"></i> */}
                {/* <i class="far fa-circle fa-2x pink-text mr-2"></i> */}
            </div>
              }
        }
    }

    alterBigBoardRow(winner_symbol,winner_status,loser_symbol,loser_status,win_row)
    {
        let copy_bigBoard = this.state.bigboard.slice()
        for(let outer_row = 0; outer_row < 3; outer_row++)
        {
            for(let outer_column = 0; outer_column < 3; outer_column++)
            {
                for(let inner_row = 0; inner_row < 3; inner_row++)
                {
                    for(let inner_column = 0; inner_column < 3; inner_column++)
                    {
                        if(outer_row === win_row)
                        {
                            copy_bigBoard[outer_row][outer_column][inner_row][inner_column] = winner_status
                        }
                        else
                        {
                            if(copy_bigBoard[outer_row][outer_column][inner_row][inner_column] === winner_symbol)
                            {
                                copy_bigBoard[outer_row][outer_column][inner_row][inner_column] = winner_status
                            }
                            else if(copy_bigBoard[outer_row][outer_column][inner_row][inner_column] === loser_symbol)
                            {
                                copy_bigBoard[outer_row][outer_column][inner_row][inner_column] = loser_status
                            }
                        }
                    }
                }
            }
        }

        this.setState({
            // ultimateWin : true,
            bigboard : copy_bigBoard
        })
    }

    alterBigBoardColumn(winner_symbol,winner_status,loser_symbol,loser_status,win_column)
    {
        let copy_bigBoard = this.state.bigboard.slice()

        for(let outer_row = 0; outer_row < 3; outer_row++)
        {
            for(let outer_column = 0; outer_column < 3; outer_column++)
            {
                for(let inner_row = 0; inner_row < 3; inner_row++)
                {
                    for(let inner_column = 0; inner_column < 3; inner_column++)
                    {
                        if(outer_column === win_column)
                        {
                            copy_bigBoard[outer_row][outer_column][inner_row][inner_column] = winner_status
                        }
                        else
                        {
                            if(copy_bigBoard[outer_row][outer_column][inner_row][inner_column] === winner_symbol)
                            {
                                copy_bigBoard[outer_row][outer_column][inner_row][inner_column] = winner_status
                            }
                            else if(copy_bigBoard[outer_row][outer_column][inner_row][inner_column] === loser_symbol)
                            {
                                copy_bigBoard[outer_row][outer_column][inner_row][inner_column] = loser_status
                            }
                        }
                    }
                }
            }
        }

        this.setState({
            // ultimateWin : true,
            bigboard : copy_bigBoard
        })
    }

    alterBigBoardLeftDiagonal(winner_symbol,winner_status,loser_symbol,loser_status)
    {
        let copy_bigBoard = this.state.bigboard.slice()

        for(let outer_row = 0; outer_row < 3; outer_row++)
        {
            for(let outer_column = 0; outer_column < 3; outer_column++)
            {
                for(let inner_row = 0; inner_row < 3; inner_row++)
                {
                    for(let inner_column = 0; inner_column < 3; inner_column++)
                    {
                        if( (outer_row === 0 && outer_column === 0) || (outer_row === 1 && outer_column === 1) || (outer_row === 2 && outer_column === 2))
                        {
                            copy_bigBoard[outer_row][outer_column][inner_row][inner_column] = winner_status
                        }
                        else
                        {
                            if(copy_bigBoard[outer_row][outer_column][inner_row][inner_column] === winner_symbol)
                            {
                                copy_bigBoard[outer_row][outer_column][inner_row][inner_column] = winner_status
                            }
                            else if(copy_bigBoard[outer_row][outer_column][inner_row][inner_column] === loser_symbol)
                            {
                                copy_bigBoard[outer_row][outer_column][inner_row][inner_column] = loser_status
                            }
                        }
                    }
                }
            }
        }
        this.setState({
            // ultimateWin : true,
            bigboard : copy_bigBoard
        })
    }

    alterBigBoardRightDiagonal(winner_symbol,winner_status,loser_symbol,loser_status)
    {
        let copy_bigBoard = this.state.bigboard.slice()
        for(let outer_row = 0; outer_row < 3; outer_row++)
        {
            for(let outer_column = 0; outer_column < 3; outer_column++)
            {
                for(let inner_row = 0; inner_row < 3; inner_row++)
                {
                    for(let inner_column = 0; inner_column < 3; inner_column++)
                    {
                        if( (outer_row === 0 && outer_column === 2) || (outer_row === 1 && outer_column === 1) || (outer_row === 2 && outer_column === 0))
                        {
                            copy_bigBoard[outer_row][outer_column][inner_row][inner_column] = winner_status
                        }
                        else
                        {
                            if(copy_bigBoard[outer_row][outer_column][inner_row][inner_column] === winner_symbol)
                            {
                                copy_bigBoard[outer_row][outer_column][inner_row][inner_column] = winner_status
                            }
                            else if(copy_bigBoard[outer_row][outer_column][inner_row][inner_column] === loser_symbol)
                            {
                                copy_bigBoard[outer_row][outer_column][inner_row][inner_column] = loser_status
                            }
                        }
                    }
                }
            }
        }
        this.setState({
            // ultimateWin : true,
            bigboard : copy_bigBoard
        })
    }
   

    


    check_ultimate_win(copy_board)
    {
        // let copy_bigBoard = this.state.bigboard.slice()

        for (let i = 0; i < 3; i++) {
            if (
              copy_board[i][0] === copy_board[i][1] &&
              copy_board[i][0] === copy_board[i][2] &&
              copy_board[i][1] === copy_board[i][2] &&
              copy_board[i][0] !== " "
            ) {
              if (copy_board[i][0] === "O") {

                this.alterBigBoardRow("O","WH","X","LA",i)

              } else if (copy_board[i][0] === "X") {
                this.alterBigBoardRow("X","WA","O","LH",i)                
              }
              this.setState({
                ultimateWin: true,
                ultimateWinBoard : copy_board
              });
            }
          }
          for (let i = 0; i < 3; i++) {
            if (
              copy_board[0][i] === copy_board[1][i] &&
              copy_board[0][i] === copy_board[2][i] &&
              copy_board[1][i] === copy_board[2][i] &&
              copy_board[0][i] !== " "
            ) {
              if (copy_board[0][i] === "O") {
               this.alterBigBoardColumn("O","WH","X","LA",i)
              } else if (copy_board[0][i] === "X") {
               this.alterBigBoardColumn("X","WA","O","LH",i)
                
              }
              this.setState({
                ultimateWin: true,
                ultimateWinBoard : copy_board
              });
            }
          }

          if (
            copy_board[0][0] === copy_board[1][1] &&
            copy_board[0][0] === copy_board[2][2] &&
            copy_board[1][1] === copy_board[2][2] &&
            copy_board[0][0] !== " "
          ) {
            if (copy_board[0][0] === "O") {
               this.alterBigBoardLeftDiagonal("O","WH","X","LA")
            } else if (copy_board[0][0] === "X") {
                this.alterBigBoardLeftDiagonal("X","WA","O","LH")              
            }
            this.setState({
              ultimateWin: true,
              ultimateWinBoard : copy_board
            });
          }
      
          if (
            copy_board[0][2] === copy_board[1][1] &&
            copy_board[0][2] === copy_board[2][0] &&
            copy_board[1][1] === copy_board[2][0] &&
            copy_board[0][2] !== " "
          ) {
            if (copy_board[0][2] === "O") {
                this.alterBigBoardLeftDiagonal("O","WH","X","LA")                            
            } else if (copy_board[0][2] === "X") {
                this.alterBigBoardRightDiagonal("X","WA","O","LH")                            
            }
            this.setState({
              ultimateWin: true,
              ultimateWinBoard : copy_board
            });
          }
    }

    place_partial(bigBoard,outer_row,outer_column,symbol)
    {
        // console.log("came here")
        for(let inner_row = 0; inner_row < 3; inner_row++)
        {
            for(let inner_column = 0; inner_column < 3; inner_column++)
            {
                bigBoard[outer_row][outer_column][inner_row][inner_column] = symbol
            }
        }

        let copyUltimateWinBoard_1 = this.state.ultimateWinBoard.slice()
        copyUltimateWinBoard_1[outer_row][outer_column] = symbol

        this.setState({
            bigboard : bigBoard,
            ultimateWinBoard : copyUltimateWinBoard_1
        })

        let copyUltimateWinBoard_2 = this.state.ultimateWinBoard.slice()
        this.check_ultimate_win(copyUltimateWinBoard_2)
    }

    checkPartialWin(bigBoard)
    {
        for(let outer_row = 0; outer_row < 3; outer_row++)
        {
            for(let outer_column = 0; outer_column < 3; outer_column++)
            {
                for(let i = 0; i < 3; i++)
                {
                    if( bigBoard[outer_row][outer_column][i][0] === bigBoard[outer_row][outer_column][i][1] &&
                        bigBoard[outer_row][outer_column][i][1] === bigBoard[outer_row][outer_column][i][2] &&
                        bigBoard[outer_row][outer_column][i][0] === bigBoard[outer_row][outer_column][i][2] &&
                        bigBoard[outer_row][outer_column][i][0] !== " "
                        )
                    {
                        if(bigBoard[outer_row][outer_column][i][0] === "O")
                        {
                            this.place_partial(bigBoard,outer_row,outer_column,"O");
                        }
                        else if(bigBoard[outer_row][outer_column][i][0] === "X")
                        {
                            this.place_partial(bigBoard,outer_row,outer_column,"X");
                        }
                    }
                }
            }
        }


        for(let outer_row = 0; outer_row < 3; outer_row++)
        {
            for(let outer_column = 0; outer_column < 3; outer_column++)
            {
                for(let i = 0; i < 3; i++)
                {
                    if( bigBoard[outer_row][outer_column][0][i] === bigBoard[outer_row][outer_column][1][i] &&
                        bigBoard[outer_row][outer_column][0][i] === bigBoard[outer_row][outer_column][2][i] &&
                        bigBoard[outer_row][outer_column][1][i] === bigBoard[outer_row][outer_column][2][i] &&
                        bigBoard[outer_row][outer_column][0][i] !== " "
                        )
                    {
                        if(bigBoard[outer_row][outer_column][0][i] === "O")
                        {
                            this.place_partial(bigBoard,outer_row,outer_column,"O");
                            
                        }
                        else if(bigBoard[outer_row][outer_column][0][i] === "X")
                        {
                            this.place_partial(bigBoard,outer_row,outer_column,"X");                            
                        }
                    }
                }
            }
        }


        for(let outer_row = 0; outer_row < 3; outer_row++)
        {
            for(let outer_column = 0; outer_column < 3; outer_column++)
            {
                if(bigBoard[outer_row][outer_column][0][0] === bigBoard[outer_row][outer_column][1][1] &&
                    bigBoard[outer_row][outer_column][0][0] === bigBoard[outer_row][outer_column][2][2] &&
                    bigBoard[outer_row][outer_column][1][1] === bigBoard[outer_row][outer_column][2][2] &&
                    bigBoard[outer_row][outer_column][0][0] !== " "
                    )
                    {
                        if(bigBoard[outer_row][outer_column][0][0] === "O")
                        {
                            this.place_partial(bigBoard,outer_row,outer_column,"O");                            
                        }
                        else if(bigBoard[outer_row][outer_column][0][0] === "X")
                        {
                            this.place_partial(bigBoard,outer_row,outer_column,"X");                                                        
                        }
                    }
            }
        }



        for(let outer_row = 0; outer_row < 3; outer_row++)
        {
            for(let outer_column = 0; outer_column < 3; outer_column++)
            {
                if(bigBoard[outer_row][outer_column][0][2] === bigBoard[outer_row][outer_column][1][1] &&
                    bigBoard[outer_row][outer_column][0][2] === bigBoard[outer_row][outer_column][2][0] &&
                    bigBoard[outer_row][outer_column][1][1] === bigBoard[outer_row][outer_column][2][0] &&
                    bigBoard[outer_row][outer_column][0][2] !== " "
                    )
                    {
                        if(bigBoard[outer_row][outer_column][0][2] === "O")
                        {
                            this.place_partial(bigBoard,outer_row,outer_column,"O");                                                        
                        }
                        else if(bigBoard[outer_row][outer_column][0][2] === "X")
                        {
                            this.place_partial(bigBoard,outer_row,outer_column,"X");                                                        
                        }
                    }
            }
        }
    }

    handleCellClick = (e, outerRow,outerColumn,innerRow,innerColumn) => {
        // console.log(i + " " + j + " " + ii + " " + jj)
        if(this.state.startGameValue === true && this.state.ultimateWin === false)
        {
            let copy_bigBoard = this.state.bigboard.slice()
            if(copy_bigBoard[outerRow][outerColumn][innerRow][innerColumn] === " ")
            {
                copy_bigBoard[outerRow][outerColumn][innerRow][innerColumn] = "X"

                this.setState({
                    bigBoard : copy_bigBoard
                })

                console.log(this.state.bigboard)

                let copy_bigBoard2 = this.state.bigboard.slice()

                this.checkPartialWin(copy_bigBoard2)

                if(this.state.ultimateWin === false)
                {
                    axios.get("https://redninjas-tic-tac-toe.herokuapp.com/", {
                        params: {
                            board : this.state.bigboard,
                            gameBeginner : this.state.gameBeginner,
                            outerRow : outerRow,
                            outerColumn : outerColumn,
                            innerRow : innerRow,
                            innerColumn : innerColumn 
                        },
                    }) //route to be filled according to flask route name
                    .then((res) => {
            
                    // copy_board[res.data.r][res.data.c] = "O"       /////// will uncomment when backend and frontend are bound together because for now this will give error
            
                    // this.setState({
                    //     board : copy_board
                    // })
                    })
                    .catch((err) => {
                    console.log(err);
                    });
                }
            }
        }
    }

    handleStartGame = (e,startGame) => {
    console.log(startGame)
    
    if (startGame === "Start Game")
    {
        this.setState({
          startGameButton: "Reset Game",
          startGameValue : true
        });
    }
    else if (startGame === "Reset Game")
    {
        let copy_board = this.state.bigboard;

        for(let outer_row = 0; outer_row < 3; outer_row++)
        {
            for(let outer_column = 0; outer_column < 3; outer_column++)
            {
                for(let inner_row = 0; inner_row < 3; inner_row++)
                {
                    for(let inner_column = 0; inner_column < 3; inner_column++)
                    {
                        copy_board[outer_row][outer_column][inner_row][inner_column] = " "
                    }
                }
            }
        }

        this.setState({
            bigboard: copy_board,
            gameBeginner: "",
            startGameButton: "Start Game",
            startGameValue : false
        });
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
                    this.state.bigboard.map((row, outerRow)=>(
                        <Row>
                            {
                                row.map((column, outerColumn)=> (

                                    <Col md style={cellStyle1}
                                    >
                                        {
                                            this.state.bigboard.map((inner_row,innerRow)=>(
                                            <Row>
                                            {
                                                inner_row.map((inner_column,innerColumn)=> (
                                                    <Col md style={cellStyle2}
                                                    onClick={(e) => this.handleCellClick(e,outerRow,outerColumn,innerRow,innerColumn)}>
                                                {
                                                    <div style={{textAlign:"center"}}>
                                                        {this.state.symbol[this.state.bigboard[outerRow][outerColumn][innerRow][innerColumn]]}
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

                <div style={{}}>
                        <Button
                            variant="info"
                            size="lg"
                            style={{}}
                            onClick={(e) => this.handleStartGame(e, this.state.startGameButton)}
                        >
                            {this.state.startGameButton}
                        </Button>{" "}
            </div>
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

  const cellStyle3 = {
    backgroundColor: 'pink',
    textAlign: 'center',
    border : "1px solid",
    width:"10%",
    height : 250,
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


//   <i class="far fa-grin"></i>
{/* <i class="fas fa-grin"></i> */}

{/* <i class="far fa-laugh-wink"></i> */}
{/* <i class="fas fa-laugh-wink"></i> */}

{/* <i class="far fa-sad-cry"></i> */}
{/* <i class="fas fa-sad-cry"></i> */}
