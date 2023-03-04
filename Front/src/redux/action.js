import { ADD_CHARACTER, REMOVE_CHARACTER, FILTER, ORDER } from "./action-type"
import axios from 'axios'

export function addFavorite (character) {
    return async function (dispatch) {

      try {
        const responseBack = await axios.post("http://localhost:3001/fav", character)
      return dispatch({
        type: ADD_CHARACTER,
        payload: responseBack.data
      })
      } catch (error) {
        return dispatch({type: "ERROR", payload: error})
      }
/*
      try {
        axios.post("http://localhost:3001/rickandmorty/fav", character)
          .then((response) => {
            return dispatch({
              type: ADD_CHARACTER,
              payload: response.data,
            });
          });
      } catch (error) {
        return error.message;
      }
        */
      };
}
export  function removeFavorite (id) {
    return async function (dispatch) {

      try {
        const response = await axios.delete("http://localhost:3001/fav" + id)
      return dispatch({
        type: REMOVE_CHARACTER,
        payload: response.data
      })
      } catch (error) {
        return dispatch({type: "ERROR", payload: error})
      }

      

      
      // try {
      //   axios.delete("http://localhost:3001/rickandmorty/fav" + id).then((response) => {
      //     return dispatch({
      //       type: REMOVE_CHARACTER,
      //       payload: response.data,
      //     });
      //   });
      // } catch (error) {
        
      // }
    };
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

export function getFavorites(){
  return async function (dispatch){

    try {
       const response = await axios('http://localhost:3001/fav')
      return dispatch({type: "GET_FAVS", payload: response.data})
    } catch (error) {
      return dispatch({type: "ERROR", payload: error})
    }
   
  }
}