import React from "react";

const ExperienceSection: React.FC = () => {
  return (
    <div id="experience" className="experience-section py-20 bg-white">
      <style>
        {`
        .experience-section {
          background-color: #fff;
          padding-top: 5rem;
          padding-bottom: 3rem;
        }

        .image-container {
          flex: 1;
          width: 300px; /* Making the image smaller */
        }

        .image {
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          width: 65%;
          height: auto;
        }

        .experience-cards-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          flex: 2;
          width: 350px; /* Control width for the cards */
        }

        .experience-card {
          width: 100%;
          padding: 1.2rem;
          border: 2px solid #ddd;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 1rem;
          background-color: #f9fafb;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          transition: box-shadow 0.3s ease, background-color 0.3s ease;
          cursor: pointer;
        }

        .experience-card:hover {
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          background-color: #f1f5f9;
        }

        .experience-card-content {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .experience-card-image img {
          border-radius: 30%;
          object-fit: cover;
          width: 60px; 
          height: 60px;
        }

        .experience-card-text {
          flex: 1;
        }

        .experience-card-text h3 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #333;
        }

        .experience-card-text p {
          color: #6b7280;
          font-size: 0.875rem;
        }

        .content-container {
          display: flex;
          gap: 2rem;
          justify-content: flex-start;
        }
        
        .separator {
          width: 100%;
          height: 1px;
          background-color: #e5e7eb;
          margin-bottom: 2rem;
        }

        .experience-subsection {
          margin-top: 4rem;
          padding-top: 1rem;
        }

        .experience-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .experience-item {
          width: 100%;
          padding: 1.2rem;
          border: 2px solid #ddd;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 1rem;
          background-color: #f9fafb;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          transition: box-shadow 0.3s ease, background-color 0.3s ease;
        }

        .experience-item:hover {
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          background-color: #f1f5f9;
        }

        @media (max-width: 768px) {
          .content-container {
            flex-direction: column;
            align-items: center;
          }

          .image-container {
            width: 100%;
            max-width: 260px;
          }

          .image {
            width: 100%;
          }

          .experience-cards-container {
            width: 100%;
            max-width: 100%;
            margin-top: 0;
          }

          .experience-card,
          .experience-item {
            flex-direction: column;
            align-items: flex-start;
            padding: 1rem;
          }

          .experience-card-content {
            width: 100%;
            align-items: flex-start;
          }

          .experience-card-image {
            flex-shrink: 0;
          }

          .experience-card-text h3,
          .experience-card-text p {
            word-break: break-word;
          }
        }
      `}
      </style>

      <div className="container mx-auto px-6">
        <div className="separator"></div>
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">EDUCATION</h2>
        <div className="content-container">
          <div className="image-container">
            <img
              src="https://media1.giphy.com/media/1KllEBZdsLBwt3sDMG/giphy.gif?cid=6c09b95254p47djf97wm7q161j0u5dweqlkkwo1updzdo1is&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g"
              alt="Main Image"
              className="image"
            />
          </div>
          <div className="experience-cards-container mt-10">
            <div className="experience-card">
              <div className="experience-card-content">
                <div className="experience-card-image">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/195/195812.png"
                    alt="Experience 1"
                    className="w-full h-full object-cover rounded-lg shadow"
                  />
                </div>
                <div className="experience-card-text">
                  <h3 className="text-lg font-semibold text-gray-800">Divine Light Academy - Las Pinas</h3>
                  <p className="text-sm text-gray-600">SENIOR HIGH SCHOOL - STEM STRAND</p>
                </div>
              </div>
            </div>

            <div className="experience-card">
              <div className="experience-card-content">
                <div className="experience-card-image">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmZYlpFZQVQVsqpBhFCmuGaB_R9c6SOyBO5liWbiXRvw&s=10"
                    alt="Experience 2"
                    className="w-full h-full object-cover rounded-lg shadow"
                  />
                </div>
                <div className="experience-card-text">
                  <h3 className="text-lg font-semibold text-gray-800">De La Salle University - Dasmariñas</h3>
                  <p className="text-sm text-gray-600">BS IN INFORMATION TECHNOLOGY</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-subsection">
          <div className="separator"></div>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">EXPERIENCE</h2>
          <div className="experience-list">
            <div className="experience-item">
              <div className="experience-card-image">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1067/1067357.png"
                  alt="Experience job icon"
                  className="w-full h-full object-cover rounded-lg shadow"
                />
              </div>
              <div className="experience-card-text">
                <h3 className="text-lg font-semibold text-gray-800">Web Developer / IT Support</h3>
                <p className="text-sm text-gray-600">Built and maintained user-facing web solutions and digital tools.</p>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-card-image">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="Experience project icon"
                  className="w-full h-full object-cover rounded-lg shadow"
                />
              </div>
              <div className="experience-card-text">
                <h3 className="text-lg font-semibold text-gray-800">Project and Campus Tech Experience</h3>
                <p className="text-sm text-gray-600">Worked on school and personal projects involving frontend development, design, and problem solving.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
