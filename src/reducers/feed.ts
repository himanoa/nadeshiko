export const ADD_FEED = "feed/addFeed";

export type AddFeedPayload = {
  title: string;
  feedUrl: string;
  updateInterval: number;
};

export type Action<T> = {
  type: string;
  payload: T;
};

export const addFeed = (
  title: string,
  feedUrl: string,
  updateInterval: number
): Action<AddFeedPayload> => {
  return {
    type: ADD_FEED,
    payload: {
      title,
      feedUrl,
      updateInterval
    }
  };
};

export type State = {
  feeds: AddFeedPayload[];
};

export const initialState: State = { feeds: [] };

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ADD_FEED: {
      return {
        feeds: [...state.feeds, action.payload]
      };
    }
    default: {
      return state;
    }
  }
};
