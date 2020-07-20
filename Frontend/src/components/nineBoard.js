import React, { Component, useEffect } from 'react'
import styles from '../static/css/board.module.css'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import { MDBRow, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol, MDBIcon } from "mdbreact";
// import { Link } from 'react-router-dom'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { Button, Container, Col, Row } from 'react-bootstrap'
import axios from 'axios';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import classNames from "classnames";



export default class NineBoard extends Component {
    constructor(props) {
        super(props)
    console.log(this.props.gameBeginner)

        this.state = {
            show_9x9_BoardComponent: this.props.show_9x9_BoardComponent,
            startGameButton: "Start Game",
            turn: this.props.gameBeginner,
            startGameValue: false,
            ultimateWin: false,
            winner : " ",
            // gameBeginner: " ",
            rowToPlace: " ",
            columnToPlace: " ",
            moveNumber: 1,
            ultimateWinBoard: [
                [" ", " ", " "],
                [" ", " ", " "],
                [" ", " ", " "],
            ],
            bigboard: [

                [[[" ", " ", " "],
                [" ", " ", " "],
                [" ", " ", " "]],

                [[" ", " ", " "],
                [" ", " ", " "],
                [" ", " ", " "]],

                [[" ", " ", " "],
                [" ", " ", " "],
                [" ", " ", " "]]],

                [[[" ", " ", " "],
                [" ", " ", " "],
                [" ", " ", " "]],

                [[" ", " ", " "],
                [" ", " ", " "],
                [" ", " ", " "]],

                [[" ", " ", " "],
                [" ", " ", " "],
                [" ", " ", " "]]],

                [[[" ", " ", " "],
                [" ", " ", " "],
                [" ", " ", " "]],

                [[" ", " ", " "],
                [" ", " ", " "],
                [" ", " ", " "]],

                [[" ", " ", " "],
                [" ", " ", " "],
                [" ", " ", " "]]]

            ],

            symbol: {
                X: <div style={{ textAlign: "center" }}>
                    <i className={'fas fa-times amber-text ' + styles.iconNine}></i>

                    {/* <i class="fas fa-times fa-2x amber-text mr-2"></i> */}
                    {/* <i class="far fa-grin fa-3x amber-text mr-2"></i> */}
                </div>,
                O: <div style={{ textAlign: "center" }}>
                    <i className={"far fa-circle pink-text " + styles.iconNine}></i>

                    {/* <i class="far fa-circle fa-2x pink-text mr-2"></i> */}
                    {/* <i class="fas fa-grin fa-3x pink-text mr-2"></i> */}
                </div>,
                WA: <div style={{ textAlign: "center" }}>
                    <i className={"fas fa-laugh-wink amber-text " + styles.iconNine}></i>

                    {/* <i class="fas fa-times fa-2x amber-text mr-2"></i> */}
                    {/* <i class="fas fa-robot fa-2x light-green-text mr-2"></i> */}
                </div>,
                WH: <div style={{ textAlign: "center" }}>
                    <i className={"far fa-laugh-wink pink-text " + styles.iconNine}></i>

                    {/* <i class="fas fa-user-astronaut fa-2x green-text mr-2"></i> */}
                    {/* <i class="far fa-circle fa-2x pink-text mr-2"></i> */}
                </div>,
                LA: <div style={{ textAlign: "center" }}>
                    <i className={"fas fa-sad-cry amber-text " + styles.iconNine}></i>

                    {/* <i class="fas fa-times fa-2x amber-text mr-2"></i> */}
                    {/* <i class="fas fa-robot fa-2x light-green-text mr-2"></i> */}
                </div>,
                LH: <div style={{ textAlign: "center" }}>
                    <i className={"far fa-sad-cry pink-text " + styles.iconNine}></i>

                    {/* <i class="fas fa-user-astronaut fa-2x green-text mr-2"></i> */}
                    {/* <i class="far fa-circle fa-2x pink-text mr-2"></i> */}
                </div>
            }
        }
    }

