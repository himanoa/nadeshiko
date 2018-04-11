import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory();

export type addFeedPayload = {
  title: string;
  feedUrl: string;
  updateInterval: number;
};

export default {
  addFeed: actionCreator<addFeedPayload>("feed/add")
};
