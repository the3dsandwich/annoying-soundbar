import React, { Component } from "react";
import { Segment, Button, Grid } from "semantic-ui-react";
import wiiiiiii from "../sound/wiiiiiiiiiiiiiiiii.aac";
import awkward from "../sound/awkward.aac";
import makeawkward from "../sound/makeawkward.aac";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.wiiiiiii = new Audio(wiiiiiii);
    this.awkward = new Audio(awkward);
    this.makeawkward = new Audio(makeawkward);
  }

  handleStartStop(e) {
    switch (e.target.name) {
      case "Wiiiiiiiii":
        this.wiiiiiii.play();
        break;
      case "Awkward":
        this.awkward.play();
        break;
      case "MakeAwkward":
        this.makeawkward.play();
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <Segment inverted className="main">
        <Grid centered columns={2}>
          <Grid.Column textAlign="center">
            <Segment>
              <Button
                size="massive"
                name="Wiiiiiiiii"
                onClick={this.handleStartStop.bind(this)}
              >
                wiiiiiiiiiiiiiiiii
              </Button>
            </Segment>
            <Segment>
              <Button
                size="massive"
                name="Awkward"
                onClick={this.handleStartStop.bind(this)}
              >
                我最喜歡尷尬了！
              </Button>
            </Segment>
            <Segment>
              <Button
                size="massive"
                name="MakeAwkward"
                onClick={this.handleStartStop.bind(this)}
              >
                自己的尷尬要自！己！創！造！
              </Button>
            </Segment>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}
