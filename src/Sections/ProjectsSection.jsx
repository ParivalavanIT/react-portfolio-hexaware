import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
    {
        name: 'Healthcare Bot',
        description:
            'A chatbot for health-related queries, built with AI to assist users in first-level diagnosis and support.',
        link: 'https://github.com/ParivalavanIT/healthcare--bot',
    },
    {
        name: 'Web Compiler',
        description:
            'An online compiler supporting HTML, CSS, JS for instant code execution and learning on the go.',
        link: 'https://github.com/ParivalavanIT/web-compiler',
    },
    {
        name: 'GPT Interviewer',
        description:
            'An AI-powered mock interviewer that uses GPT to simulate real technical and HR interview scenarios.',
        link: 'https://github.com/ParivalavanIT/GPTInterviewer',
    },
    {
        name: 'Blood Donor Finder',
        description:
            'A platform to connect blood donors and recipients within the campus YRC community',
        link: 'https://github.com/ParivalavanIT/blood-doner_finder',
    },
    {
        name: 'Cropify',
        description:
            'A smart agriculture solution recommending best crops based on soil, temperature, and rainfall conditions.',
        link: 'https://github.com/ParivalavanIT/Cropify',
    },
    {
        name: 'Deepfake Detection',
        description:
            'A machine learning system to identify fake images and videos using advanced CNN techniques.',
        link: 'https://github.com/ParivalavanIT/deepfake-detection',
    },
    {
        name: 'SmartPass Ease',
        description:
            'A digital outpass and student tracking system to streamline campus movement authorization.',
        link: 'https://github.com/ParivalavanIT/smartpass-ease',
    },
];

const ProjectsSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section id="projects" className="py-16 px-6 bg-transparent">
            <div className="max-w-6xl mx-auto">
                <h2
                    className="text-4xl font-extrabold text-center text-black mb-12"
                    data-aos="fade-up"
                >
                    Projects
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={project.name}
                            data-aos="zoom-in-up"
                            data-aos-delay={idx * 100}
                            className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg p-6 flex flex-col justify-between"
                        >
                            <h3 className="text-2xl font-bold text-black mb-2">{project.name}</h3>
                            <p className="text-black/80 flex-grow">{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-block text-blue-400 font-medium hover:underline"
                            >
                                View on GitHub →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
