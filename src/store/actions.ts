import { ActionType, ActionsList } from "../types/store";

export const change_selection = (payload: string): ActionType => {
    return {
        type: ActionsList.pixel_selected,
        payload
    }
}
