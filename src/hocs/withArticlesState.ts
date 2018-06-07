import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { RootState } from "../reducers";
import { actionCreators } from "../reducers/article";
import { compose } from "recompose";

export const withArticlesState = compose(
  connect(
    (state: RootState) => state.article,
    dispatch => ({
      actions: bindActionCreators({ ...actionCreators }, dispatch)
    })
  )
);
