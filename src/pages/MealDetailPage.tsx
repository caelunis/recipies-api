import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMealById } from '../services/api';
import MealDetails from '../components/MealDetails';

const MealDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [meal, setMeal] = useState<any | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;
        getMealById(id)
            .then((response) => {
                setMeal(response.data.meals[0]);
            })
            .catch((err) => {
                setError('Error fetching meal details. Please try again.');
                console.error(err);
            });
    }, [id]);

    if (error) return <div className="text-red-500">{error}</div>;
    if (!meal) return <div>Loading...</div>;

    return (
        <div>
            <Link
                to="/"
                className="mb-4 inline-block px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
                Back to Search
            </Link>
            <MealDetails meal={meal} />
        </div>
    );
};

export default MealDetailPage;