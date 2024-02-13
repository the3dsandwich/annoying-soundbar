import React from "react";
import { Segment, Button } from "semantic-ui-react";

const Main = () => {
  const playSound = (id) => {
    document.getElementById(id).play();
  };
  return (
    <div className="App">
      <Segment.Group>
        <Segment inverted secondary color="orange">
          <h2>Wiiiiiiii</h2>
          <p>善維的配樂哦哦哦哦哦</p>
        </Segment>
        <Segment>
          <Button
            circle="true"
            size="large"
            name="Wiiiiiiiii"
            onClick={() => playSound("wiiiiiiiiiiiiiiiii")}
          >
            Wiiiiiiiiiiiiiiiii
          </Button>
        </Segment>
        <Segment>
          <Button
            size="large"
            name="Awkward"
            onClick={() => playSound("awkward")}
          >
            我最喜歡尷尬了！
          </Button>
        </Segment>
        <Segment>
          <Button
            size="large"
            name="MakeAwkward"
            onClick={() => playSound("makeawkward")}
          >
            自己的尷尬要自！己！創！造！
          </Button>
        </Segment>
      </Segment.Group>
      <audio id="awkward">
        <source src="sound/awkward.m4a" type="audio/mpeg" />
      </audio>
      <audio id="makeawkward">
        <source src="sound/makeawkward.m4a" type="audio/mpeg" />
      </audio>
      <audio id="wiiiiiiiiiiiiiiiii">
        <source src="sound/wiiiiiiiiiiiiiiiii.m4a" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default Main;
