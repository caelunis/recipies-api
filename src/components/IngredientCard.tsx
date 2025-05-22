import React from 'react';
import { Link } from 'react-router-dom';
import { Ingredient } from '../services/api';

interface IngredientCardProps {
    ingredient: Ingredient;
}

const IngredientCard: React.FC<IngredientCardProps> = ({ ingredient }) => {
    return (
        <div className="border p-4 rounded shadow bg-white">
            <h3 className="text-xl font-semibold">{ingredient.strIngredient}</h3>
            <Link
                to={`/ingredient/${ingredient.strIngredient}`}
                className="mt-2 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                View Meals
            </Link>
        </div>
    );
};

export default IngredientCard;