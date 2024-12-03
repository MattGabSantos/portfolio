import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { useSpring, animated } from "@react-spring/web";
import Matt from './assets/Matt.png'

const HelloSection: React.FC = () => {
  const helloAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 200,
  });

  const imageAnimation = useSpring({
    from: { opacity: 0, transform: "scale(0.8)" },
    to: { opacity: 1, transform: "scale(1)" },
    delay: 400,
  });

  const iconAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 600,
  });

  return (
    <div
      id="intro"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGRibWNieTN4bzhrZTd1Ym9lMDB3eThyeGd3Zmt6aGg4ajdvbjdlYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JrZHAQT0CxmkPWj9LZ/giphy.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",  
          justifyContent: "space-between",
          alignItems: "flex-start", 
          width: "100%",
          maxWidth: "1200px",
          padding: "0 2rem",
        }}
      >
        {/* Left Side - Text and Icons */}
        <div style={{ maxWidth: "50%" }}>
          <animated.div
            style={{
              ...helloAnimation,
              fontSize: "2.5rem",
              fontWeight: "800",
              color: "#ffffff",
              marginBottom: "1rem",
              marginTop: "10rem",
            }}
          >
            <h1>AAA</h1>
            <h2>Aspiring UX Designer</h2>
          </animated.div>

          {/* Social Icons Below Hello */}
          <animated.div
            style={{
              ...iconAnimation,
              display: "flex",
              justifyContent: "flex-start",  
              gap: "1.5rem",
              marginTop: "1rem",  
            }}
          >
            <a
              href="https://github.com/MattGabSantos"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#ffffff",
                fontSize: "2.5rem",
                transition: "color 0.3s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#646cff")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#ffffff")}
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/matthew-santos-5a836733b/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#ffffff",
                fontSize: "2.5rem",
                transition: "color 0.3s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#0a66c2")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#ffffff")}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com/mattgabsantos"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#ffffff",
                fontSize: "2.5rem",
                transition: "color 0.3s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#1877f2")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#ffffff")}
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com/mattgabsantos"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#ffffff",
                fontSize: "2.5rem",
                transition: "color 0.3s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#1da1f2")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#ffffff")}
            >
              <FaTwitter />
            </a>
          </animated.div>
        </div>

        {/* Right Side - Profile Image */}
        <animated.div
          style={{
            ...imageAnimation,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "1.5rem",
          }}
        >
          <img
            src={Matt}
            alt="Profile"
            style={{
              width: "300px",
              height: "300px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              border: "4px solid #ccc",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.transition = "transform 0.3s ease";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.transition = "transform 0.3s ease";
            }}
          />
        </animated.div>
      </div>
    </div>
  );
};

export default HelloSection;
