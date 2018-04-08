import * as React from "react";
import { Menu, MenuLink, MenuLabel, MenuList, Icon } from "bloomer";
import { Link } from "react-router-dom";

export const Sidebar = (props: any) => (
  <Menu>
    <MenuLabel>Genaral</MenuLabel>
    <MenuList>
      <li>
        <Link to="/sdasd">404</Link>
      </li>
    </MenuList>
    <MenuLabel>
      Feeds <Icon isSize="small" className="fa fa-plus" />
    </MenuLabel>
  </Menu>
);
