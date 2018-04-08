import { compose, withState } from "recompose";
import { SidebarProps } from "../components/sidebar";

export const withAddFeedModalState = withState(
  `isVisibleAddFeedModalDialog`,
  `updateIsVisibleAddFeedModalDialog`,
  false
);
