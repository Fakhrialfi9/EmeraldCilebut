import { useState, useEffect } from "react";

import "./../../../Style/Components/Navbar/Navbar.css";

import { Link } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSun, faXmark } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const handleButtonClick = () => {
    setIsActive(!isActive);

    if (!isActive) {
      // Menonaktifkan scrolling
      document.documentElement.style.overflow = "hidden"; // Untuk <html>
      document.body.style.overflow = "hidden"; // Untuk <body>
    } else {
      // Mengaktifkan scrolling
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }
  };

  const handleCloseSlideBar = () => {
    setIsActive(false);
    // Mengaktifkan scrolling ketika menutup
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
  };

  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    handleCloseSlideBar();
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition < 350) {
        setActiveLink("Home");
      } else if (scrollPosition < 700) {
        setActiveLink("About");
      } else if (scrollPosition < 1050) {
        setActiveLink("TypeCluster");
      } else if (scrollPosition < 1800) {
        setActiveLink("Facilities");
      } else if (scrollPosition < 2400) {
        setActiveLink("Progress");
      } else if (scrollPosition < 3400) {
        setActiveLink("Location");
      } else if (scrollPosition < 4400) {
        setActiveLink("EBrochure");
      } else if (scrollPosition < 5400) {
        setActiveLink("HotDeals");
      }
    };

    // Tambahkan event listener untuk mendengarkan perubahan scroll
    window.addEventListener("scroll", handleScroll);

    // Bersihkan event listener ketika komponen dibongkar
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Efek hanya dijalankan sekali setelah rendering pertama
  return (
    <main id="NavbarSection">
      <section className="NavbarSection">
        <nav className="MainNavbar">
          <div className="MainNavbarContainer">
            <div className="MainNavbarContent">
              <div className="NavbarContentLeft">
                <div className="NavbarContentLogo"></div>
              </div>
              <div className="NavbarContentRight">
                <div className="NavbarContentSearch">
                  <FontAwesomeIcon icon={faSearch} />
                </div>
                <div className="NavbarContentDarkMode">
                  <FontAwesomeIcon icon={faSun} />
                </div>
                <div className="NavbarContentLangue">ID</div>
                <div className="DiverNavbarContent"></div>
                <div className="NavbarContentHamburger" onClick={handleButtonClick}>
                  <div className="NavbarContentHamburger-bar"></div>
                  <div className="NavbarContentHamburger-bar"></div>
                  <div className="NavbarContentHamburger-bar"></div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </section>

      {/* Start Blur Background Effect */}
      <div onClick={handleCloseSlideBar} className={`BlurBackgroundSliderBar  ${isActive ? "active" : ""}`}></div>
      {/* End Blur Background Effect */}

      {/* Start Slider Nabar */}
      <div className={`NavbarContentSlider  ${isActive ? "active" : ""}`}>
        <div className="NavbarContentSliderContainer">
          <div className="NavbarContentSliderTop">
            <div className="NavbarContentSliderTopLeft">
              <div className="NavbarContentSliderClose" onClick={handleCloseSlideBar}>
                <FontAwesomeIcon icon={faXmark} />
              </div>
            </div>
            <div className="NavbarContentSliderTopRight">
              <h5>Emerald Cilebut</h5>
            </div>
          </div>
          <div className="DiverContent"></div>
          <div className="NavbarContentSliderCenter">
            <ul className="NavbarContentSliderCenterMenu">
              <li className="NavbarContentSliderCenterItem">
                <Link onClick={() => handleLinkClick("Home")} to="HeaderSection" smooth={true} duration={100} spy={true} exact="true" offset={-100}>
                  <a className={`NavbarContentSliderCenterLink ${activeLink === "Home" ? "active" : ""}`}>Home</a>
                </Link>
              </li>
              <li className="NavbarContentSliderCenterItem">
                <Link onClick={() => handleLinkClick("About")} to="About" smooth={true} duration={100} spy={true} exact="true" offset={-100}>
                  <a className={`NavbarContentSliderCenterLink ${activeLink === "About" ? "active" : ""}`}>About</a>
                </Link>
              </li>
              <li className="NavbarContentSliderCenterItem">
                <Link onClick={() => handleLinkClick("TypeCluster")} to="TypeCluster" smooth={true} duration={100} spy={true} exact="true" offset={-100}>
                  <a className={`NavbarContentSliderCenterLink ${activeLink === "TypeCluster" ? "active" : ""}`}>Type Cluster</a>
                </Link>
              </li>
              <li className="NavbarContentSliderCenterItem">
                <Link onClick={() => handleLinkClick("Facilities")} to="Facilities" smooth={true} duration={100} spy={true} exact="true" offset={-100}>
                  <a className={`NavbarContentSliderCenterLink ${activeLink === "Facilities" ? "active" : ""}`}>Facilities</a>
                </Link>
              </li>
              <li className="NavbarContentSliderCenterItem">
                <Link onClick={() => handleLinkClick("Progress")} to="Progress" smooth={true} duration={100} spy={true} exact="true" offset={-65}>
                  <a className={`NavbarContentSliderCenterLink ${activeLink === "Progress" ? "active" : ""}`}>Progress</a>
                </Link>
              </li>
              <li className="NavbarContentSliderCenterItem">
                <Link onClick={() => handleLinkClick("Location")} to="Location" smooth={true} duration={100} spy={true} exact="true" offset={-100}>
                  <a className={`NavbarContentSliderCenterLink ${activeLink === "Location" ? "active" : ""}`}>Location</a>
                </Link>
              </li>
              <li className="NavbarContentSliderCenterItem">
                <Link onClick={() => handleLinkClick("EBrochure")} to="EBrochure" smooth={true} duration={100} spy={true} exact="true" offset={-100}>
                  <a className={`NavbarContentSliderCenterLink ${activeLink === "EBrochure" ? "active" : ""}`}>E - Brochure</a>
                </Link>
              </li>
              <li className="NavbarContentSliderCenterItem">
                <Link onClick={() => handleLinkClick("HotDeals")} to="HotDeals" smooth={true} duration={100} spy={true} exact="true" offset={-65}>
                  <a className={`NavbarContentSliderCenterLink ${activeLink === "HotDeals" ? "active" : ""}`}>Hot Deals</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="NavbarContentSliderBottom">
            <span>
              <a href="Buat Janji dengan Sales">Buat Janji dengan Sales</a>
            </span>
          </div>
        </div>
      </div>
      {/* End Slider Nabar */}
    </main>
  );
}

export default Navbar;
