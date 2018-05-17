import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../reducers/feed";
import { RssFeed } from "../models/rssFeed";
import { RootState } from "../reducers";

type OuterProps = {};

type Props = {
  feeds: RssFeed[];
  actions: typeof actionCreators;
};
