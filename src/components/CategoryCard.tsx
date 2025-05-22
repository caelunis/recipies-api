import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../services/api';

interface CategoryCardProps {
    category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
    return (
        <div className="border p-4 rounded shadow bg-white">
        <img src={category.strCategoryThumb} alt={category.strCategory} className="w-full h-48 object-cover rounded mb-2" />
    <h3 className="text-xl font-semibold">{category.strCategory}</h3>
        <p className="text-gray-600">{category.strCategoryDescription.substring(0, 100)}...</p>
    <Link
    to={`/category/${category.strCategory}`}
    className="mt-2 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
        View Meals
    </Link>
    </div>
);
};

export default CategoryCard;