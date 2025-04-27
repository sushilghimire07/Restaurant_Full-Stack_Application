import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll"; // Import Link from react-scroll
import { Link } from "react-router-dom";  // Keep Link from react-router-dom for page navigation
import { GiHamburgerMenu } from "react-icons/gi";
import { data } from '../src/restApi.json';

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <nav>
        <div className="logo">o|o</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              // Use ScrollLink for smooth scrolling
              <ScrollLink
                to={element.link}   // This will scroll to the corresponding section
                spy={true}           // Enables active link highlighting based on scroll position
                smooth={true}        // Enables smooth scrolling
                duration={500}       // Duration of the scroll
                key={element.id}
              >
                {element.title}
              </ScrollLink>
            ))}
          </div>
          {/* Use react-router Link for the /menu page navigation */}
          <Link to="/menu">
            <button className="menuBtn">OUR MENU</button>
          </Link>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
