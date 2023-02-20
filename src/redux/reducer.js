import { ADD_CHARACTER, REMOVE_CHARACTER } from "./action-type"

const initialState = {
    myFavorites: []
}
const rootReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_CHARACTER:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            };
    
        case REMOVE_CHARACTER:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((elem) => elem.id !== action.payload)
            };
        default:
            return {...state};
    }
}

export default rootReducer;