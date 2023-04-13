import { ADD_FAV, REMOVE_FAV, ORDER, FILTERCARDS } from "./actionType";

export const addFav = (character) => {
  return {
    type: ADD_FAV,
    payload: character,
  };
};

export const removeFav = (id) => {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
};

export const filterCards = (character) => {
  return {
    type: FILTERCARDS,
    payload: character,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};
