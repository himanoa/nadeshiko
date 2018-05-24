import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { actionCreators } from "../reducers/feed";
import { RootState } from "../reducers";

export const withFeedState = connect<any, any, any>(
  (state: RootState) => state.feed,
  dispatch => ({ actions: bindActionCreators({ ...actionCreators }, dispatch) })
);
