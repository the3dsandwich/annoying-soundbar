import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "Active"
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <div className="Nav">
        <Menu fluid widths={3} inverted color="blue">
          <Menu.Item
            name="instagram"
            onClick={() =>
              window.location.assign("https://www.instagram.com/the3dsandwich")
            }
          >
            <Icon name="instagram" />
            Instagram
          </Menu.Item>
          <Menu.Item name="音效懶人包" />
          <Menu.Item
            name="facebook"
            onClick={() =>
              window.location.assign("https://www.facebook.com/duhweiwei")
            }
          >
            <Icon name="facebook f" />
            Facebook
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
