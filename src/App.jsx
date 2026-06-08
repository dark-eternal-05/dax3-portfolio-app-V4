// App.jsx

import { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Carousel from "./Carousel";
import FloralBackground from "./FloralBackground";
import globalStyles from "./styles";

import videoFile from "./assets/11218535-hd_1920_1080_30fps.mp4";
import thumbnailImage from "./assets/Suzuki_Ignis_(third_generation)_Facelift_IMG_4450.jpg";

export default function App() {
  const [mounted, setMounted] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [theme, setTheme] = useState("dark");

  const isDark = theme === "dark";

  useEffect(() => {
    document.title = "DAX3 Portfolio";
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (!isDark) return;

    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js";

    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS("particles-js", {
          particles: {
            number: { value: 100, density: { enable: true, value_area: 900 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.65, random: true },
            size: { value: 2.2, random: true },
            line_linked: {
              enable: true,
              distance: 220,
              color: "#7eb8d4",
              opacity: 0.55,
              width: 1.8,
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
            },
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: { enable: true, mode: "grab" },
              onclick: { enable: false },
              resize: true,
            },
            modes: {
              grab: { distance: 200, line_linked: { opacity: 0.75 } },
            },
          },
          retina_detect: true,
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      if (window.pJSDom && window.pJSDom.length) {
        window.pJSDom.forEach((p) => p.pJS?.fn?.vendors?.destroypJS?.());
        window.pJSDom = [];
      }

      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [isDark]);

  const marqueeItems = [
    "New AI applications added",
    "Updated launch cards",
    "Improved dashboard experience",
    "Enhanced AI agent catalog",
    "Infrastructure updates deployed",
    "Security improvements released",
  ];

  return (
    <div className={`app-shell ${isDark ? "theme-dark" : "theme-light"}`}>
      <style>{globalStyles}</style>

      {isDark ? <div id="particles-js" /> : <FloralBackground />}

      <Header
        theme={theme}
        onToggleTheme={() => setTheme(isDark ? "light" : "dark")}
      />

      <Sidebar />

      <main className="app-main video-touch-header">
        <div
          className="content-layout"
          style={{
            opacity: mounted ? 1 : 0,
            animation: mounted ? "fadeUp 0.8s ease forwards" : "none",
          }}
        >
          <section className="video-section">
            <div className="video-card">
              {videoLoaded ? (
                <video controls autoPlay className="video-player">
                  <source src={videoFile} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div
                  onClick={() => setVideoLoaded(true)}
                  className="video-thumbnail"
                >
                  <img src={thumbnailImage} alt="Video thumbnail" />

                  <div className="play-button">
                    <svg width="28" height="28" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            <div className="whats-new-marquee below-video-marquee">
              <div className="whats-new-label">WHAT'S NEW</div>

              <div className="whats-new-scroll">
                <div className="whats-new-track">
                  {marqueeItems.concat(marqueeItems).map((item, index) => (
                    <span key={index}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="carousel-section">
            <Carousel theme={theme} />
          </section>
        </div>
      </main>

      <footer className="app-footer">Disclaimer</footer>
    </div>
  );
}