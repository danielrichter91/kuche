import { ADD_ARTICLE } from "../constants/action-types";
import { ADD_RECIPES } from "../constants/action-types";

const initialState = {
  articles: [],
  recipes: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_ARTICLE:
        return { ...state, articles: [...state.articles, action.payload] };
      case ADD_RECIPES:
        return { ...state, recipes: action.payload };
      default:
        return state;
    }
};

export default rootReducer;