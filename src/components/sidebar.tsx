import * as React from "react";
import { Menu, MenuLink, MenuLabel, MenuList, Icon } from "bloomer";
import { Link } from "react-router-dom";

export interface SidebarProps {
  visibleModal: () => void;
}

export const Sidebar = (props: SidebarProps) => (
  <div>
    <Menu>
      <MenuLabel>Genaral</MenuLabel>
      <MenuList>
        <li>
          <Link to="/sdasd">404</Link>
        </li>
      </MenuList>
      <MenuLabel>
        Feeds
        <a onClick={props.visibleModal}>
          <Icon isSize="small" className="fa fa-plus" />
        </a>
      </MenuLabel>
    </Menu>
  </div>
);
