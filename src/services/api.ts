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

export interface Category {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
}

export interface Area {
    strArea: string;
}

export interface Ingredient {
    strIngredient: string;
}

export const searchMeals = (query: string) =>
    axios.get<{ meals: Meal[] | null }>(`${API_URL}/search.php`, { params: { s: query } });

export const getMealById = (id: string) =>
    axios.get<{ meals: Meal[] }>(`${API_URL}/lookup.php`, { params: { i: id } });

export const getRandomMeal = () =>
    axios.get<{ meals: Meal[] }>(`${API_URL}/random.php`);

export const getCategories = () =>
    axios.get<{ categories: Category[] }>(`${API_URL}/categories.php`);

export const filterByCategory = (category: string) =>
    axios.get<{ meals: Meal[] }>(`${API_URL}/filter.php`, { params: { c: category } });

export const getAreas = () =>
    axios.get<{ meals: Area[] }>(`${API_URL}/list.php`, { params: { a: 'list' } });

export const filterByArea = (area: string) =>
    axios.get<{ meals: Meal[] }>(`${API_URL}/filter.php`, { params: { a: area } });

export const getIngredients = () =>
    axios.get<{ meals: Ingredient[] }>(`${API_URL}/list.php`, { params: { i: 'list' } });

export const filterByIngredient = (ingredient: string) =>
    axios.get<{ meals: Meal[] }>(`${API_URL}/filter.php`, { params: { i: ingredient } });