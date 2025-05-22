import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
    const { user, logout } = useAuth();

    return (
        <nav className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">MealDB Recipe App</Link>
                <div>
                    <Link to="/" className="mx-2 hover:underline">Home</Link>
                    <Link to="/random" className="mx-2 hover:underline">Random Meal</Link>
                    <Link to="/categories" className="mx-2 hover:underline">Categories</Link>
                    <Link to="/areas" className="mx-2 hover:underline">Areas</Link>
                    <Link to="/ingredients" className="mx-2 hover:underline">Ingredients</Link>
                    <Link to="/about" className="mx-2 hover:underline">About</Link>
                    {user ? (
                        <>
                            <Link to="/profile" className="mx-2 hover:underline">Profile</Link>
                            <button
                                onClick={logout}
                                className="mx-2 hover:underline"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link to="/login" className="mx-2 hover:underline">Login</Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;