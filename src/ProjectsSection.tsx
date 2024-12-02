import React, { useState } from "react";
import P1 from './assets/P1.png';
import P2 from './assets/P2.png';
import P3 from './assets/P3.png';
import P4 from './assets/P4.png';
const ProjectsSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [projectLink, setProjectLink] = useState<string>("");

  const openModal = (image: string, link: string) => {
    setSelectedImage(image);
    setProjectLink(link);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage("");
    setProjectLink("");
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
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          width: 100%;
          max-width: 350px;
        }

        .project-card:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
        }

        .project-card img {
          width: 100%;
          height: 400px; /* Adjusted height */
          object-fit: cover;
          border-radius: 10px;
          transition: transform 0.3s ease;
        }

        .project-card img:hover {
          transform: scale(1.1); /* Zoom effect on hover */
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
          width: 80%;
          max-width: 600px;
          text-align: center;
        }

        .modal img {
          width: 100%;
          max-height: 400px;
          object-fit: contain;
          border-radius: 10px;
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
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-top: 2rem;
          justify-items: center;
        }

        .separator {
          width: 100%;
          height: 1px;
          background-color: #e5e7eb;
          margin-top: 5rem;
          margin-bottom: 2rem; /* Space between line and content */
        }

        @media (min-width: 640px) {
          .grid-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .grid-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      <div className="container mx-auto px-6">
      <div className="separator"></div> {/* Separator line below heading */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Projects</h2>
 

        <div className="grid-container">
          <button
            className="project-card"
            onClick={() =>
              openModal("https://via.placeholder.com/600", "https://www.figma.com/proto/Cndu666ZfEMaE0sW552KF1/Smart-Classroom---Group-7?node-id=4-29&starting-point-node-id=4%3A29")
            }
          >
            <img
              src={P1}
              alt="Project 1"
              className="rounded-lg"
            />
            <h3>Smart Classroom</h3>
            <p>Created in Figma</p>
          </button>

          <button
            className="project-card"
            onClick={() =>
              openModal("https://via.placeholder.com/600", "https://www.figma.com/proto/i3CZ6xjGipmuzWNAaWmsl5/Untitled?node-id=0-1")
            }
          >
            <img
              src={P2}
              alt="Project 2"
              className="rounded-lg"
            />
            <h3>Events Hub Prototype</h3>
            <p>Group Project created in Figma</p>
          </button>

          <button
            className="project-card"
            onClick={() =>
              openModal("https://via.placeholder.com/600", "https://www.figma.com/proto/JNhS0PG2CkjNMfzaSzAg3z/Santos---Enabling-Assessment-6?node-id=45-55&starting-point-node-id=45%3A55")
            }
          >
            <img
              src={P3}
              alt="Project 3"
              className="rounded-lg"
            />
            <h3>Interactive Map Prototype</h3>
            <p>Created in Figma</p>
          </button>

          <button
            className="project-card"
            onClick={() =>
              openModal("https://via.placeholder.com/600", "https://www.figma.com/proto/sJ8ckibSb5xZKDIohL9CLF/Santos---DRAFTXR?node-id=13-248&starting-point-node-id=13%3A248")
            }
          >
            <img
              src={P4}
              alt="Project 4"
              className="rounded-lg"
            />
            <h3>DRAFT XR VR</h3>
            <p>Created in Figma</p>
          </button>
        </div>
      </div>

      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImage} alt="Zoomed In" />
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
