import React, { Component } from "react";
import { Button, Container, Table } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import styles from "../static/css/scores.module.css";

export default class Scores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: [],
    };
  }

  componentDidMount() {
    let history = localStorage.getItem("scores");
    if (history) {
      let oldScores = JSON.parse(history) || [];
      this.setState({
        scores: oldScores,
      });
    }
  }

  clearScores() {
    localStorage.setItem("scores", []);
    this.setState({
      scores: [],
    });
  }
  render() {
    return (
      <div className={styles.landingBody}>
        <Container className={styles.content}>
          <h1 className={styles.heading}>Previous Scores</h1>
          {this.state.scores.length == 0 ? (
            "You have not played any games yet!"
          ) : (
            <div>
              <Button
                variant="dark"
                className={styles.button}
                onClick={(e) => this.clearScores()}
              >
                Clear Scores
              </Button>
              <Table striped bordered hover className={styles.table}>
                <thead>
                  <tr>
                    <th className={styles.topics}>#</th>
                    <th className={styles.topics}>GAME TYPE</th>
                    <th className={styles.topics}>LEVEL</th>
                    <th className={styles.topics}>RESULT</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.scores.map((score, i) => (
                    <tr className={styles.row}>
                      <td>{i + 1}</td>
                      <td>{score.game}</td>
                      <td>{score.depth == -1 ? 5 : score.depth}</td>
                      <td>{score.winner}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </Container>
      </div>
    );
  }
}
