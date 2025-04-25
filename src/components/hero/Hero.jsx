import React from 'react';
import { Typed } from "react-typed";
import Typewriter from "typewriter-effect";
import "./hero.scss";
import { motion } from "framer-motion";
import { Link } from "react-scroll"


const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-450%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};



const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>HELLO, <br></br>I'M HRISHIKESH UPADHYAYA</motion.h2>
          <motion.h3 variants={textVariants}>
          <style>
          {`
              .underline-text {
              background: linear-gradient(to right, #663399, #9370DB);
              -webkit-background-clip: text;
              background-clip: text;
              color: transparent;
              text-decoration-color: #9370DB;
            }
          `}
        </style>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span>I am a&nbsp;</span>
              <Typewriter options={{
                strings: [
                  'Full Stack Developer',
                  'React.js Enthusiast',
                  'Next.js Specialist',
                  'Node.js Developer',
                  'MongoDB Expert',
                  'Python Developer',
                  'Angular Developer',
                  'UI/UX Designer',
                  'Temple App Builder',
                  'Agile Team Leader'
                ].map(text => `<span class="underline-text">${text}</span>`),
                autoStart: true,
                loop: true,
                cursor: '_',
                html: true,
                delay: 80,
                deleteSpeed: 40,
              }}
              />
            </div>
            <div style={{ marginTop: '1rem', fontSize: '1.1rem', color: '#888' }}>
              Full Stack Developer with strong expertise in React.js, Next.js, Node.js, and MongoDB. Adept at managing client interactions, gathering requirements, and delivering UI/UX designs. Proven success in leading projects from conception to deployment, balancing both coding and design work.
            </div>
          </motion.h3>
          <motion.div variants={textVariants} className="buttons">
            <Link
            // className="home-btn"
            to={"portfolio"}
            hashSpy={true}
            spy={true}
            smooth={true}
            delay={100}
            offset={-100}
            duration={500}
            >
              <motion.button variants={textVariants}>
                See the Latest Works
              </motion.button>
            </Link>
            <Link
            // className="home-btn"
            to={"Contact"}
            hashSpy={true}
            spy={true}
            smooth={true}
            delay={100}
            offset={-100}
            duration={500}
            >
              <motion.button variants={textVariants}>Contact Me</motion.button>
            </Link>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Developer Designer Engineer
      </motion.div>
      <motion.div
        className="imageContainer"
        animate={{ translateY: [-30, 0, -30, 0] }}
        transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0, repeatType: 'mirror' }}
      >
        <img src="/dev.png" alt="" />
      </motion.div>
      {/* <div className="imageContainer">
        <img src="/dev.png" alt="" />
      </div> */}
    </div>
  );
};

export default Hero;
