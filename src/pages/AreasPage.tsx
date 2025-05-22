import React, { useEffect, useState } from 'react';
import { getAreas } from '../services/api';
import AreaCard from '../components/AreaCard';

const AreasPage: React.FC = () => {
    const [areas, setAreas] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getAreas()
            .then((response) => {
                setAreas(response.data.meals);
            })
            .catch((err) => {
                setError('Error fetching areas. Please try again.');
                console.error(err);
            });
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Meal Areas</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {areas.length > 0 ? (
                    areas.map((area) => <AreaCard key={area.strArea} area={area} />)
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default AreasPage;