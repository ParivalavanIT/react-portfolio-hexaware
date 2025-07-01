import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white/30 backdrop-blur-md text-black py-8 mt-16">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Left side: Text */}
                <div className="text-center md:text-left">
                    <h4 className="text-lg font-semibold">Parivalavan Manikandan</h4>
                    <p className="text-sm">Building things with love and logic 💡</p>
                </div>

                {/* Center: Social Icons */}
                <div className="flex space-x-6 text-xl">
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
                {/* Navigation Button to Empty Page */}
                <Link
                    to="/empty"
                    className="text-black border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition"
                >
                    Click here to see Magic
                </Link>
                {/* Right side: Copyright */}
                <div className="text-center md:text-right text-sm">
                    © {new Date().getFullYear()} All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
