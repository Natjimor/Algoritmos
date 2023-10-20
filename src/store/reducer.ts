import { Action, ActionsList , AppState } from "../types/store";

export const reducer = (action: Action, currentState: AppState): AppState => {
    switch (action.type) {
        case ActionsList.GET_EPISODES:
            return {
                ...currentState,
                episodes: JSON.parse(action.payload)
            };
        case ActionsList.GET_CHARACTERS:
            return {
                ...currentState,
                characters: JSON.parse(action.payload)
            };
        default:
            return currentState;
    }
};