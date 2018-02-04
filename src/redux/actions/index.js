import { ADD_ARTICLE } from "../constants/action-types";
import { ADD_RECIPES } from "../constants/action-types";

export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });

export const addRecipes = recipes => ({ type: ADD_RECIPES, payload: recipes });
