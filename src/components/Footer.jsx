import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <a href="#" className="text-2xl font-bold text-white tracking-tighter mb-2 block">
                            GZY<span className="text-blue-500">.</span>
                        </a>
                        <p className="text-sm">
                            用激情和精准打造数字体验。
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full">
                            <Github size={20} />
                        </a>
                        <a href="#" className="hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full">
                            <Twitter size={20} />
                        </a>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>&copy; {new Date().getFullYear()} GZY. 版权所有.</p>
                    <p className="mt-2 md:mt-0">
                        设计与构建使用 <span className="text-red-500">♥</span> React & Tailwind
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
