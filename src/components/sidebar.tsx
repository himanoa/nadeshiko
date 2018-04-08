import * as React from "react";
import { Menu, MenuLink, MenuLabel, MenuList, Icon } from "bloomer";
import { Link } from "react-router-dom";

import { AddModal } from "./addModal";

export interface SidebarProps {
  isVisibleAddFeedModalDialog: boolean;
  updateIsVisibleAddFeedModalDialog: (visible: boolean) => void;
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
        <a onClick={() => props.updateIsVisibleAddFeedModalDialog(true)}>
          <Icon
            isSize="small"
            className="fa fa-plus"
            onClick={() => console.log("hello")}
          />
        </a>
      </MenuLabel>
    </Menu>
    <AddModal
      isActive={props.isVisibleAddFeedModalDialog}
      hide={() => props.updateIsVisibleAddFeedModalDialog(false)}
    />
  </div>
);
