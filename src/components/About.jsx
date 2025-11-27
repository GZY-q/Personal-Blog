import React from 'react';
import { Code, Server, Globe, Cpu } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Workspace"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply"></div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-slate-50 rounded-lg -z-10 border border-slate-200"></div>
                        <div className="absolute -top-6 -left-6 w-48 h-48 bg-blue-50 rounded-lg -z-10"></div>
                    </div>

                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            关于我
                        </h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            我是一名软件工程专业的毕业生，热衷于构建可扩展的 Web 应用程序。
                            我的旅程始于简单的 HTML 页面，现已发展为使用 React、Node.js 和云服务等现代技术进行全栈开发。
                        </p>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            我专注于编写整洁、可维护的代码并设计直观的用户界面。
                            目前，我正在寻找机会参与创新项目，并作为开发者不断成长。
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                                    <Code size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">前端开发</h3>
                                    <p className="text-sm text-slate-500">React, Vue, Tailwind</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                                    <Server size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">后端开发</h3>
                                    <p className="text-sm text-slate-500">Node.js, Express, Mongo</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                                    <Globe size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">Web3</h3>
                                    <p className="text-sm text-slate-500">Solidity, Ethers.js</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                                    <Cpu size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">AI 工具</h3>
                                    <p className="text-sm text-slate-500">LLMs, Stable Diffusion</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
