import React from "react";
import { useSpring, animated } from "@react-spring/web";

const SkillsSection: React.FC = () => {
  const skillsAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(100%)" },  // Start from the right
    to: { opacity: 1, transform: "translateX(0)" },
    delay: 800,
  });

  return (
    <div id="skills" className="skills-section py-20 bg-gray-50 mb-16"> {/* Added margin-bottom */}
      <style>{`
        .skills-section {
          background-color: #f9fafb;
          padding-top: 5rem;
        }

        .skills-container {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
          padding: 0 2rem;
        }

        .skill-card {
          display: flex;
          flex-direction: column;
          justify-center;
          align-items: center;
          background-color: #fff;
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          width: 150px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .skill-card:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
        }

        .skill-card img {
          width: 80px;  /* Increased size */
          height: 80px; /* Increased size */
          margin-bottom: 1rem;
        }

        .skill-card p {
          color: #4b5563;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .skill-card-button {
          width: 150px;
          height: 150px;
          background: none;
          border: none;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .skill-card-button:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
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
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Skills</h2> {/* Reduced margin bottom for title */}
  

        <animated.div style={skillsAnimation} className="skills-container">
          <button className="skill-card-button">
            <div className="skill-card">
              <img
                src="https://static-00.iconduck.com/assets.00/figma-icon-2048x2048-lvgft610.png"
                alt="Skill 1"
                className="w-20 h-20 mb-4"  /* Increased size */
              />
              <p className="text-sm font-medium text-gray-700">Figma</p>
            </div>
          </button>

          <button className="skill-card-button">
            <div className="skill-card">
              <img
                src="https://w7.pngwing.com/pngs/548/34/png-transparent-adobe-photoshop-macos-bigsur-icon-thumbnail.png"
                alt="Skill 2"
                className="w-20 h-20 mb-4"  /* Increased size */
              />
              <p className="text-sm font-medium text-gray-700">Photoshop</p>
            </div>
          </button>

          <button className="skill-card-button">
            <div className="skill-card">
              <img
                src="https://www.shareicon.net/download/2016/07/10/119874_apps_512x512.png"
                alt="Skill 3"
                className="w-20 h-20 mb-4"  /* Increased size */
              />
              <p className="text-sm font-medium text-gray-700">React</p>
            </div>
          </button>

          <button className="skill-card-button">
            <div className="skill-card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoW-PbNnnL4rSdys2ReJ1UFMg4bmZB7jTF7w&s"
                alt="Skill 4"
                className="w-20 h-20 mb-4"  /* Increased size */
              />
              <p className="text-sm font-medium text-gray-700">CSS</p>
            </div>
          </button>
        </animated.div>
      </div>
    </div>
  );
};

export default SkillsSection;
