import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { RootState } from "../reducers";
import { actionCreators, reducer } from "../reducers/article";

export const withArticles = connect(
  (state: RootState) => state.article,
  dispatch => ({ actions: bindActionCreators({ ...actionCreators }, dispatch) })
);
