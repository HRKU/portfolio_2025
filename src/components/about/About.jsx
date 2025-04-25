import React from 'react';
import "./about.scss";

// Use your profile image path or a placeholder

const About = () => {
  return (
    <div className="about-card">
      <div className="about-header">
        <img className="profile-img" src={`${import.meta.env.BASE_URL}Profile_Picture.jpg`} alt="Profile" />
        <div>
          <h1>About Me</h1>
          <p className="about-intro">
            Full Stack Developer with strong expertise in React.js, Next.js, Node.js, and MongoDB, complemented by hands-on experience in Express and Figma. Adept at managing client interactions, gathering requirements, and delivering UI/UX designs. Proven success in leading projects from conception to deployment, balancing both coding and design work. Currently building a temple management app using Ionic and React to stay sharp!
          </p>
        </div>
      </div>
      <div className="about-resume">
        <h2>Resume</h2>
        <a className="resume-btn" href={`${import.meta.env.BASE_URL}Hrishikesh Upadhyaya.pdf`} target="_blank" rel="noopener noreferrer">
          View Resume
        </a>
      </div>
    </div>
  );
};

export default About;