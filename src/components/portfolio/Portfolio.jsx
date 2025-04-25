import { useRef, useState, useEffect } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 0,
    title: "AI Meeting Notes Summarizer",
    imgList: ["/ai-meeting-notes.png","/ai1.png","/ai2.png"],
    desc: `
• Web app for uploading audio, transcribing with Assemble AI, and generating meeting summaries and action items using Google Gemini AI.
• Built with Next.js, TypeScript and TailwindCSS.
• Features AI integration, prompt engineering, and user-friendly design.
    `,
    githubLink: "https://github.com/HRKU/AI_Meet_Notes",
    liveDemo: null,
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "Headless UI", "Assemble AI", "Google Gemini AI"],
    skills: ["Full-stack Development", "AI Integration", "Prompt Engineering", "UX Design", "State Management"]
  },
  {
    id: 1,
    title: "Bakery Web App (HackerEarth JetBrains Competition)",
    imgList: ["/bakery1.png","/bakery2.png","/bakery3.png","/bakery4.png"],
    desc: `
• Fully functional bakery website built with Angular 9, TypeScript, HTML, and CSS.
• Features product listings, cart, and order management.
• Plans for future improvements: upgrade Angular, add authentication, enhance UI/UX, and optimize performance.
    `,
    githubLink: "https://github.com/HRKU/HackerEarth_WebApp_",
    liveDemo: "https://bakersworld.netlify.app",
    techStack: ["Angular 9", "TypeScript", "HTML", "CSS"],
    skills: ["Frontend Development", "E-commerce", "UI/UX", "Deployment"]
  },
  {
    id: 2,
    title: "Temple Management App",
    imgList: ["/templeapp.png"],
    desc: `
• Developed a mobile-first app for temple management, including event organization and live attendance tracking using Firebase.
• Built with Ionic (React), MongoDB, and Node.js.
    `,
    githubLink: "https://github.com/HRKU/houseProgram_ionic_Frontend",
    liveDemo: null,
    techStack: ["Ionic", "React", "MongoDB", "Node.js", "Firebase"],
    skills: ["Mobile-first Design", "Full-stack Development", "Event Management"]
  },
 
];

const ImageModal = ({ images, idx, onClose, onPrev, onNext, closeIcon }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        onPrev(e);
      } else if (e.key === "ArrowRight") {
        onNext(e);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!images || images.length === 0) return null;
  return (
    <div className="img-modal-overlay" onClick={onClose}>
      <div className="img-modal-content" onClick={e => e.stopPropagation()}>
        <button className="img-modal-close" onClick={onClose} aria-label="Close">
          {closeIcon ? closeIcon : "×"}
        </button>
        {images.length > 1 && (
          <button className="img-modal-nav left" onClick={onPrev} aria-label="Previous image">&#8592;</button>
        )}
        <img src={images[idx]} alt="Project detail" />
        {images.length > 1 && (
          <button className="img-modal-nav right" onClick={onNext} aria-label="Next image">&#8594;</button>
        )}
        {images.length > 1 && (
          <div className="img-modal-counter">
            {idx + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
};

const Single = ({ item }) => {
  const ref = useRef();
  const [imgIdx, setImgIdx] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const images = item.imgList || (item.img1 ? [item.img1] : []);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const prevImg = (e) => {
    e.stopPropagation();
    setImgIdx((idx) => (idx - 1 + images.length) % images.length);
  };
  const nextImg = (e) => {
    e.stopPropagation();
    setImgIdx((idx) => (idx + 1) % images.length);
  };
  const openModal = (idx) => {
    setImgIdx(idx);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  return (
    <section>
      <div className="container">
        <div className="project-card wrapper">
          <div className="imageContainer" ref={ref}>
            {images.length > 1 && (
              <button className="img-nav left" onClick={prevImg} aria-label="Previous image">&#8592;</button>
            )}
            <img
              src={images[imgIdx]}
              alt={item.title}
              onClick={() => openModal(imgIdx)}
              className="clickable-img"
              style={{ cursor: 'pointer' }}
            />
            {images.length > 1 && (
              <button className="img-nav right" onClick={nextImg} aria-label="Next image">&#8594;</button>
            )}
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <ul>
              {item.desc.trim().split("\n").map((point, index) => (
                <li key={index}>{point.trim().replace("• ", "")}</li>
              ))}
            </ul>
            <div className="badges-row">
              {item.techStack && item.techStack.map((tech, idx) => (
                <span className="badge tech-badge" key={tech + idx}>{tech}</span>
              ))}
              {item.skills && item.skills.map((skill, idx) => (
                <span className="badge skill-badge" key={skill + idx}>{skill}</span>
              ))}
            </div>
            <div className="project-links">
              {item.githubLink && (
                <a
                  href={item.githubLink}
                  className="github-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              )}
              {item.liveDemo && (
                <a
                  href={item.liveDemo}
                  className="live-demo-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </div>
        {modalOpen && (
          <ImageModal
            images={images}
            idx={imgIdx}
            onClose={closeModal}
            onPrev={prevImg}
            onNext={nextImg}
            closeIcon={<img src="/close.svg" alt="Close" />}
          />
        )}
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <div className="progress-title">

          <h1>Featured Works</h1>
        </div>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      <div className="cards-list">
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
