import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MealDetailPage from './pages/MealDetailPage';
import About from './pages/About';
import './styles.css';

const App: React.FC = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen bg-gray-100">
                <Navbar />
                <main className="container mx-auto p-4 flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/meal/:id" element={<MealDetailPage />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;