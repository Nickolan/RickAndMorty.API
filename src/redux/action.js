import { ADD_CHARACTER, REMOVE_CHARACTER } from "./action-type"

export const addFavorite = (character) => {
    return {
        type: ADD_CHARACTER, 
        payload: character
    }
}
export const removeFavorite = (id) => {
    return {
        type: REMOVE_CHARACTER,
        payload: id
    }
}