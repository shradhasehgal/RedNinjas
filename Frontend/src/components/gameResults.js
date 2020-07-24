import React, { Component} from "react";
import { MDBAnimation } from "mdbreact";
import { Button, Container} from "react-bootstrap";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import styles from "../static/css/result.module.css";

export default class GameResults extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    if (this.props.winner === "HUMAN") {
      return (
        <div className={styles.wrapper}>
          <Container className={styles.mainDiv}>
            <Container
              className={styles.containerBody}
              style={{ display: "flex" }}
            >
              <Container
                style={{
                  marginTop: "auto",
                  marginBottom: "auto",
                  marginLeft: "auto",
                  marginRight: "auto",
                  padding: "1%",
                }}
              >
                <img
                  className={styles.gif}
                  src={require("../static/assets/win.gif")}
                />
                <br></br>
                <br></br>
                <MDBAnimation type="fadeIn" infinite>
                  <text className={styles.text}>Congrats!!!</text>
                </MDBAnimation>
                {this.props.route === "three" ? (
                  <Button
                    size="lg"
                    variant="light"
                    onClick={(e) =>
                      this.props.update_Three("Show Configuration")
                    }
                  >
                    Play Again!
                  </Button>
                ) : (
                  <Button
                    size="lg"
                    variant="light"
                    onClick={(e) =>
                      this.props.update_Nine("Show Configuration")
                    }
                  >
                    {" "}
                    Play Again!
                  </Button>
                )}
              </Container>
            </Container>
          </Container>
        </div>
      );
    } else if (this.props.winner === "AGENT") {
      return (
        <div className={styles.wrapper}>
          <Container className={styles.mainDiv}>
            <Container
              className={styles.containerBody}
              style={{ display: "flex" }}
            >
              <Container
                style={{
                  marginTop: "auto",
                  marginBottom: "auto",
                  padding: "3% 0",
                }}
              >
                <img
                  className={styles.gif}
                  src={require("../static/assets/sad.gif")}
                />
                <MDBAnimation type="fadeIn" infinite>
                  <text className={styles.text}> Better Luck next time!</text>
                </MDBAnimation>
                {this.props.route === "three" ? (
                  <Button
                    size="lg"
                    variant="light"
                    onClick={(e) =>
                      this.props.update_Three("Show Configuration")
                    }
                  >
                    Play Again!
                  </Button>
                ) : (
                  <Button
                    size="lg"
                    variant="light"
                    onClick={(e) =>
                      this.props.update_Nine("Show Configuration")
                    }
                  >
                    {" "}
                    Play Again!
                  </Button>
                )}

              </Container>
            </Container>
          </Container>
        </div>
      );
    } else {
      return (
        <div className={styles.wrapper}>
          <Container className={styles.mainDiv}>
            <Container
              className={styles.containerBody}
              style={{ display: "flex" }}
            >
              <Container
                style={{
                  marginTop: "auto",
                  marginBottom: "auto",
                  padding: "3% 0",
                }}
              >
                <img
                  className={styles.gif}
                  src={require("../static/assets/tie.gif")}
                />
                <MDBAnimation type="fadeIn" infinite>
                  <br></br>
                  <text className={styles.text}>It's A Tie!</text>
                </MDBAnimation>
                {this.props.route === "three" ? (
                  <Button
                    size="lg"
                    variant="light"
                    onClick={(e) =>
                      this.props.update_Three("Show Configuration")
                    }
                  >
                    Play Again!
                  </Button>
                ) : (
                  <Button
                    size="lg"
                    variant="light"
                    onClick={(e) =>
                      this.props.update_Nine("Show Configuration")
                    }
                  >
                    {" "}
                    Play Again!
                  </Button>
                )}
              </Container>
            </Container>
          </Container>
        </div>
      );
    }
  }
}
