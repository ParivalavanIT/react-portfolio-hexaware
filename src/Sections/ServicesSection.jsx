import React, { useEffect } from 'react';
import { FaCode, FaPalette, FaRobot } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
    {
        title: 'Web Development',
        description: 'Building responsive and performant websites using React, Node.js, and more.',
        icon: <FaCode className="text-4xl text-black group-hover:text-amber-500 group-hover:rotate-6 transition-all duration-300" />,
    },
    {
        title: 'UI/UX Design',
        description: 'Designing intuitive, aesthetic, and accessible user interfaces.',
        icon: <FaPalette className="text-4xl text-black group-hover:text-pink-500 group-hover:rotate-6 transition-all duration-300" />,
    },
    {
        title: 'AI Tools & Automation',
        description: 'Creating smart tools like GPT bots and sentiment analyzers.',
        icon: <FaRobot className="text-4xl text-black group-hover:text-green-500 group-hover:rotate-6 transition-all duration-300" />,
    },
];

const ServicesSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section id="services" className="py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-extrabold text-center text-black mb-12" data-aos="fade-up">
                    Services
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            data-aos="zoom-in-up"
                            className="group bg-white/30 backdrop-blur-lg rounded-2xl shadow-md p-6 text-black flex flex-col items-center text-center transition-all duration-300"
                        >
                            <div className="mb-4">{service.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                            <p className="text-black/80">{service.description}</p>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="mt-12 text-center" data-aos="fade-up">
                    <a
                        href="#contact"
                        className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-xl shadow hover:bg-amber-500 transition duration-300"
                    >
                        Hire Me
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
