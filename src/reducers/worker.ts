import { Action, ErrorAction } from "./index";
export const InitializeWorker = "worker/initializeWorker";
export const StopWorker = "worker/stopWorker";

export type InitializeWorkerPayload = {
  id: number;
  url: string;
  updateInterval: number;
};

export type StopWorkerPayload = {
  id: number;
};

export const actionCreators = {
  initializeWorker: (
    id: number,
    url: string,
    updateInterval: number
  ): Action<InitializeWorkerPayload> => ({
    type: InitializeWorker,
    payload: {
      id,
      url,
      updateInterval
    }
  }),
  stopWorker: (id: number): Action<StopWorkerPayload> => ({
    type: StopWorker,
    payload: { id }
  })
};
