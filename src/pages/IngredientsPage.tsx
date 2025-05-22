import React, { useEffect, useState } from 'react';
import { getIngredients } from '../services/api';
import IngredientCard from '../components/IngredientCard';

const IngredientsPage: React.FC = () => {
    const [ingredients, setIngredients] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getIngredients()
            .then((response) => {
                setIngredients(response.data.meals);
            })
            .catch((err) => {
                setError('Error fetching ingredients. Please try again.');
                console.error(err);
            });
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Meal Ingredients</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {ingredients.length > 0 ? (
                    ingredients.map((ingredient) => (
                        <IngredientCard key={ingredient.strIngredient} ingredient={ingredient} />
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default IngredientsPage;