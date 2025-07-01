import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo / Site Title */}
                <div className="text-2xl font-bold text-black">
                    <a href='#home'>Pari.dev</a>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="text-black font-medium hover:text-black/70 transition"
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* Social Icons */}
                    <div className="flex space-x-4 text-xl ml-4">
                        <a
                            href="https://github.com/parivalavanit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-black/70 transition"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://linkedin.com/in/parivalavan-m"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-black/70 transition"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button onClick={toggleMenu} className="md:hidden text-2xl text-black">
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white/80 backdrop-blur-md px-6 py-4 space-y-4 text-center">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="block text-black font-medium hover:text-black/70 transition"
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* Mobile Social Icons */}
                    <div className="flex justify-center space-x-6 pt-4 text-xl">
                        <a
                            href="https://github.com/parivalavanit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-black/70 transition"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://linkedin.com/in/parivalavan-m"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-black/70 transition"
                        >
                            <FaLinkedin />
                        </a>

                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
