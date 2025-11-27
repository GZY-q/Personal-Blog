import React from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-blue-600 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-1/2 p-10 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 z-0"></div>
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-6">联系我</h2>
                            <p className="text-blue-100 mb-8 leading-relaxed">
                                我目前对新的机会和合作持开放态度。无论你有问题还是只是想打个招呼，我都会尽力回复！
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-blue-200 uppercase tracking-wider font-semibold">邮箱</p>
                                        <a href="mailto:hello@gzy.dev" className="text-lg font-medium hover:text-blue-200 transition-colors">
                                            hello@gzy.dev
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-blue-200 uppercase tracking-wider font-semibold">位置</p>
                                        <p className="text-lg font-medium">中国，上海</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 mt-12">
                            <p className="text-sm text-blue-200">
                                &copy; 2025 GZY. 版权所有.
                            </p>
                        </div>
                    </div>

                    <div className="md:w-1/2 p-10 md:p-12 bg-white">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">姓名</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                    placeholder="张三"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">邮箱</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                    placeholder="zhangsan@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">留言</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                                    placeholder="请告诉我关于你的项目..."
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                className="w-full py-4 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group"
                            >
                                发送信息
                                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
