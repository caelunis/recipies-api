import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getMealById } from '../services/api';
import MealCard from '../components/MealCard';

const ProfilePage: React.FC = () => {
    const { user, logout, updateProfile } = useAuth();
    const [email, setEmail] = useState(user?.email || '');
    const [favorites, setFavorites] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    React.useEffect(() => {
        if (user?.favorites) {
            Promise.all(user.favorites.map((id) => getMealById(id).then((res) => res.data.meals[0])))
                .then((meals) => setFavorites(meals))
                .catch((err) => {
                    setError('Error fetching favorite meals.');
                    console.error(err);
                });
        }
    }, [user]);

    const handleUpdateProfile = (e: React.FormEvent) => {
        e.preventDefault();
        updateProfile(email);
        alert('Profile updated!');
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    if (!user) {
        navigate('/login');
        return null;
    }

    return (
        <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Profile</h2>
            <div className="mb-4">
                <p><strong>Username:</strong> {user.username}</p>
                <form onSubmit={handleUpdateProfile} className="mt-4">
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border p-2 rounded w-full mb-2"
                        required
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Update Email
                    </button>
                </form>
            </div>
            <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
                Logout
            </button>
            <h3 className="text-xl font-semibold mt-6 mb-4">Favorite Meals</h3>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {favorites.length > 0 ? (
                    favorites.map((meal) => <MealCard key={meal.idMeal} meal={meal} />)
                ) : (
                    <p className="text-gray-500">No favorite meals yet.</p>
                )}
            </div>
        </div>
    );
};

export default ProfilePage;