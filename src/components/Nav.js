import React, { Component } from "react";
import { Menu, Input } from "semantic-ui-react";

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
      <div>
        <Menu pointing secondary>
          <Menu.Item name="Nav Component" />
          <Menu.Item
            name="Active"
            active={this.state.activeItem === "Active"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Not Active"
            active={this.state.activeItem === "Not Active"}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
            <Menu.Item
              name="logout"
              active={this.state.activeItem === "logout"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
