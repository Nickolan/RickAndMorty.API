import { ADD_CHARACTER, REMOVE_CHARACTER, FILTER, ORDER } from "./action-type"

const initialState = {
    myFavorites: [],
    allCharacters: [],
    errors: {}
}
const rootReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_CHARACTER:
            return {
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload],
                errors: {}
            };
    
        case REMOVE_CHARACTER:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((elem) => elem.id !== action.payload),
                errors: {}
            };

        case FILTER:
            const filtered = state.allCharacters.filter((elem) => elem.gender === action.payload)
            return {
                ...state,
                myFavorites: filtered
            }

        case ORDER:
            return {
                ...state,
                myFavorites: 
                        action.payload === 'Ascendente' ? state.allCharacters.sort((a, b) => a.id - b.id)
                        : action.payload === 'Descendente' ? state.allCharacters.sort((a, b) => b.id - a.id)
                        : null
            }

        case "GET_FAVS":
            return {
                ...state,
                myFavorites: action.payload,
                errors: {}
            }

        case "ERROR":
            return {
                ...state,
                errors: action.payload
            };


        default:
            return {...state};
    }
}

export default rootReducer;