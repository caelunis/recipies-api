import React from 'react';
import { Link } from 'react-router-dom';
import { Area } from '../services/api';

interface AreaCardProps {
    area: Area;
}

const AreaCard: React.FC<AreaCardProps> = ({ area }) => {
    return (
        <div className="border p-4 rounded shadow bg-white">
            <h3 className="text-xl font-semibold">{area.strArea}</h3>
            <Link
                to={`/area/${area.strArea}`}
                className="mt-2 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                View Meals
            </Link>
        </div>
    );
};

export default AreaCard;