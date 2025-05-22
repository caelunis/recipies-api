import React from 'react';

const About: React.FC = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <p>
                This app uses TheMealDB API to help you find and explore recipes from around the world.
                Search for meals by name and view detailed instructions, ingredients, and more.
            </p>
        </div>
    );
};

export default About;