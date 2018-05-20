import { Action, ErrorAction } from "./index";
export const INITIALIZE_WORKER = "worker/initializeWorker";
export const START_UP_APPLICATION = "worker/startUpApplication";
export const STOP_WORKER = "worker/stopWorker";

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
    type: INITIALIZE_WORKER,
    payload: {
      id,
      url,
      updateInterval
    }
  }),
  stopWorker: (id: number): Action<StopWorkerPayload> => ({
    type: STOP_WORKER,
    payload: { id }
  }),
  startUpApplication: () => ({
    type: START_UP_APPLICATION,
    payload: {}
  })
};
