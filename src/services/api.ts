import axios from 'axios';

const API_URL = 'https://www.themealdb.com/api/json/v1/1';

export interface Meal {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strYoutube: string;
    [key: string]: string;
}

export const searchMeals = (query: string) =>
    axios.get<{ meals: Meal[] | null }>(`${API_URL}/search.php`, { params: { s: query } });

export const getMealById = (id: string) =>
    axios.get<{ meals: Meal[] }>(`${API_URL}/lookup.php`, { params: { i: id } });