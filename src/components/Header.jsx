import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: '关于我', href: '#about' },
        { name: '技能', href: '#skills' },
        { name: '项目', href: '#projects' },
        { name: '博客', href: '#blog' },
        { name: '联系我', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-slate-800 tracking-tighter">
                    GZY<span className="text-blue-600">.</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="/assets/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
                    >
                        简历
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-slate-800"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Nav */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-lg py-8 px-6 flex flex-col space-y-4 md:hidden">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-lg text-slate-600 hover:text-blue-600 font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="/assets/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-3 bg-blue-600 text-white rounded-lg font-medium text-center hover:bg-blue-700 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            下载简历
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
