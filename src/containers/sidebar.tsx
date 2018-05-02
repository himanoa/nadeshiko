import { withAddFeedModal } from "../hocs/withAddFeedModal";
import { Sidebar as PSidebar } from "../components/sidebar";

export const Sidebar = withAddFeedModal(PSidebar);
