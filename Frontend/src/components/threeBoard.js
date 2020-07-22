import React, { Component, useEffect } from "react";
import styles from '../static/css/board.module.css';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";
import {
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBIcon,
} from "mdbreact";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Button, Container, Col, Row } from "react-bootstrap";
import axios from "axios";
import classNames from "classnames";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import common from "../static/css/Common.module.css";
import configStyles from "../static/css/Config-mallika.module.css";


// import Sound from 'react-sound';

const soundfile = require("../static/assets/click-game.mp3")

// import soundfile from '../static/assets/click-game.mp3'

// import ThreeSound from '/threeSound.js'
let blinker;

export default class ThreeBoard extends Component {

  constructor(props) {
    super(props);
    console.log(this.props.depth)
    console.log(this.props.gameBeginner)
    this.state = {
      // show_3x3_BoardComponent: this.props.show_3x3_BoardComponent,
      board: [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "],
      ],
      human_move_number : 0,
      startGameValue: false,
      whoPlaysFirstDialog: false,
      startGameButton: "Start Game",
      turn: this.props.gameBeginner,
      win: false,
      winner: " ",
      undoStack: [],
      symbol_stack : [],
      value_beginner : " ",
      symbol: {
        X: (
          <div style={{ textAlign: "center" }} className={styles.centerDiv}>
            <i className={'fas fa-user-astronaut ' + styles.iconThree }></i>
          </div>
        ),
        O: (
          <div style={{ textAlign: "center" }}>
            <i className={'fas fa-robot ' + styles.iconThree + ' ' + styles.iconAgent}></i>
          </div>
        ),
        WA: (
          <div style={{ textAlign: "center" }}>
            <i className={'fas fa-robot fa-spin ' + styles.iconThree + ' '+ styles.iconAgent}></i>
          </div>
        ),
        WH: (
          <div style={{ textAlign: "center" }}>
            <i className={'fas fa-user-astronaut fa-spin ' + styles.iconThree }></i>
          </div>
        )
      },
      darkMode: true,
      heading: "RED NINJA TIC TAC TOE",
      highlightButton: true
    };
  }

  componentDidMount() {
    this.startBlinker();
  }

  startBlinker(){
    blinker = setInterval(() => {
      let newHighlight = !this.state.highlightButton;
      if(!this.state.startGameValue)
        this.setState({ highlightButton: newHighlight });
    }, 400);
  }

  stopBlinker(){
    clearInterval(blinker);
  }

  playAudio() {
    console.log("came to hear sound")
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }


  // componentDidMount () {
  //   const audioEl = document.getElementsByClassName("audio-element")[0]
  //   audioEl.play()
  // }

  // pop()  {
  //     // return top most element in the stack
  //     // and removes it from the stack
  //     // Underflow if stack is empty
  //     if (this.state.data.length == 0) {
  //         return "Underflow";
  //     } else {
  //     return this.state.data.pop();
  //     }
  // }

  //     top () {
  //       return this.data.length;
  //     }

  //     push (...element) {
  //         for (var i of element) {
  //             return this.state.data.push(i)
  //         }
  //     }

  // // peek() method looks at the object at the top of this stack
  // // without removing it from the stack.
  // // The stack is not modified (it does not remove the element;
  // // it only returns the element for information purposes).

  //     peek () {
  //         return this.state.data[this.state.data.length - 1];
  //     }

  //     clear () {
  //         return this.state.data = [];
  //     }

  //     length(){
  //         // console.log(this.state.data.length)
  //       return this.state.data.length;
  //   }

  //     search (value) {
  //         for (let i = 0; i < this.state.data.length; i++) {
  //             if (this.state.data[i] === value) {
  //                 return value;
  //             } else {
  //                 return false;
  //             }
  //         }
  //     }




  checkTie(copy_board)
  {
    let tie_flag = true

    for(let i = 0; i < 3; i++)
    {
      for(let j = 0; j < 3; j++)
      {
        if(copy_board[i][j] === " ")
        {
          tie_flag = false
        }
      }
    }
    if(tie_flag === true)
    {
      this.setState({
        win : true,
        winner : "TIE",
        heading: "IT'S A TIE!"
      })
    }
  }


