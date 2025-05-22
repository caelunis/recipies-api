import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">MealDB Recipe App</Link>
                <div>
                    <Link to="/" className="mx-2 hover:underline">Home</Link>
                    <Link to="/about" className="mx-2 hover:underline">About</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;