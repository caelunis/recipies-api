import React from 'react';
import { Link } from 'react-router-dom';
import { Meal } from '../services/api';

interface MealCardProps {
    meal: Meal;
}

const MealCard: React.FC<MealCardProps> = ({ meal }) => {
    return (
        <div className="border p-4 rounded shadow bg-white">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-48 object-cover rounded mb-2" />
            <h3 className="text-xl font-semibold">{meal.strMeal}</h3>
            <p>Category: {meal.strCategory}</p>
            <p>Area: {meal.strArea}</p>
            <Link
                to={`/meal/${meal.idMeal}`}
                className="mt-2 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                View Details
            </Link>
        </div>
    );
};

export default MealCard;