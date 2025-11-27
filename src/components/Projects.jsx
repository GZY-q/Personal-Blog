import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "电商管理后台",
            description: "一个用于管理产品、订单和客户的综合管理后台。具有实时数据分析和深色模式功能。",
            tags: ["React", "Tailwind", "Recharts", "Node.js"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            github: "#",
            demo: "#"
        },
        {
            title: "AI 聊天应用",
            description: "由 OpenAI API 驱动的实时聊天应用程序。支持多个聊天室和消息历史记录持久化。",
            tags: ["Next.js", "Socket.io", "OpenAI", "MongoDB"],
            image: "https://images.unsplash.com/photo-1587560699334-cc4da63c2409?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            github: "#",
            demo: "#"
        },
        {
            title: "任务管理工具",
            description: "带有拖放看板的协作任务管理器。包括团队功能和截止日期通知。",
            tags: ["Vue.js", "Firebase", "Pinia", "Sass"],
            image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            github: "#",
            demo: "#"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">精选项目</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        这里是我参与的一些项目。每一个都充满了独特的挑战和学习机会。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    <a
                                        href={project.github}
                                        className="p-3 bg-white rounded-full text-slate-900 hover:text-blue-600 transition-colors"
                                        title="查看代码"
                                    >
                                        <Github size={20} />
                                    </a>
                                    <a
                                        href={project.demo}
                                        className="p-3 bg-white rounded-full text-slate-900 hover:text-blue-600 transition-colors"
                                        title="在线演示"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                        在 GitHub 查看更多 <ExternalLink size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