    alterBigBoardRow(winner_symbol, winner_status, loser_symbol, loser_status, win_row) {
        let copy_bigBoard = this.state.bigboard.slice()
        for (let outer_row = 0; outer_row < 3; outer_row++) {
            for (let outer_column = 0; outer_column < 3; outer_column++) {
                for (let inner_row = 0; inner_row < 3; inner_row++) {
                    for (let inner_column = 0; inner_column < 3; inner_column++) {
                        if (outer_row === win_row) {
                            copy_bigBoard[outer_row][outer_column][inner_row][inner_column] = winner_status
                        }
                        else {
                            if (copy_bigBoard[outer_row][outer_column][inner_row][inner_column] === winner_symbol) {
                                copy_bigBoard[outer_row][outer_column][inner_row][inner_column] = winner_status
                            }
                            else if (copy_bigBoard[outer_row][outer_column][inner_row][inner_column] === loser_symbol) {
                                copy_bigBoard[outer_row][outer_column][inner_row][inner_column] = loser_status
                            }
                        }
                    }
                }
            }
        }

        this.setState({
            bigboard: copy_bigBoard
        })
    }

    alterBigBoardColumn(winner_symbol, winner_status, loser_symbol, loser_status, win_column) {
        let copy_bigBoard = this.state.bigboard.slice()

        for (let outer_row = 0; outer_row < 3; outer_row++) {
            for (let outer_column = 0; outer_column < 3; outer_column++) {
                for (let inner_row = 0; inner_row < 3; inner_row++) {
                    for (let inner_column = 0; inner_column < 3; inner_column++) {
                        if (outer_column === win_column) {
                            copy_bigBoard[outer_row][outer_column][inner_row][inner_column] = winner_status
                        }
                        else {
                            if (copy_bigBoard[outer_row][outer_column][inner_row][inner_column] === winner_symbol) {
                                copy_bigBoard[outer_row][outer_column][inner_row][inner_column] = winner_status
                            }
                            else if (copy_bigBoard[outer_row][outer_column][inner_row][inner_column] === loser_symbol) {
                                copy_bigBoard[outer_row][outer_column][inner_row][inner_column] = loser_status
                            }
                        }
                    }
                }
            }
        }

        this.setState({
            bigboard: copy_bigBoard
        })
    }

    alterBigBoardLeftDiagonal(winner_symbol, winner_status, loser_symbol, loser_status) {
        let copy_bigBoard = this.state.bigboard.slice()

        for (let outer_row = 0; outer_row < 3; outer_row++) {
            for (let outer_column = 0; outer_column < 3; outer_column++) {
                for (let inner_row = 0; inner_row < 3; inner_row++) {
                    for (let inner_column = 0; inner_column < 3; inner_column++) {
                        if ((outer_row === 0 && outer_column === 0) || (outer_row === 1 && outer_column === 1) || (outer_row === 2 && outer_column === 2)) {
                            copy_bigBoard[outer_row][outer_column][inner_row][inner_column] = winner_status
                        }
                        else {
                            if (copy_bigBoard[outer_row][outer_column][inner_row][inner_column] === winner_symbol) {
                                copy_bigBoard[outer_row][outer_column][inner_row][inner_column] = winner_status
                            }
                            else if (copy_bigBoard[outer_row][outer_column][inner_row][inner_column] === loser_symbol) {
                                copy_bigBoard[outer_row][outer_column][inner_row][inner_column] = loser_status
                            }
                        }
                    }
                }
            }
        }
        this.setState({
            bigboard: copy_bigBoard
        })
    }

