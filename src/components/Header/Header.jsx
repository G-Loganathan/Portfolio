import React , { useState} from "react";
import { Link } from "react-scroll";
import "./Header.css";


const Header = () => {

  // Scroll

  const [color, setColor] = useState(false);

  const changeBgColor = () => {
    if (window.scrollY >= 400) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeBgColor);

  // Nav Bar Menu Mobile

  const [isMobile, setIsMobile] = useState(false);


  return (
    <header>
        <nav className={color ? "navbar navbar-bg-scroll" : "navbar"}>

          <h3 className={color ? "logo logo-color" : "logo"}>Portfolio</h3>

          <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
              <li>
                <Link to="home" smooth={true} duration={500} offset={0} className={color ? "nav-item nav-item-scroll" : "nav-item"}>Home</Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500} offset={0} className={color ? "nav-item nav-item-scroll" : "nav-item"}>About</Link>
              </li>
              <li>
                <Link to="skills" smooth={true} duration={500} offset={0} className={color ? "nav-item nav-item-scroll" : "nav-item"}>Skills</Link>
              </li>
              <li>
                <Link to="projects" smooth={true} duration={500} offset={0} className={color ? "nav-item nav-item-scroll" : "nav-item"}>Projects</Link>
              </li>
              <li>
                <Link to="services" smooth={true} duration={500} offset={0} className={color ? "nav-item nav-item-scroll" : "nav-item"}>Services</Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500} offset={10} className={color ? "nav-item nav-item-scroll contactWhite" : "nav-item contactBlack"}>Contact</Link>
              </li>
          </ul>

          <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? <i className={color ? "fa-solid fa-xmark icon-scroll" : "fa-solid fa-xmark"}></i> : <i className={color ? "fa-solid fa-bars icon-scroll" : "fa-solid fa-bars "}></i>}
          </button>

        </nav>
    </header>
  );
};

export default Header;
