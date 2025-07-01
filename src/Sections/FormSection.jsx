import React from 'react';

const FormSection = () => {
    return (
        <div className="max-w-2xl mx-auto px-4 py-16" id='contact'>
            <div className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-md p-8">
                <h2 className="text-3xl font-bold text-black mb-6 text-center">Contact Me</h2>

                <form
                    action="https://formsubmit.co/parivalavanmanikandan@gmail.com"
                    method="POST"
                    className="space-y-6"
                >
                    {/* Prevent bot spam */}
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_subject" value="New Contact Message from Portfolio" />

                    <div>
                        <label className="block text-black font-semibold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder="Your Name"
                            className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white/80 text-black outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>

                    <div>
                        <label className="block text-black font-semibold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white/80 text-black outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>

                    <div>
                        <label className="block text-black font-semibold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows="5"
                            placeholder="Say something..."
                            className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white/80 text-black outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black text-white font-semibold py-2 px-4 rounded-md hover:bg-opacity-90 transition-all"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FormSection;