    alterBigBoardRightDiagonal(winner_symbol, winner_status, loser_symbol, loser_status) {
        let copy_bigBoard = this.state.bigboard.slice()
        for (let outer_row = 0; outer_row < 3; outer_row++) {
            for (let outer_column = 0; outer_column < 3; outer_column++) {
                for (let inner_row = 0; inner_row < 3; inner_row++) {
                    for (let inner_column = 0; inner_column < 3; inner_column++) {
                        if ((outer_row === 0 && outer_column === 2) || (outer_row === 1 && outer_column === 1) || (outer_row === 2 && outer_column === 0)) {
                            copy_bigBoard[outer_row][outer_column][inner_row][inner_column] = winner_status
                        }
                        else {
                            if (copy_bigBoard[outer_row][outer_column][inner_row][inner_column] === winner_symbol) {
                                copy_bigBoard[outer_row][outer_column][inner_row][inner_column] = winner_status
                            }
                            else if (copy_bigBoard[outer_row][outer_column][inner_row][inner_column] === loser_symbol) {
                                copy_bigBoard[outer_row][outer_column][inner_row][inner_column] = loser_status
                            }
                        }
                    }
                }
            }
        }
        this.setState({
            bigboard: copy_bigBoard
        })
    }


    setWinner(gameWinner)
    {
        this.setState({
            winner : gameWinner
        })
    }

    check_ultimate_win(copy_board) {

        if (this.state.ultimateWin === false) {
            for (let i = 0; i < 3; i++) { //for row
                if (
                    copy_board[i][0] === copy_board[i][1] &&
                    copy_board[i][0] === copy_board[i][2] &&
                    copy_board[i][1] === copy_board[i][2] &&
                    copy_board[i][0] !== " "
                ) {
                    if (copy_board[i][0] === "O") {

                        this.alterBigBoardRow("O", "WH", "X", "LA", i)
                        this.setWinner("HUMAN")

                    } else if (copy_board[i][0] === "X") {
                        this.alterBigBoardRow("X", "WA", "O", "LH", i)
                        this.setWinner("AGENT")
                    }
                    this.setState({
                        ultimateWin: true,
                        ultimateWinBoard: copy_board
                    });
                }
            }

        }

        if (this.state.ultimateWin === false) {
            for (let i = 0; i < 3; i++) { // for column
                if (
                    copy_board[0][i] === copy_board[1][i] &&
                    copy_board[0][i] === copy_board[2][i] &&
                    copy_board[1][i] === copy_board[2][i] &&
                    copy_board[0][i] !== " "
                ) {
                    if (copy_board[0][i] === "O") {
                        this.alterBigBoardColumn("O", "WH", "X", "LA", i)
                        this.setWinner("HUMAN")

                    } else if (copy_board[0][i] === "X") {
                        this.alterBigBoardColumn("X", "WA", "O", "LH", i)
                        this.setWinner("AGENT")

                    }
                    this.setState({
                        ultimateWin: true,
                        ultimateWinBoard: copy_board
                    });
                }
            }
        }

        if (this.state.ultimateWin === false) {
            if (
                copy_board[0][0] === copy_board[1][1] &&
                copy_board[0][0] === copy_board[2][2] &&
                copy_board[1][1] === copy_board[2][2] &&
                copy_board[0][0] !== " "
            ) {
                if (copy_board[0][0] === "O") {
                    this.alterBigBoardLeftDiagonal("O", "WH", "X", "LA")
                    this.setWinner("HUMAN")

                } else if (copy_board[0][0] === "X") {
                    this.alterBigBoardLeftDiagonal("X", "WA", "O", "LH")
                    this.setWinner("AGENT")
                }
                this.setState({
                    ultimateWin: true,
                    ultimateWinBoard: copy_board
                });
            }
        }

        if (this.state.ultimateWin === false) {
            if (
                copy_board[0][2] === copy_board[1][1] &&
                copy_board[0][2] === copy_board[2][0] &&
                copy_board[1][1] === copy_board[2][0] &&
                copy_board[0][2] !== " "
            ) {
                if (copy_board[0][2] === "O") {
                    this.alterBigBoardLeftDiagonal("O", "WH", "X", "LA")
                    this.setWinner("HUMAN")

                } else if (copy_board[0][2] === "X") {
                    this.alterBigBoardRightDiagonal("X", "WA", "O", "LH")
                    this.setWinner("AGENT")
                }
                this.setState({
                    ultimateWin: true,
                    ultimateWinBoard: copy_board
                });
            }
        }
    }

