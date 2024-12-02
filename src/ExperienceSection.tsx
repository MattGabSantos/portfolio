import React from "react";

const ExperienceSection: React.FC = () => {
  return (
    <div id="experience" className="experience-section py-20 bg-white">
      <style jsx>{`
        .experience-section {
          background-color: #fff;
          padding-top: 5rem;
        }

        .image-container {
          flex: 1;
          width: 300px; /* Making the image smaller */
        }

        .image {
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          width: 100%;
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
          border-radius: 50%;
          object-fit: cover;
          width: 50px; /* Smaller image for experience cards */
          height: 50px;
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
          margin-bottom: 2rem; /* Space between line and content */
        }

      `}</style>

      <div className="container mx-auto px-6">
      <div className="separator"></div> 
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Experience</h2>
        <div className="content-container">
          <div className="image-container">
            <img
              src="https://media1.giphy.com/media/1KllEBZdsLBwt3sDMG/giphy.gif?cid=6c09b95254p47djf97wm7q161j0u5dweqlkkwo1updzdo1is&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g"
              alt="Main Image"
              className="image"
            />
          </div>
          <div className="experience-cards-container">
            <div className="experience-card">
              <div className="experience-card-content">
                <div className="experience-card-image">
                  <img
                    src="https://via.placeholder.com/100"
                    alt="Experience 1"
                    className="w-full h-full object-cover rounded-lg shadow"
                  />
                </div>
                <div className="experience-card-text">
                  <h3 className="text-lg font-semibold text-gray-800">Experience 1</h3>
                  <p className="text-sm text-gray-600">Details about this experience.</p>
                </div>
              </div>
            </div>

            <div className="experience-card">
              <div className="experience-card-content">
                <div className="experience-card-image">
                  <img
                    src="https://via.placeholder.com/100"
                    alt="Experience 2"
                    className="w-full h-full object-cover rounded-lg shadow"
                  />
                </div>
                <div className="experience-card-text">
                  <h3 className="text-lg font-semibold text-gray-800">Experience 2</h3>
                  <p className="text-sm text-gray-600">Details about this experience.</p>
                </div>
              </div>
            </div>

            <div className="experience-card">
              <div className="experience-card-content">
                <div className="experience-card-image">
                  <img
                    src="https://via.placeholder.com/100"
                    alt="Experience 3"
                    className="w-full h-full object-cover rounded-lg shadow"
                  />
                </div>
                <div className="experience-card-text">
                  <h3 className="text-lg font-semibold text-gray-800">Experience 3</h3>
                  <p className="text-sm text-gray-600">Details about this experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
