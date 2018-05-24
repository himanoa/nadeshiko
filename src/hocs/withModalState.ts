import { withState } from "recompose";

export const withAddFeedModalState = withState(
  `isVisibleAddFeedModalDialog`,
  `updateIsVisibleAddFeedModalDialog`,
  false
);
