import * as React from "react";
import { Menu, MenuLink, MenuLabel, MenuList, Icon } from "bloomer";
import { Link } from "react-router-dom";
import { RssFeed } from "../models/rssFeed";

const FeedLink = props => {
  let path = location.pathname.match(/\/feed\/(\d+)\/articles/);
  if (path && parseInt(path[1], 10) === props.feed.id) {
    return (
      <li key={props.feed.id}>
        <Link
          style={{ backgroundColor: "#00d1b2", color: "#fff" }}
          to={`/feed/${props.feed.id}/articles`}
        >
          {props.feed.name}
        </Link>
      </li>
    );
  }
  return (
    <li key={props.feed.id}>
      <Link to={`/feed/${props.feed.id}/articles`}>{props.feed.name}</Link>
    </li>
  );
};

export const Sidebar = props => (
  <div style={{ overflowY: "auto" }}>
    <Menu>
      <MenuLabel>
        Feeds
        <a onClick={props.visibleModal}>
          <Icon isSize="medium" isAlign="right" className="fa fa-plus" />
        </a>
      </MenuLabel>
      <MenuList>{props.feeds.map(feed => <FeedLink feed={feed} />)}</MenuList>
    </Menu>
  </div>
);
