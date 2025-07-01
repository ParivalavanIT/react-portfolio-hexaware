import React from 'react';
import GlassIcons from '../Components/GlassIcons/GlassIcons';
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaFigma, FaGitAlt,
} from 'react-icons/fa';
import {
    SiTailwindcss, SiMongodb, SiAdobephotoshop, SiVisualstudio, SiDotnet,
    SiMysql,
} from 'react-icons/si';

const SkillsSection = () => {
    const development = [
        { label: 'HTML5', icon: <FaHtml5 className="text-white text-3xl" />, color: 'red' },
        { label: 'CSS3', icon: <FaCss3Alt className="text-white text-3xl" />, color: 'blue' },
        { label: 'JavaScript', icon: <FaJs className="text-black text-3xl" />, color: 'yellow' },
        { label: 'React', icon: <FaReact className="text-white text-3xl" />, color: 'blue' },
        { label: 'Node.js', icon: <FaNodeJs className="text-white text-3xl" />, color: 'green' },
        { label: 'MongoDB', icon: <SiMongodb className="text-white text-3xl" />, color: 'green' },
        { label: 'C#', icon: <SiDotnet className="text-white text-3xl" />, color: 'purple' },
        { label: 'MySQL', icon: <SiMysql className="text-white text-3xl" />, color: 'red' },
    ];

    const design = [
        { label: 'Figma', icon: <FaFigma className="text-white text-3xl" />, color: 'blue' },
        { label: 'Photoshop', icon: <SiAdobephotoshop className="text-white text-3xl" />, color: 'blue' },
        { label: 'Tailwind CSS', icon: <SiTailwindcss className="text-white text-3xl" />, color: 'blue' },
    ];

    const extras = [
        { label: 'Git', icon: <FaGitAlt className="text-white text-3xl" />, color: 'red' },
        { label: 'VS Code', icon: <SiVisualstudio className="text-white text-3xl" />, color: 'blue' },
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-16" id='skills'>
            <h2 className="text-5xl font-extrabold text-center mb-16 text-black">My Skills</h2>

            <div className="grid md:grid-cols-2 gap-8">
                {/* LEFT: Development */}
                <div className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-md p-6 h-full">
                    <h3 className="text-2xl font-bold text-black text-center mb-6">Development</h3>
                    <GlassIcons items={development} className="justify-center" />
                </div>

                {/* RIGHT: Design (top) + Extras (bottom) */}
                <div className="flex flex-col gap-8">
                    {/* Design */}
                    <div className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-md p-6">
                        <h3 className="text-2xl font-bold text-black text-center mb-6">Design</h3>
                        <GlassIcons items={design} className="justify-center" />
                    </div>

                    {/* Extras */}
                    <div className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-md p-6">
                        <h3 className="text-2xl font-bold text-black text-center mb-6">Extras</h3>
                        <GlassIcons items={extras} className="justify-center" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
