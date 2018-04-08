import { withAddFeedModalState } from "../hocs/withModalState";
import { Sidebar as PSidebar } from "../components/sidebar";

export const Sidebar = withAddFeedModalState(PSidebar);
