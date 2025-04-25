import React from 'react';
import "./about.scss";

const profileImg = "/Profile_Picture.jpg"; // Use your profile image path or a placeholder
const resumeURL = "/Hrishikesh Upadhyaya.pdf";

const About = () => {
  return (
    <div className="about-card">
      <div className="about-header">
        <img className="profile-img" src={profileImg} alt="Profile" />
        <div>
          <h1>About Me</h1>
          <p className="about-intro">
            Full Stack Developer with strong expertise in React.js, Next.js, Node.js, and MongoDB, complemented by hands-on experience in Express and Figma. Adept at managing client interactions, gathering requirements, and delivering UI/UX designs. Proven success in leading projects from conception to deployment, balancing both coding and design work. Currently building a temple management app using Ionic and React to stay sharp!
          </p>
        </div>
      </div>
      <div className="about-resume">
        <h2>Resume</h2>
        <a className="resume-btn" href={resumeURL} target="_blank" rel="noopener noreferrer">
          View Resume
        </a>
      </div>
    </div>
  );
};

export default About;