import React, { useState } from 'react';
import { searchMeals, Meal } from '../services/api';
import MealCard from '../components/MealCard';

const Home: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [meals, setMeals] = useState<Meal[]>([]);
    const [error, setError] = useState<string | null>(null);

    const handleSearch = () => {
        if (!searchQuery.trim()) {
            setError('Please enter a meal name to search.');
            return;
        }

        setError(null);
        searchMeals(searchQuery)
            .then((response) => {
                setMeals(response.data.meals || []);
            })
            .catch((err) => {
                setError('Error fetching meals. Please try again.');
                console.error(err);
            });
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Search for Recipes</h2>
            <div className="mb-4">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for a meal (e.g., Arrabiata)"
                    className="border p-2 rounded w-full md:w-1/2"
                />
                <button
                    onClick={handleSearch}
                    className="mt-2 md:mt-0 md:ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Search
                </button>
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {meals.length > 0 ? (
                    meals.map((meal) => <MealCard key={meal.idMeal} meal={meal} />)
                ) : (
                    <p className="text-gray-500">No meals found.</p>
                )}
            </div>
        </div>
    );
};

export default Home;