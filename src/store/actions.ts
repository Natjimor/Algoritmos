import { Action, ActionsList } from "../types/store";

export const addCharacter = (payload: string): Action => {
    return {
        type: ActionsList.ADD_CHARACTERS,
        payload,
    };
};
export const addEpisodes = (payload: string): Action => {
    return {
        type: ActionsList.GET_EPISODES,
        payload,
    };
};