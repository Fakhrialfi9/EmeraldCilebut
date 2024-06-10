import "./../../../Style/Components/Footer/Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <main id="FooterSection">
      <section className="FooterSection">
        <footer className="MainFooter">
          <div className="FooterContainer">
            <div className="FooterContent">
              <div className="FooterContentTop">
                <span>
                  <h5>Cluster Emerald Cilebut</h5>
                </span>
              </div>
              <div className="FooterContentCenter">
                <span>
                  <h5>Emerald Cilebut</h5>
                  <h5>Emerald Neopolis</h5>
                  <h5>Emerald Terrace</h5>
                  <h5>Emerald City</h5>
                  <h5>Emerald Residence</h5>
                </span>
              </div>
              <div className="FooterContentBottom">
                <div className="FooterContentBottomLeft">
                  <a href="/">
                    <h5>
                      English
                      <span>
                        <FontAwesomeIcon icon={faCaretDown} />
                      </span>
                    </h5>
                  </a>
                </div>
                <div className="FooterContentBottomCenter">
                  <div className="FooterContentBottomCenterCardSocialMedia"></div>
                  <div className="FooterContentBottomCenterCardSocialMedia"></div>
                  <div className="FooterContentBottomCenterCardSocialMedia"></div>
                  <div className="FooterContentBottomCenterCardSocialMedia"></div>
                </div>
                <div className="FooterContentBottomRight">
                  <h5>&copy; 2023 www.emeraldcilebut.com. All rights reserved.</h5>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}

export default Footer;
