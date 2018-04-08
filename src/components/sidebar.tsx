import * as React from "react";
import { Menu, MenuLink, MenuLabel, MenuList } from "bloomer";
import { Link } from "react-router-dom";

export const Sidebar = () => (
  <Menu>
    <MenuLabel>Genaral</MenuLabel>
    <MenuList>
      <li>
        <Link to="/sdasd">404</Link>
      </li>
    </MenuList>
    <MenuLabel>Feeds</MenuLabel>
  </Menu>
);
