
export const COCKTAIL_LIST_CHECK = 'COCKTAIL_LIST_CHECK';
export type COCKTAIL_LIST_CHECK = typeof COCKTAIL_LIST_CHECK;
export const COCKTAIL_LIST_SUCCESS = 'COCKTAIL_LIST_SUCCESS';
export type COCKTAIL_LIST_SUCCESS = typeof COCKTAIL_LIST_SUCCESS;
export const COCKTAIL_LIST_FAILED = 'COCKTAIL_LIST_FAILED';
export type COCKTAIL_LIST_FAILED = typeof COCKTAIL_LIST_FAILED;

export interface ICocktail {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}


export interface ICocktailStoreState {
  isLoading: boolean;
  error?: string;
  cocktails?: ICocktail[]
}