import axios from 'axios';

const API_URL =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php';

export const getCocktails = async (term: string) => {
    const resp = await axios.get(`${API_URL}?s=${term}`);
    return resp.data.drinks;
}