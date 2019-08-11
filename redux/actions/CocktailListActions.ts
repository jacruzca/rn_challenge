import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { getCocktails } from '../api/CocktailsApi';
import { COCKTAIL_LIST_CHECK, COCKTAIL_LIST_FAILED, COCKTAIL_LIST_SUCCESS, ICocktail } from '../types/CocktailTypes';

export interface ICocktailListCheck {
  type: COCKTAIL_LIST_CHECK;
  term: string;
}

export interface ICocktailListSuccess {
  type: COCKTAIL_LIST_SUCCESS;
  cocktails: ICocktail[];
}

export interface ICocktailListFailed {
  type: COCKTAIL_LIST_FAILED;
  error: string;
}

export type CocktailListAction =
  | ICocktailListCheck
  | ICocktailListSuccess
  | ICocktailListFailed;

export function cocktailListCheck(term: string): ICocktailListCheck {
  return {
    type: COCKTAIL_LIST_CHECK,
    term,
  };
}

export function cocktailListSuccess(
  cocktails: ICocktail[]
): ICocktailListSuccess {
  return {
    type: COCKTAIL_LIST_SUCCESS,
    cocktails,
  };
}

export function cocktailListFailed(error: string): ICocktailListFailed {
  return {
    type: COCKTAIL_LIST_FAILED,
    error,
  };
}

export const cocktailList = (
  term: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    dispatch(cocktailListCheck(term));
    try {
      const cocktails = await getCocktails(term);
      dispatch(cocktailListSuccess(cocktails));
    } catch (error) {
      dispatch(cocktailListFailed(error.message));
    }
  };
};