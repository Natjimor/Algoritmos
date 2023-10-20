export type Observer = HTMLElement & { render: () => void };

export interface Action {
  type: ActionsList;
  payload: string;
}

export enum ActionsList {
  "GET_CHARACTERS" = "GET_CHARACTERS",
  "GET_EPISODES" = "GET_EPISODES",
}

export interface AppState {
    episodes: any,
    characters: any
}