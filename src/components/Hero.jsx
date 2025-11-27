import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
            {/* Background Elements */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute top-40 -left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-80 h-80 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-12 md:mb-0">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-6">
                                求职中 / 可承接项目
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                                你好，我是 贡正阳 <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                    Web 全栈开发者
                                </span>
                            </h1>
                            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                                我构建无障碍、像素完美、安全且高性能的 Web 应用程序。热衷于使用现代技术创造流畅的用户体验。
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="#projects"
                                    className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 group"
                                >
                                    查看项目
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a
                                    href="#contact"
                                    className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center"
                                >
                                    联系我
                                </a>
                            </div>

                            <div className="mt-12 flex items-center gap-6 text-slate-400">
                                <a href="#" className="hover:text-slate-900 transition-colors"><Github size={24} /></a>
                                <a href="#" className="hover:text-blue-700 transition-colors"><Linkedin size={24} /></a>
                                <a href="#" className="hover:text-red-500 transition-colors"><Mail size={24} /></a>
                            </div>
                        </motion.div>
                    </div>

                    <div className="md:w-1/2 flex justify-center relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative w-80 h-80 md:w-96 md:h-96"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[2rem] rotate-6 opacity-20"></div>
                            <div className="absolute inset-0 bg-white rounded-[2rem] shadow-2xl overflow-hidden border-4 border-white">
                                <img
                                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=GZY&backgroundColor=b6e3f4"
                                    alt="GZY Avatar"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Floating Cards */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3"
                            >
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                                    5+
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-medium">年</p>
                                    <p className="text-sm font-bold text-slate-800">开发经验</p>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                                className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3"
                            >
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                    🚀
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-medium">已完成</p>
                                    <p className="text-sm font-bold text-slate-800">20+ 个项目</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
