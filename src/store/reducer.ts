import { Action, ActionsList , AppState } from "../types/store";

export const reducer = (action: Action, currentState: AppState): AppState => {
    switch (action.type) {
        case ActionsList.GET_EPISODES:
            return {
                ...currentState,
                episodes: JSON.parse(action.payload)
            };
        case ActionsList.ADD_CHARACTERS:
            const newCharactersList = currentState.characters
            if (!newCharactersList.includes(JSON.parse(action.payload))) {
                newCharactersList.push(JSON.parse(action.payload))
                return {
                    ...currentState,
                    characters: newCharactersList
                };
            } else {
                return currentState;
            }
            
        default:
            return currentState;
    }
};