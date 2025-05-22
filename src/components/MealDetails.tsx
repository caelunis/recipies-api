import React from 'react';
import { Meal } from '../services/api';

interface MealDetailsProps {
    meal: Meal;
}

const MealDetails: React.FC<MealDetailsProps> = ({ meal }) => {
    const ingredients: string[] = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient && ingredient.trim() && measure && measure.trim()) {
            ingredients.push(`${measure} ${ingredient}`);
        }
    }

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">{meal.strMeal}</h2>
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full md:w-1/2 h-64 object-cover rounded mb-4" />
            <p><strong>Category:</strong> {meal.strCategory}</p>
            <p><strong>Area:</strong> {meal.strArea}</p>
            <h3 className="text-xl font-semibold mt-4">Ingredients:</h3>
            <ul className="list-disc pl-5 mb-4">
                {ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h3 className="text-xl font-semibold">Instructions:</h3>
            <p className="mb-4">{meal.strInstructions}</p>
            {meal.strYoutube && (
                <p>
                    <strong>Watch Video:</strong>{' '}
                    <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        YouTube
                    </a>
                </p>
            )}
        </div>
    );
};

export default MealDetails;