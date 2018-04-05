import React, { Component } from "react";
import { Segment, Button } from "semantic-ui-react";
import wiiiiiii from "../sound/wiiiiiiiiiiiiiiiii.m4a";
import awkward from "../sound/awkward.m4a";
import makeawkward from "../sound/makeawkward.m4a";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.wiiiiiii = new Audio(wiiiiiii);
    this.awkward = new Audio(awkward);
    this.makeawkward = new Audio(makeawkward);
  }

  render() {
    return (
      <div className="App">
        <Segment.Group>
          <Segment inverted secondary color="orange">
            <h2>Wiiiiiiii</h2>
            <p>善維的配樂哦哦哦哦哦</p>
          </Segment>
          <Segment>
            <Button
              circle
              size="large"
              name="Wiiiiiiiii"
              onClick={() => this.wiiiiiii.play()}
            >
              Wiiiiiiiiiiiiiiiii
            </Button>
          </Segment>
          <Segment>
            <Button
              size="large"
              name="Awkward"
              onClick={() => this.awkward.play()}
            >
              我最喜歡尷尬了！
            </Button>
          </Segment>
          <Segment>
            <Button
              size="large"
              name="MakeAwkward"
              onClick={() => this.makeawkward.play()}
            >
              自己的尷尬要自！己！創！造！
            </Button>
          </Segment>
        </Segment.Group>
      </div>
    );
  }
}
