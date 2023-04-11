import { ADD_FAV, REMOVE_FAV, FILTERCARDS, ORDER } from "./actionType";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.myFavorites],
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (favorite) => favorite.id !== action.payload
        ),
      };
    case FILTERCARDS:
      const allGender = state.allCharacters.filter(
        (char) => char.gender === action.payload
      );
      return {
        ...state,
        myFavorites: allGender,
      };
    case ORDER:
      return {
        ...state,
        myFavorites:
          action.payload === "A"
            ? state.allCharacters.sort((a, b) => a.id < b.id)
            : state.allCharacters.sort((a, b) => a.id > b.id),
      };

    default:
      return { ...state };
  }
};
export default reducer;
