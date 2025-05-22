import React, { useEffect, useState } from 'react';
import { getCategories } from '../services/api';
import CategoryCard from '../components/CategoryCard';

const CategoriesPage: React.FC = () => {
    const [categories, setCategories] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getCategories()
            .then((response) => {
                setCategories(response.data.categories);
            })
            .catch((err) => {
                setError('Error fetching categories. Please try again.');
                console.error(err);
            });
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Meal Categories</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {categories.length > 0 ? (
                    categories.map((category) => <CategoryCard key={category.idCategory} category={category} />)
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default CategoriesPage;