  setWinner(gameWinner) {
    let topHeading = "HOUSTON, YOU DID IT!  🎉"
    if (gameWinner=="AGENT")
      topHeading = "ROBOT'S WIN 🙁"

    this.setState({
      winner: gameWinner,
      heading: topHeading
    })
  }

  changeMode(darkMode) {
    this.setState({darkMode: !darkMode})
  }

  check_win(copy_board) {
    for (let i = 0; i < 3; i++) {
      if (
        copy_board[i][0] === copy_board[i][1] &&
        copy_board[i][0] === copy_board[i][2] &&
        copy_board[i][1] === copy_board[i][2] &&
        copy_board[i][0] !== " "
      ) {
        if (copy_board[i][0] === "O") {
          copy_board[i][0] = "WA";
          copy_board[i][1] = "WA";
          copy_board[i][2] = "WA";

          this.setWinner("AGENT");

        } else if (copy_board[i][0] === "X") {
          copy_board[i][0] = "WH";
          copy_board[i][1] = "WH";
          copy_board[i][2] = "WH";

          this.setWinner("HUMAN")

        }
        this.setState({
          win: true,
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
          copy_board[0][i] = "WA";
          copy_board[1][i] = "WA";
          copy_board[2][i] = "WA";

          this.setWinner("AGENT")

        } else if (copy_board[0][i] === "X") {
          copy_board[0][i] = "WH";
          copy_board[1][i] = "WH";
          copy_board[2][i] = "WH";

          this.setWinner("HUMAN")

        }
        this.setState({
          win: true,
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
        copy_board[0][0] = "WA";
        copy_board[1][1] = "WA";
        copy_board[2][2] = "WA";

        this.setWinner("AGENT")

      } else if (copy_board[0][0] === "X") {
        copy_board[0][0] = "WH";
        copy_board[1][1] = "WH";
        copy_board[2][2] = "WH";

        this.setWinner("HUMAN")

      }
      this.setState({
        win: true,
      });
    }

    if (
      copy_board[0][2] === copy_board[1][1] &&
      copy_board[0][2] === copy_board[2][0] &&
      copy_board[1][1] === copy_board[2][0] &&
      copy_board[0][2] !== " "
    ) {
      if (copy_board[0][2] === "O") {
        copy_board[0][2] = "WA";
        copy_board[1][1] = "WA";
        copy_board[2][0] = "WA";

        this.setWinner("AGENT")

      } else if (copy_board[0][2] === "X") {
        copy_board[0][2] = "WH";
        copy_board[1][1] = "WH";
        copy_board[2][0] = "WH";

        this.setWinner("HUMAN")

      }
      this.setState({
        win: true
      });
    }

    if(this.state.win === false)
    {
      this.checkTie(copy_board)
    }
  }


  sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  handleCellClick = (e, cell) => {
    // console.log(this.state.turn)
    // console.log("came to handle cell click")
    if (this.state.startGameValue && this.state.win === false && this.state.turn === "HUMAN") {
      // this.state.undoStack.push(cell);
      let copy_board = this.state.board.slice();
      if (copy_board[Math.floor(cell / 3)][cell % 3] === " ") {
        // this.playAudio()
        copy_board[Math.floor(cell / 3)][cell % 3] = "X";

        this.state.undoStack.push(cell)
        this.state.symbol_stack.push("H")

      }
      this.setState({
        board: copy_board,
        turn: "AGENT",
        human_move_number : this.state.human_move_number + 1,
        heading: "AGENT'S TURN"
      });

      let copy_board2 = this.state.board.slice();
      this.check_win(copy_board2);

      this.sleep(1).then(() => {

        if (this.state.win === false) {
          axios
            .get("https://redninjas-tic-tac-toe.herokuapp.com/agent-turn", {
              params: {
                gameBeginner: this.props.gameBeginner,
                board: JSON.stringify(this.state.board),
                depth: JSON.stringify(this.props.depth)
              },
            }) //route to be filled according to flask route name
            .then((res) => {

              let copy_board = this.state.board.slice();
              console.log(res.data)
              console.log(res.status)

              copy_board[res.data.r][res.data.c] = "O"       /////// will uncomment when backend and frontend are bound together because for now this will give error
              this.state.undoStack.push(3 * res.data.r + res.data.c)

              this.state.symbol_stack.push("A")

              if (this.state.startGameButton === "Reset Game") {
                this.setState({
                  board: copy_board,
                  turn: "HUMAN",
                  heading: "YOUR TURN"
                })
                let copy_board3 = this.state.board.slice();
                this.check_win(copy_board3);

                console.log()
                if (this.state.win === true) {
                  console.log('hellllllllllllooooooo')
                  this.sleep(5).then(() => {
                    this.props.update_Win_Three("three", this.state.winner)
                  })
                }
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
        else {
          console.log("win here!!")
          this.sleep(5).then(() => {
            this.props.update_Win_Three("three", this.state.winner)

          })
        }
      })
    }
  };

  handleStartGame = (e, startGame) => {

    if(this.props.gameBeginner === "AGENT")
    {
      this.setState({
        value_beginner : 0,
      })
    }
    else
    {
      this.setState({
        value_beginner : 1
      })
    }
    // console.log("The game begins!");
    // console.log(this.state.gameBeginner)

    this.playAudio()

    if (startGame === "Start Game") {
      let topHeading = "YOUR TURN"
      if(this.props.gameBeginner === "AGENT")
        topHeading = "AGENT'S TURN"

      this.setState({
        startGameButton: "Reset Game",
        startGameValue: true,
        heading: topHeading,
        highlightButton: false
      });
      this.stopBlinker();
    }
    else if (startGame === "Reset Game") {

      this.setState({
        board: [
          [" ", " ", " "],
          [" ", " ", " "],
          [" ", " ", " "],
        ],
        // gameBeginner: " ",
        startGameValue: false,
        whoPlaysFirstDialog: false,
        startGameButton: "Start Game",
        win: false,
        winner: " ",
        depth: this.props.depth,
        undoStack: [],
        symbol_stack : [],
        turn: this.props.gameBeginner,
        heading: "RED NINJA TIC TAC TOE"
      });

      this.startBlinker();
      if(this.props.gameBeginner === "AGENT")
      {
        this.setState({
          value_beginner : 0
        })
      }
      else
      {
        this.setState({
          value_beginner : 1
        })
      }
  }
    if (this.props.gameBeginner === "AGENT") {
      axios
        .get("https://redninjas-tic-tac-toe.herokuapp.com/agent-turn", {
          params: {
            gameBeginner: this.props.gameBeginner,
            board: JSON.stringify(this.state.board),
            depth: JSON.stringify(this.props.depth)
          },
        }) //route to be filled according to flask route name
        .then((res) => {

          let copy_board = this.state.board.slice();

          copy_board[res.data.r][res.data.c] = "O"       /////// will uncomment when backend and frontend are bound together because for now this will give error
          this.state.undoStack.push(3 * res.data.r + res.data.c)
          this.state.symbol_stack.push("A")
          if (this.state.startGameButton === "Reset Game") {
            this.setState({
              board: copy_board,
              turn: "HUMAN",
              heading:"YOUR TURN"
            })
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };


  handleUndoFeature = (e, index, cell) => {
    let copy_board = this.state.board.slice();
    let copy_undoStack = this.state.undoStack.slice();
    let copy_symbol_stack = this.state.symbol_stack.slice();

    let totalOfUndoButtons = copy_undoStack.length;
    let buttonsToErase = totalOfUndoButtons - (index + 1);

    for (let i = 0; i <= buttonsToErase; i++) {
      copy_board[Math.floor(copy_undoStack[copy_undoStack.length - 1] / 3)][
        copy_undoStack[copy_undoStack.length - 1] % 3
      ] = " ";
      copy_undoStack.pop();
    }

      for (let i = 0; i <= buttonsToErase; i++) {
        copy_symbol_stack.pop();
    }

    this.setState({
      board: copy_board,
      undoStack: copy_undoStack,
      symbol_stack : copy_symbol_stack,
      turn : "HUMAN",
      heading: "YOUR TURN"
    });

  };

  render() {
    return (
      <div>
        <div className={classNames(styles.landingBody,{
          [styles.whiteBg]: !this.state.darkMode
        }
      )}>

          <div style={{ margin: "auto", width: "600px", maxWidth: "90%" }}>
            <Container className={classNames(styles.heading, {[styles.lightHeading] : !this.state.darkMode})}>
              <Row><Col> <h1 className={styles.title}>{this.state.heading}</h1></Col></Row>
            </Container>

            <Container style={{ maxWidth: "600px" }}>
              <Container fluid="true">
                {this.state.board.map((row, i) => (
                  <Row>
                    {row.map((cell, j) => (
                      <Col
                        md
                        className={classNames(styles.cellThree, {[styles.greyCell]: !this.state.darkMode})}
                        onClick={(e) => this.handleCellClick(e, 3 * i + j)}
                      >
                        {this.state.symbol[this.state.board[i][j]]}
                      </Col>
                    ))}
                  </Row>
                ))}
              </Container>
            </Container>



            <Container className={classNames(styles.boardInfo, {[styles.lightHeading]: !this.state.darkMode})}>
              <Row style={{padding: "1%"}}>
              <Col  xs={4} className = {styles.center}>Level: {this.props.depth === -1 ? 5 : this.props.depth}</Col>
                <Col  className = {styles.center}><i class="fa fa-sun" aria-hidden="true"></i></Col>
                <Col className = {styles.center}>
                <span>{ this.state.darkMode
                  ? <i class="fa fa-2x fa-toggle-on" style={{cursor :"pointer"}} onClick = {() => this.changeMode(this.state.darkMode)} aria-hidden="true"></i>
                  :<i class="fa fa-2x fa-toggle-off" style={{cursor :"pointer"}} onClick = {() => this.changeMode(this.state.darkMode)} aria-hidden="true"></i>
                }</span>
                </Col>
                <Col  className = {styles.center}><i class="fa fa-moon" aria-hidden="true"></i></Col>
                <Col  xs={4}><Button
                variant="dark"
                className={classNames(styles.button, {[styles.lightHeading]: !this.state.darkMode, [styles.highlightButton]: this.state.highlightButton})}
                onClick={(e) => this.handleStartGame(e, this.state.startGameButton)}
              >
                {this.state.startGameButton}
              </Button></Col>
              </Row>
            </Container>
            {this.state.win === false ? 
            <Container fluid="true" className={classNames(styles.undo, {[styles.lightUndo]: !this.state.darkMode})}> 
            {
              this.state.symbol_stack.length  > 1 || this.state.symbol_stack[0] == "H" ? 'Reverse to ': ''
            }
              {this.state.symbol_stack.map((cell, i) => (
                  this.state.symbol_stack[i] === "H" ? <Button variant={ this.state.darkMode
                    ? "dark"
                    : "light"
                  }

                  onClick={(e) => this.handleUndoFeature(e, i, cell)}>
                    {Math.ceil((i + 1)/2) + (i + 1)%2 - this.state.value_beginner}
                  </Button> : <></>
              ))}
            </Container> : " "}
            {/* <audio className="audio-element">
            <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source>
        </audio> */}

            <audio className="audio-element">
              <source src = "soundfile"></source>
            </audio> 

            {/* <i class="fas fa-space-shuttle fa-6x orange-text mr-2"></i> */}
            {/* <i class="fas fa-rocket fa-6x orange-text mr-2"></i> */}
          </div>
        </div>
      </div>
    );
  }
}

const heading = {
  display: "inline-block",
  textAlign: "center",
  width: "80%",
  lineHeight: 1.5,
};

const startButton = {
};