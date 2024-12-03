import React from "react";
import { useSpring, animated } from "@react-spring/web";

const SkillsSection: React.FC = () => {
  const skillsAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(100%)" }, // Start from the right
    to: { opacity: 1, transform: "translateX(0)" },
    delay: 800,
  });

  return (
    <div id="skills" className="skills-section py-20 mb-16"> {/* Added margin-bottom */}
      <style>{`
        .skills-section {
          background-color: #f9fafb;
          padding-top: 5rem;
        }

        .skills-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); /* Responsive grid */
          gap: 1.5rem; /* Space between cards */
          padding: 0 2rem;
        }

        .skill-card {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #fff;
          padding: 1rem; /* Reduced padding */
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 150px; /* Smaller size */
          transition: all 0.3s ease;
          cursor: pointer;
          margin-bottom: 1rem; /* Added margin-bottom */
        }

        .skill-card:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
        }

        .skill-card img {
          width: 60px; /* Reduced size */
          height: 60px; /* Reduced size */
          margin-bottom: 1rem;
        }

        .skill-card p {
          color: #4b5563;
          font-size: 0.875rem;
          font-weight: 500;
          text-align: center;
        }

        .separator {
          width: 100%;
          height: 1px;
          background-color: #e5e7eb; /* Light gray separator line */
          margin-bottom: 2rem; /* Space between line and content */
        }
      `}</style>

      <div className="container mx-auto px-6">
        <div className="separator"></div> {/* Separator line */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Skills
        </h2>

        <animated.div style={skillsAnimation} className="skills-container">
          <div className="skill-card">
            <img
              src="https://static-00.iconduck.com/assets.00/figma-icon-2048x2048-lvgft610.png"
              alt="Skill 1"
            />
            <p>Figma</p>
          </div>

          <div className="skill-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png"
              alt="Skill 2"
            />
            <p>Photoshop</p>
          </div>

          <div className="skill-card">
            <img
              src="https://www.shareicon.net/download/2016/07/10/119874_apps_512x512.png"
              alt="Skill 3"
            />
            <p>React</p>
          </div>

          <div className="skill-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoW-PbNnnL4rSdys2ReJ1UFMg4bmZB7jTF7w&s"
              alt="Skill 4"
            />
            <p>CSS</p>
          </div>

          <div className="skill-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
              alt="Skill 5"
            />
            <p>TypeScript</p>
          </div>

          <div className="skill-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
              alt="Skill 6"
            />
            <p>HTML</p>
          </div>

          <div className="skill-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
              alt="Skill 7"
            />
            <p>Tailwind CSS</p>
          </div>
        </animated.div>
      </div>
    </div>
  );
};

export default SkillsSection;
