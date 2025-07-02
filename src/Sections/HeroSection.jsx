import React from 'react';
import Lanyard from '../Components/Lanyard/Lanyard.jsx';
import SplitText from '../TextAnimations/SplitText/SplitText.jsx';
import resumePdf from '../assets/resume/Parivalavan_Resume.pdf';

const HeroSection = () => {
    return (
        <div id="home" className="w-full">
            <div className="relative min-h-screen overflow-hidden w-[90%] max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-0">

                {/* Right Side (Lanyard shown first on small devices) */}
                <div className="order-1 sm:order-2 md:col-span-6 flex items-start justify-center ">
                    <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] ">
                        <Lanyard position={[0, 0, 30]} gravity={[0, -40, 0]} fov={10} />
                    </div>
                </div>

                {/* Left Side (Text content shown second on small devices) */}
                <div className="order-2 md:order-1 md:col-span-6 flex items-center justify-center pt-20 md:pt-24 lg:pt-28">
                    <div className="bg-white/20 backdrop-blur-md rounded-xl shadow-md p-6 md:p-10">
                        <h1 className="text-2xl md:text-3xl font-bold">I'm</h1>

                        <SplitText
                            text="Parivalavan"
                            className="text-4xl md:text-5xl font-bold"
                            delay={100}
                            duration={0.6}
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            textAlign="center"
                            onLetterAnimationComplete={() => {
                                console.log('All letters have animated!');
                            }}
                        />

                        <p className="mt-4 text-sm md:text-base">
                            A passionate and energetic individual with a strong interest in technology, coding, and design. I enjoy building creative solutions and continuously learning new things to grow both personally and professionally.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-4">
                            <a
                                href="#contact"
                                className="px-5 py-2 rounded-md bg-black text-white font-medium hover:bg-white hover:text-black transition"
                            >
                                Contact
                            </a>
                            <a
                                href={resumePdf}
                                download
                                className="px-5 py-2 rounded-md bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HeroSection;
