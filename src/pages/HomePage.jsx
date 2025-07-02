import Squares from '../Backgrounds/Squares/Squares.jsx';
import Navbar from '../Sections/NavBar.jsx';
import HeroSection from '../Sections/HeroSection.jsx';
import AboutSection from '../Sections/AboutSection.jsx';
import AchievementSection from '../Sections/AcheivementSection.jsx';
import SkillsSection from '../Sections/SkillsSection.jsx';
import ServicesSection from '../Sections/ServicesSection.jsx';
import ProjectsSection from '../Sections/ProjectsSection.jsx';

import FormSection from '../Sections/FormSection.jsx';
import Footer from '../Sections/Footer.jsx';

const HomePage = () => {
    return (
        <div className='relative overflow-hidden  font-sans'>
            {/* Background Squares Animation */}
            <div className='min-h-screen absolute top-0 left-0 w-screen h-full z-[-1] overflow-hidden'>
                <Squares
                    speed={0.5}
                    squareSize={40}
                    direction='diagonal' // up, down, left, right, diagonal
                    borderColor='#999fa0'
                />
            </div>
            {/* Foreground Content */}
            <Navbar />
            <HeroSection />
            <AchievementSection />
            <AboutSection />
            <SkillsSection />
            <ServicesSection />
            <ProjectsSection />
            <FormSection />
            <Footer />
        </div>
    );
};


export default HomePage;