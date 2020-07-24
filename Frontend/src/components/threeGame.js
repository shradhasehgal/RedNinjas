import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import ThreeBoard from "./threeBoard.js";
import ThreeConfiguration from "./threeConfiguration.js";
import GameResults from "./gameResults.js";

export default class ThreeGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showThreeConfigurationComponent: true,
      showThreeGameComponent: false,
      showThreeWinComponent: false,
      depth: -1,
      gameBeginner: "HUMAN",
      route: " ",
      winner: " ",
    };

    this.updateStateOfComponents_Three = this.updateStateOfComponents_Three.bind(
      this
    );
    this.updateStateForWinComponent = this.updateStateForWinComponent.bind(
      this
    );
    this.handleStartAgent_Three = this.handleStartAgent_Three.bind(this);
    this.handleStartHuman_Three = this.handleStartHuman_Three.bind(this);
    this.handleDepth_Three = this.handleDepth_Three.bind(this);
  }

  handleStartAgent_Three(e) {
    this.setState({
      gameBeginner: "AGENT",
    });
  }

  handleStartHuman_Three(e) {
    this.setState({
      gameBeginner: "HUMAN",
    });
  }

  handleDepth_Three(e, selected_depth) {
    this.setState({
      depth: selected_depth,
    });
  }

  updateStateForWinComponent(gameRoute, gameWinner) { //to display the Win component and hide the 3*3 game component
    setTimeout(
      () =>
        this.setState({
          showThreeConfigurationComponent: false,
          showThreeGameComponent: false,
          showThreeWinComponent: true,
          winner: gameWinner,
          route: gameRoute,
        }),
      2000
    );
  }

  updateStateOfComponents_Three(message) { //to display the 3*3 game and hide the configuration component
    if (message === "Go To Game") {
      this.setState({
        showThreeConfigurationComponent: false,
        showThreeGameComponent: true,
        showThreeWinComponent: false,
      });
    } else if (message === "Show Configuration") {
      this.setState({
        showThreeConfigurationComponent: true,
        showThreeGameComponent: false,
        showThreeWinComponent: false,
        depth: -1,
        gameBeginner: "HUMAN",
        route: " ",
        winner: " ",
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.showThreeConfigurationComponent && (
          <ThreeConfiguration
            update_Three={this.updateStateOfComponents_Three}
            handleStartAgent_Three={this.handleStartAgent_Three}
            handleStartHuman_Three={this.handleStartHuman_Three}
            handleDepth_Three={this.handleDepth_Three}
            depth={this.state.depth}
            gameBeginner={this.state.gameBeginner}
          />
        )}
        {this.state.showThreeGameComponent && (
          <ThreeBoard
            update_Win_Three={this.updateStateForWinComponent}
            depth={this.state.depth}
            gameBeginner={this.state.gameBeginner}
          />
        )}
        {this.state.showThreeWinComponent && (
          <GameResults
            update_Three={this.updateStateOfComponents_Three}
            winner={this.state.winner}
            route={this.state.route}
          />
        )}
      </div>
    );
  }
}
