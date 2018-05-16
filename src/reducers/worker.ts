export const CREATE_RSS_FETCHER_ACTION = "worker/createRssFetcherFailed";

export type Action = {
  type: string;
  payload: Error;
  error: true;
};
