import React, { useEffect, useState } from 'react';
import { searchMeals, getCategories, getAreas, filterByCategory, filterByArea, Meal } from '../services/api';
import MealCard from '../components/MealCard';

const Home: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [category, setCategory] = useState('');
    const [area, setArea] = useState('');
    const [categories, setCategories] = useState<any[]>([]);
    const [areas, setAreas] = useState<any[]>([]);
    const [meals, setMeals] = useState<Meal[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getCategories()
            .then((response) => {
                setCategories(response.data.categories);
            })
            .catch((err) => console.error('Error fetching categories:', err));

        getAreas()
            .then((response) => {
                setAreas(response.data.meals);
            })
            .catch((err) => console.error('Error fetching areas:', err));
    }, []);

    const handleSearch = () => {
        setError(null);
        if (searchQuery.trim()) {
            searchMeals(searchQuery)
                .then((response) => {
                    setMeals(response.data.meals || []);
                })
                .catch((err) => {
                    setError('Error fetching meals. Please try again.');
                    console.error(err);
                });
        } else if (category) {
            filterByCategory(category)
                .then((response) => {
                    setMeals(response.data.meals || []);
                })
                .catch((err) => {
                    setError('Error fetching meals. Please try again.');
                    console.error(err);
                });
        } else if (area) {
            filterByArea(area)
                .then((response) => {
                    setMeals(response.data.meals || []);
                })
                .catch((err) => {
                    setError('Error fetching meals. Please try again.');
                    console.error(err);
                });
        } else {
            setError('Please enter a search query or select a category or area.');
        }
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Search for Recipes</h2>
            <div className="mb-4 space-y-4">
                <div>
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
                <div>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="border p-2 rounded w-full md:w-1/4"
                    >
                        <option value="">Select Category</option>
                        {categories.map((cat) => (
                            <option key={cat.idCategory} value={cat.strCategory}>
                                {cat.strCategory}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <select
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        className="border p-2 rounded w-full md:w-1/4"
                    >
                        <option value="">Select Area</option>
                        {areas.map((a) => (
                            <option key={a.strArea} value={a.strArea}>
                                {a.strArea}
                            </option>
                        ))}
                    </select>
                </div>
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