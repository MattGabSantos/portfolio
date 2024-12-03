import React, { useState } from "react";
import P1 from './assets/P1.png';
import P2 from './assets/P2.png';
import P3 from './assets/P3.png';
import P4 from './assets/P4.png';
import P5 from './assets/P5.jpg';  
import P6 from './assets/P6.jpg';  

const ProjectsSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [projectLink, setProjectLink] = useState<string>("");
  const [fullProjectDetails, setFullProjectDetails] = useState<string>("");

  const projectData = [
    { 
      image: P1, 
      title: "Smart Classroom", 
      details: "Group Created in Figma", 
      link: "https://www.figma.com/proto/Cndu666ZfEMaE0sW552KF1/Smart-Classroom---Group-7?node-id=0-1",
      fullDetails: "This project demonstrates a smart classroom system with IoT integration and interactive features designed to improve learning experiences."
    },
    { 
      image: P2, 
      title: "Events Hub Prototype", 
      details: "Group Project created in Figma", 
      link: "https://www.figma.com/proto/i3CZ6xjGipmuzWNAaWmsl5/EVENTS-HUB-PROTOTYPE?node-id=1-29&starting-point-node-id=1%3A29",
      fullDetails: "The Events Hub is a prototype showcasing a platform to enhance student engagement with university events through dynamic, interactive features."
    },
    { 
      image: P3, 
      title: "Interactive Map Prototype", 
      details: "Solo Project Created in Figma", 
      link: "https://www.figma.com/proto/JNhS0PG2CkjNMfzaSzAg3z/Santos---Enabling-Assessment-6?node-id=45-55&starting-point-node-id=45%3A55",
      fullDetails: "An interactive map prototype designed for navigation, real-time updates, and user-friendly interfaces for city-wide accessibility."
    },
    { 
      image: P4, 
      title: "DRAFT XR VR", 
      details: "Solo Project Created in Figma", 
      link: "https://www.figma.com/proto/sJ8ckibSb5xZKDIohL9CLF/Santos---DRAFTXR?node-id=13-248&starting-point-node-id=13%3A248",
      fullDetails: "A cutting-edge virtual reality (VR) project focusing on immersive drafting tools for architectural and engineering professionals."
    },
    { 
      image: P5, 
      title: "Project 5", 
      details: "SAD RAVEN", 
      link: " ",
      fullDetails: "WIP."
    },
    { 
      image: P6, 
      title: "Project 6", 
      details: "SAD RAVEN", 
      link: " ",
      fullDetails: "WIP."
    },
  ];

  const openModal = (image: string, link: string, fullDetails: string) => {
    setSelectedImage(image);
    setProjectLink(link);
    setFullProjectDetails(fullDetails);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage("");
    setProjectLink("");
    setFullProjectDetails("");
  };

  return (
    <div id="projects" className="projects-section py-20 bg-white">
      <style>{`
        .projects-section {
          background-color: #ffffff;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          background-color: #f3f4f6;
          padding: 1rem;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .project-card:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
        }

        .project-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 10px;
          transition: transform 0.3s ease;
        }

        .project-card img:hover {
          transform: scale(1.1);
        }

        .project-card h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #4b5563;
          margin-top: 1rem;
        }

        .project-card p {
          color: #6b7280;
          margin-top: 0.5rem;
        }

        .modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: ${modalOpen ? "1" : "0"};
          pointer-events: ${modalOpen ? "auto" : "none"};
          transition: opacity 0.3s ease;
        }

        .modal-content {
          background-color: white;
          padding: 2rem;
          border-radius: 10px;
          width: 90%;
          max-width: 600px;
          text-align: center;
        }

        .modal img {
          width: 100%;
          max-height: 300px;
          object-fit: contain;
          border-radius: 10px;
        }

        .modal p {
          margin-top: 1rem;
          color: #4b5563;
          font-size: 1rem;
        }

        .modal button {
          margin-top: 1rem;
          padding: 0.75rem 1.5rem;
          background-color: #4b5563;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .modal button:hover {
          background-color: #6b7280;
        }

        .grid-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          margin-top: 2rem;
        }

        @media (min-width: 640px) {
          .grid-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .grid-container {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>

      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Projects</h2>

        <div className="grid-container">
          {projectData.map((project, index) => (
            <button
              key={index}
              className="project-card"
              onClick={() => openModal(project.image, project.link, project.fullDetails)}
            >
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.details}</p>
            </button>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Zoomed In" />
            <p>{fullProjectDetails}</p>
            <div>
              <a href={projectLink} target="_blank" rel="noopener noreferrer">
                <button>Check Project</button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;
