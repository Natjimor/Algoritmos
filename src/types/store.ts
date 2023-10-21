import {characterType} from "./character"
import {episodeType} from "./episode"

export type Observer = HTMLElement & { render: () => void };

export interface Action {
  type: ActionsList;
  payload: string;
}

export enum ActionsList {
  "ADD_CHARACTERS" = "ADD_CHARACTERS",
  "GET_EPISODES" = "GET_EPISODES",
}

export interface AppState {
    episodes: any,
    characters: any
}