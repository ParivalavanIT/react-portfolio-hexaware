import React from 'react'
import image from '../assets/parivalavan.jpg'; // Adjust the path to your image
const AboutSection = () => {
    return (
        <div className="relative max-w-6xl p-20 bg-white/20 backdrop-blur-md rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-4 mx-auto m-4" id='about'>
            {/* Text Section */}
            <div className="w-full md:w-1/2 flex flex-col items-start justify-center text-left space-y-4">
                <h1 className="text-4xl font-bold mb-4 ">About Me</h1>
                <p>
                    I'm Parivalavan, a passionate and energetic developer who thrives on building intuitive, visually stunning, and user-centric applications. My love for tech started with curiosity and turned into a craft that lets me create and innovate daily.
                    With a strong foundation in front-end technologies and experience in full-stack development, I enjoy turning complex ideas into elegant solutions. I'm constantly exploring new tools, frameworks, and creative workflows that push the boundaries of web experiences.
                    Beyond the code, I{"'"}m a problem-solver at heart, always ready to collaborate, learn, and deliver impactful digital products that make a difference.
                </p>

                <a
                    href="#contact"
                    className="px-5 py-2 rounded-md bg-black text-white font-medium hover:bg-white hover:text-black transition"
                >
                    Contact
                </a>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src={image} // Adjust the path to your image
                    alt="Parivalavan"
                    className="w-64 h-64 object-cover rounded-full border-4 border-white shadow-xl"
                />
            </div>
        </div>

    )
}

export default AboutSection
