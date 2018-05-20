import * as React from "react";
import { Menu, MenuLink, MenuLabel, MenuList, Icon } from "bloomer";
import { Link } from "react-router-dom";
import { RssFeed } from "../models/rssFeed";

export const Sidebar = props => (
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
          <Icon isSize="medium" isAlign="right" className="fa fa-plus" />
        </a>
      </MenuLabel>
      <MenuList>
        {props.feeds.map(feed => {
          return (
            <li key={feed.id}>
              <Link to={`/feed/${feed.id}/articles`}>{feed.name}</Link>
            </li>
          );
        })}
      </MenuList>
    </Menu>
  </div>
);