    place_partial(bigBoard, outer_row, outer_column, symbol) {
        for (let inner_row = 0; inner_row < 3; inner_row++) {
            for (let inner_column = 0; inner_column < 3; inner_column++) {
                bigBoard[outer_row][outer_column][inner_row][inner_column] = symbol
            }
        }

        let copyUltimateWinBoard_1 = this.state.ultimateWinBoard.slice()
        copyUltimateWinBoard_1[outer_row][outer_column] = symbol

        this.setState({
            bigboard: bigBoard,
            ultimateWinBoard: copyUltimateWinBoard_1
        })

        let copyUltimateWinBoard_2 = this.state.ultimateWinBoard.slice()
        this.check_ultimate_win(copyUltimateWinBoard_2)
    }

    checkPartialWin(bigBoard) {
        for (let outer_row = 0; outer_row < 3; outer_row++) {
            for (let outer_column = 0; outer_column < 3; outer_column++) {
                for (let i = 0; i < 3; i++) {
                    if (bigBoard[outer_row][outer_column][i][0] === bigBoard[outer_row][outer_column][i][1] &&
                        bigBoard[outer_row][outer_column][i][1] === bigBoard[outer_row][outer_column][i][2] &&
                        bigBoard[outer_row][outer_column][i][0] === bigBoard[outer_row][outer_column][i][2] &&
                        bigBoard[outer_row][outer_column][i][0] !== " "
                    ) {
                        if (bigBoard[outer_row][outer_column][i][0] === "O") {
                            this.place_partial(bigBoard, outer_row, outer_column, "O");
                        }
                        else if (bigBoard[outer_row][outer_column][i][0] === "X") {
                            this.place_partial(bigBoard, outer_row, outer_column, "X");
                        }
                    }
                }
            }
        }


        for (let outer_row = 0; outer_row < 3; outer_row++) {
            for (let outer_column = 0; outer_column < 3; outer_column++) {
                for (let i = 0; i < 3; i++) {
                    if (bigBoard[outer_row][outer_column][0][i] === bigBoard[outer_row][outer_column][1][i] &&
                        bigBoard[outer_row][outer_column][0][i] === bigBoard[outer_row][outer_column][2][i] &&
                        bigBoard[outer_row][outer_column][1][i] === bigBoard[outer_row][outer_column][2][i] &&
                        bigBoard[outer_row][outer_column][0][i] !== " "
                    ) {
                        if (bigBoard[outer_row][outer_column][0][i] === "O") {
                            this.place_partial(bigBoard, outer_row, outer_column, "O");

                        }
                        else if (bigBoard[outer_row][outer_column][0][i] === "X") {
                            this.place_partial(bigBoard, outer_row, outer_column, "X");
                        }
                    }
                }
            }
        }


        for (let outer_row = 0; outer_row < 3; outer_row++) {
            for (let outer_column = 0; outer_column < 3; outer_column++) {
                if (bigBoard[outer_row][outer_column][0][0] === bigBoard[outer_row][outer_column][1][1] &&
                    bigBoard[outer_row][outer_column][0][0] === bigBoard[outer_row][outer_column][2][2] &&
                    bigBoard[outer_row][outer_column][1][1] === bigBoard[outer_row][outer_column][2][2] &&
                    bigBoard[outer_row][outer_column][0][0] !== " "
                ) {
                    if (bigBoard[outer_row][outer_column][0][0] === "O") {
                        this.place_partial(bigBoard, outer_row, outer_column, "O");
                    }
                    else if (bigBoard[outer_row][outer_column][0][0] === "X") {
                        this.place_partial(bigBoard, outer_row, outer_column, "X");
                    }
                }
            }
        }



        for (let outer_row = 0; outer_row < 3; outer_row++) {
            for (let outer_column = 0; outer_column < 3; outer_column++) {
                if (bigBoard[outer_row][outer_column][0][2] === bigBoard[outer_row][outer_column][1][1] &&
                    bigBoard[outer_row][outer_column][0][2] === bigBoard[outer_row][outer_column][2][0] &&
                    bigBoard[outer_row][outer_column][1][1] === bigBoard[outer_row][outer_column][2][0] &&
                    bigBoard[outer_row][outer_column][0][2] !== " "
                ) {
                    if (bigBoard[outer_row][outer_column][0][2] === "O") {
                        this.place_partial(bigBoard, outer_row, outer_column, "O");
                    }
                    else if (bigBoard[outer_row][outer_column][0][2] === "X") {
                        this.place_partial(bigBoard, outer_row, outer_column, "X");
                    }
                }
            }
        }
    }



