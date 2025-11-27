import React from 'react';

const Skills = () => {
    const skillCategories = [
        {
            title: "前端开发",
            skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Vue.js", "Tailwind CSS", "Framer Motion", "Redux"]
        },
        {
            title: "后端开发",
            skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL", "Firebase"]
        },
        {
            title: "工具 & DevOps",
            skills: ["Git & GitHub", "Docker", "AWS", "VS Code", "Webpack", "Vite", "Linux", "CI/CD"]
        },
        {
            title: "其他",
            skills: ["Agile/Scrum", "UI/UX 设计", "Figma", "SEO", "Web 无障碍", "技术写作"]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">专业技能</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        我用于将创意变为现实的全面技术和工具列表。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100"
                        >
                            <h3 className="text-xl font-bold text-slate-800 mb-6 pb-2 border-b border-slate-100">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
