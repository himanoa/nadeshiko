import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { reducer, actionCreators } from "../reducers/feed";
import { RootState } from "../reducers";

export const withFeedState = connect(
  (state: RootState) => state.feed,
  dispatch => ({ actions: bindActionCreators({ ...actionCreators }, dispatch) })
);
