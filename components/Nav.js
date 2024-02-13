import React from "react";
import { Menu, Icon } from "semantic-ui-react";

const Nav = () => {
  return (
    <div className="Nav">
      <Menu fluid widths={3} inverted color="blue">
        <Menu.Item
          name="instagram"
          onClick={() =>
            window.location.assign("https://www.instagram.com/weiwei.sw.yeh")
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
};

export default Nav;
