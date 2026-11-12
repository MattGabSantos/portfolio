import React from "react";
import NavbarComponent from './Navbar';
import HelloSection from './HelloSection';
import ExperienceSection from './ExperienceSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased overflow-x-hidden">
      <NavbarComponent />
      <HelloSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
};

export default App;
