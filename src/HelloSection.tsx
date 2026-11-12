import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
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
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGRibWNieTN4bzhrZTd1Ym9lMDB3eThyeGd3Zmt6aGg4ajdvbjdlYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JrZHAQT0CxmkPWj9LZ/giphy.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        overflow: "hidden",
        padding: "6rem 1.5rem 3rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: "1200px",
          gap: "2rem",
          margin: "0 auto",
        }}
      >
        <div style={{ maxWidth: "50%", width: "100%" }}>
          <animated.div
            style={{
              ...helloAnimation,
              fontSize: "clamp(2.2rem, 4vw, 4rem)",
              fontWeight: "800",
              color: "#ffffff",
              marginBottom: "1rem",
              lineHeight: "1.1",
            }}
          >
            <h1 style={{ margin: 0 }}>Matthew Santos</h1>
            <h2 style={{ margin: "0.5rem 0 0", fontSize: "clamp(1.5rem, 2.3vw, 2.5rem)" }}>Web App Developer</h2>
          </animated.div>

          <animated.div
            style={{
              ...iconAnimation,
              display: "flex",
              justifyContent: "flex-start",
              gap: "1.25rem",
              marginTop: "1.5rem",
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

          </animated.div>
        </div>

        <animated.div
          style={{
            ...imageAnimation,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          <img
            src={Matt}
            alt="Profile"
            style={{
              width: "min(28vw, 340px)",
              height: "auto",
              maxWidth: "300px",
              boxShadow: "0 8px 24px rgba(15, 23, 42, 0.2)",
              border: "4px solid rgba(255,255,255,0.8)",
              borderRadius: "50%",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          />
        </animated.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #intro {
            min-height: 100vh;
            background-attachment: scroll;
            padding-top: 7rem;
          }

          #intro > div {
            flex-direction: column;
            text-align: center;
            align-items: center;
          }

          #intro > div > div:first-child {
            max-width: 100%;
          }

          #intro > div > div:last-child {
            display: none;
          }

          #intro a {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default HelloSection;
