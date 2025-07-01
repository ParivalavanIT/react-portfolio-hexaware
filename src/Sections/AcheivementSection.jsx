import React from 'react';
import { FaAward } from 'react-icons/fa';

const AchievementSection = () => {
    return (
        <section id="achievement" className="py-16 px-6">
            <div className="max-w-4xl mx-auto bg-amber-400/20 border border-amber-300 backdrop-blur-md rounded-2xl shadow-xl p-8 text-black relative overflow-hidden">
                {/* Glowing circle behind the award icon */}
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-amber-300 opacity-30 rounded-full blur-3xl z-0"></div>

                {/* Content */}
                <div className="relative z-10 text-center">
                    <div className="flex justify-center items-center mb-4">
                        <FaAward className="text-5xl text-amber-500 drop-shadow-md" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">ISTE Best Student Award</h2>
                    <p className="text-md md:text-lg text-black/80 font-medium">
                        Honored with the prestigious ISTE Best Student Award for outstanding academic performance,
                        leadership in technical initiatives, and consistent contribution to innovation and development
                        in the field of engineering and technology.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AchievementSection;
