import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Hrishikesh Upadhyaya
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/hrishikesh-upadhyaya/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.svg" alt="" />
          </a>
          <a href="https://github.com/HRKU" target="_blank" rel="noopener noreferrer">
            <img src="/github.svg" alt="" style={{ backgroundColor:"white", borderRadius:"50%"}}/>
          </a>
          <a href="mailto:chinum.upadhyaya@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src="/gmail.svg" alt="" />
          </a>
          {/* <a href="https://www.instagram.com/rizzzy_ritzz/" target="_blank" rel="noopener noreferrer">
            <img src="/social icons/instagram.svg" alt="" style={{height:"40px", width:"40px"}}/>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
