import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MealDetailPage from './pages/MealDetailPage';
import RandomMealPage from './pages/RandomMealPage';
import CategoriesPage from './pages/CategoriesPage';
import CategoryMealsPage from './pages/CategoryMealsPage';
import AreasPage from './pages/AreasPage';
import AreaMealsPage from './pages/AreaMealsPage';
import IngredientsPage from './pages/IngredientsPage';
import IngredientMealsPage from './pages/IngredientMealsPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import About from './pages/About';

const App: React.FC = () => {
    return (
        <AuthProvider>
            <Router>
                <div className="flex flex-col min-h-screen bg-gray-100">
                    <Navbar />
                    <main className="container mx-auto p-4 flex-grow">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/meal/:id" element={<MealDetailPage />} />
                            <Route path="/random" element={<RandomMealPage />} />
                            <Route path="/categories" element={<CategoriesPage />} />
                            <Route path="/category/:category" element={<CategoryMealsPage />} />
                            <Route path="/areas" element={<AreasPage />} />
                            <Route path="/area/:area" element={<AreaMealsPage />} />
                            <Route path="/ingredients" element={<IngredientsPage />} />
                            <Route path="/ingredient/:ingredient" element={<IngredientMealsPage />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/profile" element={<ProfilePage />} />
                            <Route path="/about" element={<About />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;