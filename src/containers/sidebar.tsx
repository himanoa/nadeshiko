import { withFeedModal } from "../hocs/withAddFeedModal";
import { withFeedState } from "../hocs/withFeedState";
import { Sidebar as PSidebar } from "../components/sidebar";
import { compose } from "recompose";

export const Sidebar = compose(withFeedModal, withFeedState)(PSidebar);
