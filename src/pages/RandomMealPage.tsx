import React, { useEffect, useState } from 'react';
import { getRandomMeal } from '../services/api';
import MealDetails from '../components/MealDetails';

const RandomMealPage: React.FC = () => {
    const [meal, setMeal] = useState<any | null>(null);
    const [error, setError] = useState<string | null>(null);

    const fetchRandomMeal = () => {
        setError(null);
        getRandomMeal()
            .then((response) => {
                setMeal(response.data.meals[0]);
            })
            .catch((err) => {
                setError('Error fetching random meal. Please try again.');
                console.error(err);
            });
    };

    useEffect(() => {
        fetchRandomMeal();
    }, []);

    return (
        <div>
            <div className="mb-4">
        <button
            onClick={fetchRandomMeal}
    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
        Get Another Random Meal
    </button>
    </div>
    {error && <p className="text-red-500 mb-4">{error}</p>}
        {meal ? <MealDetails meal={meal} /> : <p>Loading...</p>}
        </div>
    );
    };

    export default RandomMealPage;