import React, { Component } from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import NineBoard from "./nineBoard.js";
import NineConfiguration from "./nineConfiguration.js";
import GameResults from "./gameResults.js";

export default class ThreeGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNineConfigurationComponent: true,
      showNineGameComponent: false,
      showNineWinComponent: false,
      gameBeginner: "HUMAN",
      route: " ",
      winner: " ",
    };

    this.updateStateOfComponents_Nine = this.updateStateOfComponents_Nine.bind(
      this
    );
    this.updateStateForWinComponent = this.updateStateForWinComponent.bind(
      this
    );
    this.handleStartAgent_Nine = this.handleStartAgent_Nine.bind(this);
    this.handleStartHuman_Nine = this.handleStartHuman_Nine.bind(this);
  }

  updateStateForWinComponent(gameRoute, gameWinner) { //to hide the  9*9 game component and display the win component
    setTimeout(
      () =>
        this.setState({
          showNineConfigurationComponent: false,
          showNineGameComponent: false,
          showNineWinComponent: true,
          winner: gameWinner,
          route: gameRoute,
        }),
      2000
    );
  }

  handleStartAgent_Nine(e) {
    this.setState({
      gameBeginner: "AGENT",
    });
  }

  handleStartHuman_Nine(e) {
    this.setState({
      gameBeginner: "HUMAN",
    });
  }

  updateStateOfComponents_Nine(message) { //to display the 9*9 game component and hide the configuration component
    if (message === "Go To Game") {
      this.setState({
        showNineConfigurationComponent: false,
        showNineGameComponent: true,
        showNineWinComponent: false,
      });
    } else if (message === "Show Configuration") {

      this.setState({
        showNineConfigurationComponent: true,
        showNineGameComponent: false,
        showNineWinComponent: false,
        gameBeginner: "HUMAN",
        route: " ",
        winner: " ",
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.showNineConfigurationComponent && (
          <NineConfiguration
            update_Nine={this.updateStateOfComponents_Nine}
            handleStartAgent_Nine={this.handleStartAgent_Nine}
            handleStartHuman_Nine={this.handleStartHuman_Nine}
            gameBeginner={this.state.gameBeginner}
          />
        )}
        {this.state.showNineGameComponent && (
          <NineBoard
            update_Win_Nine={this.updateStateForWinComponent}
            gameBeginner={this.state.gameBeginner}
          />
        )}
        {this.state.showNineWinComponent && (
          <GameResults
            update_Nine={this.updateStateOfComponents_Nine}
            winner={this.state.winner}
            route={this.state.route}
          />
        )}
      </div>
    );
  }
}
