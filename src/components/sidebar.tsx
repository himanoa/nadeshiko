import * as React from "react";
import { Menu, MenuLabel, MenuList, Icon, Control } from "bloomer";
import { Link } from "react-router-dom";
import { RssFeed } from "../models/rssFeed";

const RightIcon: React.CSSProperties = { float: "right" };

const isActivePath = (
  path: RegExpMatchArray | null,
  feedId: number
): Boolean => {
  if (path && parseInt(path[1], 10) === feedId) return true;
  return false;
};

export type FeedLinkProps = {
  feed: RssFeed & { id: number };
  updateEditModal: (id: Number) => void;
};

const showUpdateEditModal = (updateEditModal, id, e) => {
  e.preventDefault();
  updateEditModal(id);
};

const FeedLink = (props: FeedLinkProps) => {
  let path = window.location.pathname.match(/\/feed\/(\d+)\/articles/);
  const activeLinkStyle: React.CSSProperties = {
    backgroundColor: "#00d1b2",
    color: "#fff"
  };
  return (
    <li key={props.feed.id}>
      <Link
        style={isActivePath(path, props.feed.id) ? activeLinkStyle : {}}
        to={`/feed/${props.feed.id}/articles`}
      >
        {props.feed.name}
        <Icon
          isSize="small"
          className="fa fa-cog"
          style={RightIcon}
          onClick={showUpdateEditModal.bind(
            this,
            props.updateEditModal,
            props.feed.id
          )}
        />
      </Link>
    </li>
  );
};

export const Sidebar = props =>
  console.dir(props) || (
    <Control style={{ overflowY: "auto", marginLeft: "1rem" }}>
      <Menu>
        <MenuLabel>
          Feeds
          <a onClick={props.updateAddModal}>
            <Icon isSize="medium" isAlign="right" className="fa fa-plus" />
          </a>
        </MenuLabel>
        <MenuList>
          {props.feeds.map(feed => (
            <FeedLink
              feed={feed}
              key={feed.id}
              updateEditModal={props.updateEditModal}
            />
          ))}
        </MenuList>
      </Menu>
    </Control>
  );
