'use client';

import { Award, Briefcase, Code, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import { Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

// 程式語言技能資料
const skillsData = [
    { name: 'JavaScript', level: 40, color: '#F7DF1E' },
    { name: 'TypeScript', level: 20, color: '#3178C6' },
    { name: 'React', level: 70, color: '#61DAFB' },
    { name: 'Next.js', level: 65, color: '#000000' },
    { name: 'Node.js', level: 5, color: '#339933' },
    { name: 'Python', level: 60, color: '#3776AB' },
    { name: 'HTML/CSS', level: 90, color: '#E34F26' },
    { name: 'Tailwind CSS', level: 85, color: '#06B6D4' },
];

// 專案經驗資料
const projectsData = [
    { name: 'Frontend', value: 40, color: '#8884d8' },
    { name: 'Fullstack', value: 30, color: '#82ca9d' },
    { name: 'Backend', value: 20, color: '#ffc658' },
    { name: 'Other', value: 10, color: '#ff7300' },
];

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
            {/* Hero Section */}
            <section className="relative px-4 py-16 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-8">
                        <div className="overflow-hidden p-[10px] size-32 mx-auto mb-6 bg-white border border-gray-200 rounded-full flex items-center justify-center">
                            {/* <User className="w-16 h-16 text-white" /> */}
                            <Image
                                src="/aaron-pic.jpg"
                                alt="Aaron Wang"
                                width={160}
                                height={160}
                                style={{ objectFit: "cover" }}
                                className="rounded-full"
                            />
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                            Aaron Wang
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6">
                            全端工程師 | Full-Stack Developer
                        </p>
                        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                            熱愛程式設計與新技術，專精於現代網頁開發
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-6 mb-12">
                        <a href="#" className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                            <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                        </a>
                        <a href="#" className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                            <Linkedin className="w-6 h-6 text-blue-600" />
                        </a>
                        <a href="#" className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                            <Mail className="w-6 h-6 text-red-500" />
                        </a>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="px-4 py-16 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            關於我
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-slate-50 dark:bg-slate-700 rounded-lg">
                            <Code className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">程式開發</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                專精於現代前端框架與後端技術，具備完整的全端開發能力
                            </p>
                        </div>

                        <div className="text-center p-6 bg-slate-50 dark:bg-slate-700 rounded-lg">
                            <Briefcase className="w-12 h-12 text-green-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">專案經驗</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                參與多個大型專案開發，具備團隊協作與專案管理經驗
                            </p>
                        </div>

                        <div className="text-center p-6 bg-slate-50 dark:bg-slate-700 rounded-lg">
                            <Award className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">持續學習</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                保持對新技術的熱忱，持續學習並應用最新的開發技術
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="px-4 py-16 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            技能專長
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Skills Bar Chart */}
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                                程式語言熟練度
                            </h3>
                            <div className="h-80">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={skillsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis
                                            dataKey="name"
                                            angle={-45}
                                            textAnchor="end"
                                            height={80}
                                            fontSize={12}
                                        />
                                        <YAxis />
                                        <Tooltip
                                            formatter={(value) => [`${value}%`, '熟練度']}
                                            labelStyle={{ color: '#374151' }}
                                        />
                                        <Bar dataKey="level" radius={[4, 4, 0, 0]}>
                                            {skillsData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Projects Pie Chart */}
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                                專案經驗分布
                            </h3>
                            <div className="h-80">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={projectsData}
                                            cx="50%"
                                            cy="50%"
                                            labelLine={false}
                                            label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                                            outerRadius={80}
                                            fill="#8884d8"
                                            dataKey="value"
                                        >
                                            {projectsData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="px-4 py-16 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        聯絡我
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>

                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        如果您對我的技能或經驗有興趣，歡迎與我聯絡！
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="mailto:your.email@example.com"
                            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            <Mail className="w-5 h-5 mr-2" />
                            發送郵件
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-900 transition-colors"
                        >
                            <Github className="w-5 h-5 mr-2" />
                            查看 GitHub
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="px-4 py-8 sm:px-6 lg:px-8 bg-gray-900 text-white">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-gray-400">
                        © 2024 Aaron Wang. 使用 Next.js 與 Tailwind CSS 建立
                    </p>
                </div>
            </footer>
        </div>
    );
}