    checkValidityOfMove(outer_row, outer_column) {
        if (this.state.ultimateWinBoard[this.state.rowToPlace][this.state.columnToPlace] === " ") {
            if (outer_row !== this.state.rowToPlace)
                return false
            else if (outer_column !== this.state.columnToPlace)
                return false
            else if (outer_row === this.state.rowToPlace && outer_column === this.state.columnToPlace)
                return true
        }
        else
            return true
    }



    sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }

    handleCellClick = (e, outerRow, outerColumn, innerRow, innerColumn) => {
        if (this.state.startGameValue === true && this.state.ultimateWin === false && this.state.turn === "HUMAN") {
            let copy_bigBoard1 = this.state.bigboard.slice()
            if (copy_bigBoard1[outerRow][outerColumn][innerRow][innerColumn] === " ") {
                if (this.state.moveNumber !== 1) {
                    if (this.checkValidityOfMove(outerRow, outerColumn) === true) {
                        copy_bigBoard1[outerRow][outerColumn][innerRow][innerColumn] = "O"

                        this.setState({
                            bigboard: copy_bigBoard1,
                            turn: "AGENT"
                        })

                        let copy_bigBoard2 = this.state.bigboard.slice()
                        this.checkPartialWin(copy_bigBoard2)


                        this.sleep(0.5).then(() => {
                        
                            if (this.state.ultimateWin === false) {
                                axios.get("https://redninjas-tic-tac-toe.herokuapp.com/agent-turn-ultimate", {
                                    params: {
                                        board: JSON.stringify(this.state.bigboard),
                                        checkboard: JSON.stringify(this.state.ultimateWinBoard),
                                        previous_move: JSON.stringify([outerRow, outerColumn, innerRow, innerColumn])
                                    },
                                }) //route to be filled according to flask route name
                                    .then((res) => {
                                        console.log(res.data)
                                        let copy_board1 = this.state.bigboard.slice()
                                        copy_board1[res.data["agent-move"][0]][res.data["agent-move"][1]][res.data["agent-move"][2]][res.data["agent-move"][3]] = "X"
                                        if (this.state.startGameButton === "Reset Game") {
                                            this.setState({
                                                bigboard: copy_board1,
                                                moveNumber: this.moveNumber + 1,
                                                rowToPlace: res.data["agent-move"][2],
                                                columnToPlace: res.data["agent-move"][3],
                                                turn: "HUMAN"
                                            })

                                            let copy_bigBoard2 = this.state.bigboard.slice()
                                            this.checkPartialWin(copy_bigBoard2)

                                            this.sleep(0.5).then(() => {
                                                if(this.state.win === true)
                                                {
                                                    this.sleep(2).then(() => {
                                                        // if(this.state.winner === "HUMAN")
                                                        // {
                                                        //     window.location.href = '/win_player_nine'
                                                        // }
                                                        // else
                                                        // {
                                                        // console.log("win here plisssss!!")
                                                        // window.location.href = '/lose_player_nine'
                                                        // }
                                                        this.props.update_Win_Nine("nine",this.state.winner)

                                                })
                                                }
                                            })
                                        }
                                    })
                                    .catch((err) => {
                                        console.log(err);
                                    });
                            }
                            else
                            {
                                console.log("win here!!")
                                this.sleep(2).then(() => {
                                    // if(this.state.winner === "HUMAN")
                                    // {
                                    //     window.location.href = '/win_player_nine'
                                    // }
                                    // else
                                    // {
                                    // console.log("win here plisssss!!")
                                    // window.location.href = '/lose_player_nine'
                                    // }
                                    this.props.update_Win_Nine("nine",this.state.winner)
                                })
                            }
                        }
                        )}
                    else {
                        console.log("try again")
                    }
                }
                else {

                    let copy_bigBoard1 = this.state.bigboard.slice()

                    copy_bigBoard1[outerRow][outerColumn][innerRow][innerColumn] = "O"

                    this.setState({
                        bigboard: copy_bigBoard1,
                        turn: "AGENT"
                    })
                    axios.get("https://redninjas-tic-tac-toe.herokuapp.com/agent-turn-ultimate", {
                        params: {
                            board: JSON.stringify(this.state.bigboard),
                            checkboard: JSON.stringify(this.state.ultimateWinBoard),
                            previous_move: JSON.stringify([outerRow, outerColumn, innerRow, innerColumn])
                        },
                    }) //route to be filled according to flask route name
                        .then((res) => {
                            console.log(res.data)
                            let copy_board1 = this.state.bigboard.slice()

                            copy_board1[res.data["agent-move"][0]][res.data["agent-move"][1]][res.data["agent-move"][2]][res.data["agent-move"][3]] = "X"
                            if (this.state.startGameButton === "Reset Game") {
                                this.setState({
                                    bigboard: copy_board1,
                                    moveNumber: this.moveNumber + 1,
                                    rowToPlace: res.data["agent-move"][2],
                                    columnToPlace: res.data["agent-move"][3],
                                    turn: "HUMAN"
                                })
                                let copy_bigBoard2 = this.state.bigboard.slice()
                                this.checkPartialWin(copy_bigBoard2)
                            }
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                }
            }
        }
    }

    handleStartGame = (e, startGame) => {

        if (startGame === "Start Game") {
            this.setState({
                startGameButton: "Reset Game",
                startGameValue: true
            });
        }
        else if (startGame === "Reset Game") {
            let copy_board = this.state.bigboard;

            for (let outer_row = 0; outer_row < 3; outer_row++) {
                for (let outer_column = 0; outer_column < 3; outer_column++) {
                    for (let inner_row = 0; inner_row < 3; inner_row++) {
                        for (let inner_column = 0; inner_column < 3; inner_column++) {
                            copy_board[outer_row][outer_column][inner_row][inner_column] = " "
                        }
                    }
                }
            }

            this.setState({
                bigboard: copy_board,
                gameBeginner: this.props.gameBeginner,
                startGameButton: "Start Game",
                startGameValue: false,
                ultimateWin: false,
                winner : " ",
                rowToPlace: " ",
                columnToPlace: " ",
                moveNumber: 1,
                ultimateWinBoard: [
                    [" ", " ", " "],
                    [" ", " ", " "],
                    [" ", " ", " "],
                ],
                turn : this.props.gameBeginner
            });
        }

        if (this.state.turn === "AGENT") {
            axios.get("https://redninjas-tic-tac-toe.herokuapp.com/agent-turn-ultimate", {
                params: {
                    board: JSON.stringify(this.state.bigboard),
                    checkboard: JSON.stringify(this.state.ultimateWinBoard),
                    previous_move: JSON.stringify([-1, -1, -1, -1])
                },
            }) //route to be filled according to flask route name
                .then((res) => {

                    let copy_board1 = this.state.bigboard.slice()
                    copy_board1[res.data["agent-move"][0]][res.data["agent-move"][1]][res.data["agent-move"][2]][res.data["agent-move"][3]] = "X"

                    if (this.state.startGameButton === "Reset Game") {
                        this.setState({
                            bigboard: copy_board1,
                            rowToPlace: res.data["agent-move"][2],
                            columnToPlace: res.data["agent-move"][3],
                            moveNumber: this.moveNumber + 1,
                            turn: "HUMAN"
                        })
                        let copy_bigBoard2 = this.state.bigboard.slice()
                        this.checkPartialWin(copy_bigBoard2)
                    }
                })
        }
    }

    render() {
        return (
            <div className={classNames(styles.landingBody,{
                [styles.whiteBg]: !this.state.darkMode
              })}>
                <div style={{ margin: "auto", width: "700px", maxWidth: "90%" }}>
                <div style={{ textAlign: "center" }}>
                    <h1 style={heading}>RED NINJA TIC TAC TOE</h1>
                </div>
                <Container>
                    <Container fluid='true'>
                        {
                            this.state.bigboard.map((row, outerRow) => (
                                <Row>
                                    {
                                        row.map((column, outerColumn) => (

                                            <Col md style={cellStyle1}
                                            >
                                                {
                                                    this.state.bigboard.map((inner_row, innerRow) => (
                                                        <Row style={{ maxWidth: "100%", margin: "0 auto" }}>
                                                            {
                                                                inner_row.map((inner_column, innerColumn) => (
                                                                    <Col md style={outerRow === this.state.rowToPlace && outerColumn === this.state.columnToPlace && this.state.rowToPlace !== " " && this.state.columnToPlace !== " " && this.state.ultimateWin === false ? cellStyle3 : cellStyle2}
                                                                    className={styles.cellNine}  
                                                                        onClick={(e) => this.handleCellClick(e, outerRow, outerColumn, innerRow, innerColumn)}>

                                                                        {
                                                                            <div style={{ textAlign: "center" }}>
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
                <div>
                    <div> Turn : {this.state.turn}</div>
                </div>
            </div>
            </div>
        )
    }
}

const cellStyle1 = {
    backgroundColor: 'black',
    textAlign: 'center',
    border: "1px solid",
    width: "10%",
    padding: "3%",
    flexBasis: 0,
    flexGrow: 1,
    minWidth: 0,
    maxWidth: "90%"
}

const cellStyle2 = {
    backgroundColor: 'black',
    textAlign: 'center',
    border: "1px solid",
    width: "5%",
    height: 60,
    padding: "1%",
    flexBasis: 0,
    flexGrow: 1,
    minWidth: 0,
    maxWidth: "90%"
}


const cellStyle3 = {
    backgroundColor: 'grey',
    textAlign: 'center',
    border: "1px solid",
    width: "5%",
    height: 60,
    padding: "1%",
    flexBasis: 0,
    flexGrow: 1,
    minWidth: 0,
    maxWidth: "90%"
}

// const cellStyle3 = {
//     backgroundColor: 'pink',
//     textAlign: 'center',
//     border: "1px solid",
//     width: "10%",
//     height: 250,
//     padding: "3%",
//     // flexBasis: 0,
//     // flexGrow: 1,
//     // minWidth: 0,
//     // maxWidth: "100%"
// }
//   border-collapse: "separate"
// }
const heading = {
    display: "inline-block",
    textAlign: 'center',
    width: '80%',
    lineHeight: 1.5
}


//   <i class="far fa-grin"></i>
{/* <i class="fas fa-grin"></i> */ }

{/* <i class="far fa-laugh-wink"></i> */ }
{/* <i class="fas fa-laugh-wink"></i> */ }

{/* <i class="far fa-sad-cry"></i> */ }
{/* <i class="fas fa-sad-cry"></i> */ }
