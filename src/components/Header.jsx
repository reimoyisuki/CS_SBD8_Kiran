import { useState, useEffect } from 'react'
import panasonicLogo from '../assets/logo.png';

const Header = () => {
    return (
        <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-blue-100 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
            <img src={panasonicLogo} alt="Panasonic Logo" className="h-8" />
            <span className="font-semibold text-lg text-blue-800">Indonesia</span>
            </div>
            <nav className="hidden md:flex space-x-8 text-sm text-blue-800 font-medium">
            <a href="#home" className="hover:text-blue-600">Beranda</a>
            <a href="#consumer" className="hover:text-blue-600">Produk Konsumen</a>
            <a href="#business" className="hover:text-blue-600">Solusi Bisnis</a>
            <a href="#about" className="hover:text-blue-600">Tentang Kami</a>
            </nav>
        </div>
        </header>
        );
    };

    export default Header;
