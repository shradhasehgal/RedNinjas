import React, { Component, useEffect } from "react";
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
// import { Link } from 'react-router-dom'
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Button, Container, Col, Row } from "react-bootstrap";
import axios from "axios";
// import Sky from 'react-sky';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_3x3_BoardComponent: this.props.show_3x3_BoardComponent,
      board: [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "],
      ],
      chosenCell: "",
      gameBeginner: "HUMAN",
      startGameValue: false,
      whoPlaysFirstDialog: false,
      startGameButton: "Start Game",
      symbol: {
        X: (
          <div style={{ textAlign: "center" }}>
            <i class="fas fa-user-astronaut fa-6x orange-text mr-2"></i>
          </div>
        ),
        O: (
          <div style={{ textAlign: "center" }}>
            <i class="fas fa-robot fa-6x orange-text mr-2"></i>
          </div>
        ),
        WA: (
          <div style={{ textAlign: "center" }}>
            <i class="fas fa-robot fa-6x light-green-text fa-spin mr-2"></i>
          </div>
        ),
        WH: (
          <div style={{ textAlign: "center" }}>
            <i class="fas fa-user-astronaut fa-6x green-text fa-spin mr-2"></i>
          </div>
        ),
      },
      win: false,
      depth: 2,
      undoStack: [],
    };
  }

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
        } else if (copy_board[i][0] === "X") {
          copy_board[i][0] = "WH";
          copy_board[i][1] = "WH";
          copy_board[i][2] = "WH";
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
        } else if (copy_board[0][i] === "X") {
          copy_board[0][i] = "WH";
          copy_board[1][i] = "WH";
          copy_board[2][i] = "WH";
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
      } else if (copy_board[0][0] === "X") {
        copy_board[0][0] = "WH";
        copy_board[1][1] = "WH";
        copy_board[2][2] = "WH";
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
      } else if (copy_board[0][2] === "X") {
        copy_board[0][2] = "WH";
        copy_board[1][1] = "WH";
        copy_board[2][0] = "WH";
      }
      this.setState({
        win: true,
      });
    }
  }

  handleCellClick = (e, cell) => {
    if (this.state.startGameValue && this.state.win === false) {
      this.state.undoStack.push(cell);
      let copy_board = this.state.board.slice();
      if (copy_board[Math.floor(cell / 3)][cell % 3] === " ") {
        copy_board[Math.floor(cell / 3)][cell % 3] = "X";
      }
      
      console.log('hjfhhdhf')
      this.check_win(copy_board);

      this.setState({
        board: copy_board,
      });

      const sendData = {
        gameBeginner: this.state.gameBeginner,
        board: JSON.stringify(this.state.board),
        depth: JSON.stringify(this.state.depth),
      }
      
      // useEffect(()=> {
      //     fetch("/agent").then(response =>
      //         response.json().then(data => {
      //             console.log(data)
      //         }))
      // },[])
      console.log(sendData)
      if(this.state.win === false)
      {
        axios
        .get("https://redninjas-tic-tac-toe.herokuapp.com/agent-turn", {
          params: {
            gameBeginner: this.state.gameBeginner,
            board: JSON.stringify(this.state.board),
            depth: JSON.stringify(this.state.depth)
          },
        }) //route to be filled according to flask route name
        .then((res) => {

          let copy_board = this.state.board.slice();
          console.log(res.status)
          console.log(res)
          console.log(copy_board)

          copy_board[res.data.r][res.data.c] = "O"       /////// will uncomment when backend and frontend are bound together because for now this will give error


          this.setState({
              board : copy_board
          })
        })
        .catch((err) => {
          console.log(err);
        });
      }
    }
  };

  handleStartHuman = (e) => {
    console.log("Human begins the game!");
    this.setState({
      gameBeginner: "HUMAN",
    });
  };

  handleStartAgent = (e) => {
    console.log("Agent begins the game!");
    this.setState({
      gameBeginner: "AGENT",
    });
  };

  handleStartGame = (e, startGame) => {
    console.log("The game begins!");

    // this.setState({
    //     whoPlaysFirstDialog : true
    // })

    if (startGame === "Start Game") {
      this.setState({
        startGameButton: "Reset Game",
        startGameValue: true,
      });
    } else if (startGame === "Reset Game") {
      let copy_board = this.state.board.slice();
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          copy_board[i][j] = " ";
        }
      }
      this.setState({
        board: copy_board,
        gameBeginner: "",
        whoPlaysFirstDialog: false,
        startGameButton: "Start Game",
        startGameValue: false,
        depth: "",
      });
    }
  };

  handleBeginner = (e) => {
    this.setState({
      gameBeginner: "HUMAN",
    });
  };

  handleUndoFeature = (e, index, cell) => {
    let copy_board = this.state.board.slice();
    let copy_undoStack = this.state.undoStack.slice();

    let totalOfUndoButtons = copy_undoStack.length;
    let buttonsToErase = totalOfUndoButtons - (index + 1);
    console.log(totalOfUndoButtons);
    console.log(buttonsToErase);

    for (let i = 0; i <= buttonsToErase; i++) {
      copy_board[Math.floor(copy_undoStack[copy_undoStack.length - 1] / 3)][
        copy_undoStack[copy_undoStack.length - 1] % 3
      ] = " ";
      copy_undoStack.pop();
    }
    this.setState({
      board: copy_board,
      undoStack: copy_undoStack,
    });
    // console.log(this.length())
  };

  handleDepth = (e, depth_selected) => {
    // console.log(depth_selected)
    // console.log(this.state.depth)

    if (this.state.depth === "") {
      this.setState({
        depth: depth_selected,
      });
    }
  };

  render() {
    return (

      <div
        style={{
          marginTop: "5%",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1 style={heading}>RED NINJA TIC TAC TOE</h1>
        </div>
        <Container>
          <Container fluid="true">
            {this.state.board.map((row, i) => (
              <Row>
                {row.map((cell, j) => (
                  <Col
                    md
                    style={cellStyle}
                    onClick={(e) => this.handleCellClick(e, 3 * i + j)}
                  >
                    {this.state.symbol[this.state.board[i][j]]}
                  </Col>
                ))}
              </Row>
            ))}
          </Container>
        </Container>

        <Container fluid="true">
          {this.state.undoStack.map((cell, i) => (
            <Button onClick={(e) => this.handleUndoFeature(e, i, cell)}>
              {i + 1}
            </Button>
          ))}
        </Container>

        <div style={{}}>
          <Button
            variant="info"
            size="lg"
            style={{ startButton }}
            onClick={(e) => this.handleStartGame(e, this.state.startGameButton)}
          >
            {this.state.startGameButton}
          </Button>{" "}
        </div>

        <Button variant="default" onClick={(e) => this.handleBeginner(e)}>
          Beginner
        </Button>

        <ButtonGroup aria-label="Basic example">
          <Button variant="default" onClick={(e) => this.handleDepth(e, 1)}>
            Depth 1
          </Button>
          <Button variant="default" onClick={(e) => this.handleDepth(e, 2)}>
            Depth 2
          </Button>
          <Button variant="default" onClick={(e) => this.handleDepth(e, 3)}>
            Depth 3
          </Button>
          <Button variant="default" onClick={(e) => this.handleDepth(e, 4)}>
            Depth 4
          </Button>
          <Button variant="default" onClick={(e) => this.handleDepth(e, 5)}>
            Ultimate
          </Button>
        </ButtonGroup>

        {/* <i class="fas fa-space-shuttle fa-6x orange-text mr-2"></i> */}
        {/* <i class="fas fa-rocket fa-6x orange-text mr-2"></i> */}
      </div>
    );
  }
}

// var stack = new Landing();

const cellStyle = {
  backgroundColor: "black",
  textAlign: "center",
  border: "1px solid",
  width: "10%",
  height: 185,
  padding: "3%",
};
//   border-collapse: "separate"
// }
const heading = {
  display: "inline-block",
  textAlign: "center",
  width: "80%",
  lineHeight: 1.5,
};

const startButton = {
  // position: 'absolute',
  // bottom:0,
  // right : 0
  // left:50
};

// "proxy": "http://127.0.0.1:5000/"
