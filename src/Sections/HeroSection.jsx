import React from 'react'
import Lanyard from '../Components/Lanyard/Lanyard.jsx'
import SplitText from '../TextAnimations/SplitText/SplitText.jsx'
import resumePdf from '../assets/resume/Parivalavan_Resume.pdf' // Adjust the path to your actual CV file
const HeroSection = () => {
    return (
        <div id='home'>
            {/* Foreground Container */}
            <div className='relative min-h-screen overflow-hidden max-w-[75%] mx-auto '>
                {/* Foreground Content */}
                <div className='grid grid-cols-12 gap-4 p-4 pt-0 '>
                    {/* Left Side: Animated Text */}
                    <div className='col-span-12 md:col-span-6 flex flex-col items-center justify-center  space-y-4 '>
                        <div className=' bg-white/20 backdrop-blur-md rounded-xl shadow-md p-10'>
                            <h1 className='text-3xl font-bold'>
                                I'm
                            </h1>
                            <SplitText
                                text="Parivalavan"
                                className="text-5xl font-bold "
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
                            <p >A passionate and energetic individual with a strong interest in technology, coding, and design. I enjoy building creative solutions and continuously learning new things to grow both personally and professionally.</p>
                            <div className="mt-6 flex space-x-4">
                                <a
                                    href="#contact"
                                    className="px-5 py-2 rounded-md bg-black text-white font-medium hover:bg-white hover:text-black transition"
                                >
                                    Contact
                                </a>
                                <a
                                    href={resumePdf} // adjust to your actual CV file path
                                    download
                                    className="px-5 py-2 rounded-md bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition"
                                >
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: 3D Lanyard */}
                    <div className='col-span-12 md:col-span-6 relative'>
                        <Lanyard position={[0, 0, 30]} gravity={[0, -40, 0]} fov={8} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeroSection
