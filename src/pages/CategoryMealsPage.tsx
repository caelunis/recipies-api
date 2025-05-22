import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { filterByCategory } from '../services/api';
import MealCard from '../components/MealCard';

const CategoryMealsPage: React.FC = () => {
    const { category } = useParams<{ category: string }>();
    const [meals, setMeals] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!category) return;
        filterByCategory(category)
            .then((response) => {
                setMeals(response.data.meals || []);
            })
            .catch((err) => {
                setError('Error fetching meals. Please try again.');
                console.error(err);
            });
    }, [category]);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Meals in {category}</h2>
    {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {meals.length > 0 ? (
                meals.map((meal) => <MealCard key={meal.idMeal} meal={meal} />)
    ) : (
        <p>No meals found.</p>
    )}
        </div>
        </div>
    );
    };

    export default CategoryMealsPage;