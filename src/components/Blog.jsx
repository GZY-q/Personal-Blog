import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const Blog = () => {
    const posts = [
        {
            title: "使用 Node.js 构建多人联机游戏",
            excerpt: "学习如何使用 Socket.io 和 Node.js 创建实时多人游戏体验。我们将涵盖状态同步和延迟处理。",
            date: "2024年11月15日",
            category: "后端",
            readTime: "8 分钟阅读"
        },
        {
            title: "2025 年前端工程化最佳实践",
            excerpt: "深入探讨前端开发的最新趋势，包括微前端、Signals 以及 React 的未来。",
            date: "2024年10月28日",
            category: "前端",
            readTime: "12 分钟阅读"
        },
        {
            title: "我的软件工程成长之路",
            excerpt: "回顾我大学 4 年的经历，我构建的项目，以及在成为全栈开发者的道路上学到的教训。",
            date: "2024年9月10日",
            category: "职业生涯",
            readTime: "5 分钟阅读"
        }
    ];

    return (
        <section id="blog" className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="md:w-2/3">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">最新文章</h2>
                        <p className="text-lg text-slate-600">
                            关于 Web 开发和软件工程的思考、教程和见解。
                        </p>
                    </div>
                    <a
                        href="#"
                        className="hidden md:flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                        查看所有文章 <ArrowRight size={16} />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <article
                            key={index}
                            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-slate-100 flex flex-col h-full"
                        >
                            <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                                <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-md font-medium text-xs">
                                    {post.category}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar size={14} />
                                    {post.date}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                                {post.title}
                            </h3>

                            <p className="text-slate-600 mb-6 flex-grow text-sm leading-relaxed">
                                {post.excerpt}
                            </p>

                            <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                                <span className="text-xs text-slate-400 font-medium">{post.readTime}</span>
                                <a href="#" className="text-blue-600 text-sm font-semibold hover:underline">
                                    阅读更多
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-8 md:hidden text-center">
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                        查看所有文章 <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Blog;
