const actionCreator = actionCreatorFactory();

export const ADD_FEED = "feed/addFeed";

export type AddFeedPayload = {
  title: string;
  feedUrl: string;
  updateInterval: number;
};

export default {
  addFeed: (title: string, feedUrl: string, updateInterval: number) => {
    return {
      type: ADD_FEED,
      payload: {
        title,
        feedUrl,
        updateInterval
      }
    };
  }
};
