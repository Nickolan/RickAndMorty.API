import { ADD_CHARACTER, REMOVE_CHARACTER, FILTER, ORDER } from "./action-type"

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

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (id) => {
    return {
        type: ORDER,
        payload: id
    }
}