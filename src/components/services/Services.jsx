import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      
      <div className="experience-section">
        <div className="experience-card">
          <div className="exp-header">
            <div>
              <h2>Full Stack Software Developer</h2>
              <span className="company">Candent Technologies Pvt Ltd. – Pune, India</span>
            </div>
            <span className="exp-dates">Mar 2023 – Present</span>
          </div>
          <ul>
            <li>Led a team of 3 developers, delivering projects with 100% client satisfaction.</li>
            <li>Managed UI/UX design using Figma and earned the Young Achiever Award for delivering scalable solutions.</li>
            <li>Spearheaded 4 full-stack web apps, increasing project delivery speed by 20%.</li>
          </ul>
        </div>
        <div className="experience-card">
          <div className="exp-header">
            <div>
              <h2>MEAN Stack Intern</h2>
              <span className="company">Wisdom Sprouts – Pune, India</span>
            </div>
            <span className="exp-dates">Jun 2020 – Aug 2020</span>
          </div>
          <ul>
            <li>Built an E-commerce WebApp using the MEAN stack within a two-week deadline.</li>
            <li>Integrated Git for version control and seamless project management.</li>
          </ul>
        </div>
        <div className="experience-card">
          <div className="exp-header">
            <div>
              <h2>React Native Intern</h2>
              <span className="company">Wisdom Sprouts – Pune, India</span>
            </div>
            <span className="exp-dates">Aug 2020 – Oct 2020</span>
          </div>
          <ul>
            <li>Contributed to a small-scale React Native app development project.</li>
          </ul>
        </div>
      </div>
      <motion.div className="skillsContainer" variants={variants}>
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skills-category">
            <h3>Languages</h3>
            <div className="skills-list">
              <span className="skill-badge">JavaScript</span>
              <span className="skill-badge">TypeScript</span>
              <span className="skill-badge">Python</span>
              <span className="skill-badge">Java</span>
              <span className="skill-badge">HTML</span>
              <span className="skill-badge">CSS</span>
            </div>
          </div>
          <div className="skills-category">
            <h3>Frameworks</h3>
            <div className="skills-list">
              <span className="skill-badge">React.js</span>
              <span className="skill-badge">Next.js</span>
              <span className="skill-badge">Node.js</span>
              <span className="skill-badge">Express</span>
              <span className="skill-badge">Ionic</span>
            </div>
          </div>
          <div className="skills-category">
            <h3>Tools</h3>
            <div className="skills-list">
              <span className="skill-badge">Git</span>
              <span className="skill-badge">Figma</span>
              <span className="skill-badge">Firebase</span>
              <span className="skill-badge">MongoDB</span>
              <span className="skill-badge">Postman</span>
              <span className="skill-badge">VSCode</span>
              <span className="skill-badge">MongoDB Compass</span>
            </div>
          </div>
          <div className="skills-category">
            <h3>Soft Skills</h3>
            <div className="skills-list">
              <span className="skill-badge">Agile</span>
              <span className="skill-badge">Scrum</span>
              <span className="skill-badge">Team Leadership</span>
              <span className="skill-badge">Client Interaction</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
