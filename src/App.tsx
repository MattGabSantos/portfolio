import React from "react";
import NavbarComponent from './Navbar';
import HelloSection from './HelloSection';
import ExperienceSection from './ExperienceSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';

const App: React.FC = () => {
  return (
    <div className="scroll-smooth font-sans max-w-screen-lg mx-auto sm:px-6 lg:px-8">
      <NavbarComponent />
      <HelloSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
};

export default App;
