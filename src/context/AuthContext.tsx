import React, { createContext, useContext, useState, useEffect } from 'react';
import { Meal } from '../services/api';

interface User {
    username: string;
    email: string;
    token: string;
    favorites: string[]; // Store meal IDs
}

interface AuthContextType {
    user: User | null;
    login: (username: string, password: string, email?: string) => boolean;
    logout: () => void;
    updateProfile: (email: string) => void;
    addFavorite: (mealId: string) => void;
    removeFavorite: (mealId: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // Check local storage for existing user on mount
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (username: string, password: string, email: string = 'user@example.com') => {
        // Simple auth: check if username and password are non-empty
        // In a real app, this would verify against a backend
        if (username && password) {
            const newUser: User = {
                username,
                email,
                token: btoa(`${username}:${password}`), // Simple token (base64)
                favorites: [],
            };
            setUser(newUser);
            localStorage.setItem('user', JSON.stringify(newUser));
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    const updateProfile = (email: string) => {
        if (user) {
            const updatedUser = { ...user, email };
            setUser(updatedUser);
            localStorage.setItem('user', JSON.stringify(updatedUser));
        }
    };

    const addFavorite = (mealId: string) => {
        if (user) {
            const updatedUser = { ...user, favorites: [...user.favorites, mealId] };
            setUser(updatedUser);
            localStorage.setItem('user', JSON.stringify(updatedUser));
        }
    };

    const removeFavorite = (mealId: string) => {
        if (user) {
            const updatedUser = { ...user, favorites: user.favorites.filter((id) => id !== mealId) };
            setUser(updatedUser);
            localStorage.setItem('user', JSON.stringify(updatedUser));
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, updateProfile, addFavorite, removeFavorite }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};