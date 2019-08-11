import { CocktailListAction } from '../actions/CocktailListActions';
import { COCKTAIL_LIST_CHECK, COCKTAIL_LIST_FAILED, COCKTAIL_LIST_SUCCESS, ICocktailStoreState } from '../types/CocktailTypes';

export function cocktails (
  state: ICocktailStoreState = { isLoading: false },
  action: CocktailListAction
): ICocktailStoreState {
  switch (action.type) {
    case COCKTAIL_LIST_CHECK:
      return { ...state, isLoading: true };
    case COCKTAIL_LIST_SUCCESS:
      return { ...state, isLoading: false, cocktails: action.cocktails };
    case COCKTAIL_LIST_FAILED:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};
