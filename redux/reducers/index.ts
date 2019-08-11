import { combineReducers } from 'redux';
import { ICocktailStoreState } from '../types/CocktailTypes';
import { cocktails } from './CocktailsReducer';

export interface IRootState {
    cocktails: ICocktailStoreState
}

export default combineReducers<IRootState>({
  cocktails,
});
