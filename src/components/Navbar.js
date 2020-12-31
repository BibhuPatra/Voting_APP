// import React, { useState, useEffect } from "react";
// import { Button } from "./Button";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// function Navbar(props) {
//   const [click, setClick] = useState(false);
//   const [button, setButton] = useState(true);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };
//   useEffect(() => {
//     showButton();
//   }, []);

//   window.addEventListener("resize", showButton);

//   const logoutHandler = (event) => {
//     localStorage.setItem("isAuthenticated", false);
//     localStorage.setItem("userName", "");
//     localStorage.setItem("token", "");
//   };

//   return (
//     <>
//       <nav className="navbar">
//         <div className="navbar-container">
//           <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
//             WeVote
//             <i class="fab fa-typo3" />
//           </Link>
//           <div className="menu-icon" onClick={handleClick}>
//             <i className={click ? "fas fa-times" : "fas fa-bars"} />
//           </div>
//           <ul className={click ? "nav-menu active" : "nav-menu"}>
//             <a className="nav-item" />
//             <Link to="/Service" className="nav-links" onClick={closeMobileMenu}>
//               About Us
//             </Link>

//             <li>
//               <Link
//                 to="/sign-up"
//                 className="nav-links-mobile"
//                 onClick={closeMobileMenu}
//               >
//                 Sign Up
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/sign-up"
//                 className="nav-links-mobile"
//                 onClick={closeMobileMenu}
//               >
//                 Admin Login
//               </Link>
//             </li>
//           </ul>
//           {button && (
//             <Button pathx="/sign-up" buttonStyle="btn--outline">
//               SIGN UP
//             </Button>
//           )}
//           &nbsp;&nbsp;&nbsp;
//           {Button && <Button pathx="/Admin">Admin Login</Button>}
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const logoutHandler = (event) => {
    localStorage.setItem("isAuthenticated", false);
    localStorage.setItem("usertype", "");
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            We-Vote
            <i class="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {localStorage.getItem("isAuthenticated") ? (
            <ul style={{ color: "white" }}>
              {`Welcome! ${localStorage.getItem("usertype")}`}&nbsp;
            </ul>
          ) : null}
          {button && localStorage.getItem("isAuthenticated") ? (
            <Button
              pathx="/"
              buttonStyle="btn--outline"
              onClick={logoutHandler}
            >
              Log Out
            </Button>
          ) : null}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
