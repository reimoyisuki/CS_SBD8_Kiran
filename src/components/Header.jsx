import { useState } from 'react';
import logoLight from '../assets/logo.png';
import logoDark from '../assets/logo-dark.png';

const Header = ({ isDarkMode, setIsDarkMode }) => {
return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-blue-100 dark:border-gray-700 shadow-sm">
    <div className="w-full max-w-[1600px] px-6 py-4 flex justify-between items-center mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-3">
        <img
            src={isDarkMode ? logoDark : logoLight}
            alt="Panasonic Logo"
            className="h-8 transition-all duration-300"
        />
        <span className="font-semibold text-lg text-blue-800 dark:text-white">Indonesia</span>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
        <a href="#home" className="hover:text-blue-600 dark:hover:text-blue-300 text-blue-800 dark:text-white">Beranda</a>
        <a href="#consumer" className="hover:text-blue-600 dark:hover:text-blue-300 text-blue-800 dark:text-white">Produk Konsumen</a>
        <a href="#business" className="hover:text-blue-600 dark:hover:text-blue-300 text-blue-800 dark:text-white">Solusi Bisnis</a>
        <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-300 text-blue-800 dark:text-white">Tentang Kami</a>
        </nav>

        {/* Dark Mode Toggle */}
        <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="ml-4 px-3 py-1 text-sm rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600">
        {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
    </div>
    </header>
);
};

export default Header;
