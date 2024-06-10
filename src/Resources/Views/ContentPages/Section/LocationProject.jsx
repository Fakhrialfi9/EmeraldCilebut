import { useRef, useState } from "react";

import "./../../../Style/ContentPages/ContentPages.css";

import { Toast } from "react-bootstrap";
import copy from "copy-to-clipboard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faClipboard } from "@fortawesome/free-regular-svg-icons";
import { faMapPin, faPhone, faVrCardboard, faTimes } from "@fortawesome/free-solid-svg-icons";

function LocationProject() {
  const textToCopy = "0896 4492 2233";
  const SuccessMessageRef = useRef(null);
  const [showToast, setShowToast] = useState(false);

  const HandleCopyToClipBoard = async () => {
    try {
      await copy(textToCopy);
      setShowToast(true);
    } catch (err) {
      console.error("Gagal menyalin teks ke clipboard:", err);
    }
  };

  const handleCloseClick = () => {
    setShowToast(false);
  };

  return (
    <div id="Location" className="MapsLocationEmeraldCilebut">
      <Toast className="CopyToClipBoarContent" ref={SuccessMessageRef} show={showToast} onClose={() => setShowToast(false)} autohide={true} delay={1500}>
        <div className="SuccessCopyToClipBoar">
          <h5>Success</h5>
          <a onClick={handleCloseClick}>
            <FontAwesomeIcon icon={faTimes} />
          </a>
        </div>
        <div className="CopyToClipboardHeadline">
          <h5>Copy to Clipboard</h5>
        </div>
      </Toast>
      <div className="EmeraldCilebutHeadline">
        <h2>
          Location Cluster
          <a href="">
            <b>Emerald Cilebut</b>
          </a>
        </h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
      <div className="MapsLocationEmeraldCilebutContainer">
        <div className="MapsLocationEmeraldCilebutContent">
          <div className="CardMapsLocationEmeraldCilebutContent">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2899509593803!2d106.81815312499255!3d-6.484917343507031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c195bcd4efcd%3A0x51ad45cae8ff9b6e!2sEmerald%20city!5e0!3m2!1sen!2sid!4v1698829647359!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: "0", borderRadius: "1rem" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="CardMapsLocationEmeraldCilebutContentInside">
              <div className="CardMapsLocationEmeraldCilebutContentInsideContainer">
                <div className="CardMapsLocationEmeraldCilebutContentInsideContent">
                  <div className="CardMapsLocationEmeraldCilebutContentInsideLeft">
                    <div className="CardMapsLocationEmeraldCilebutContentInsideLeftCard">
                      <FontAwesomeIcon icon={faMapPin} />
                    </div>
                  </div>
                  <div className="CardMapsLocationEmeraldCilebutContentInsideRight">
                    <span>
                      <h5>Location Project</h5>
                      <h4>Cilebut Barat, Kabupaten Bogor, Jawa Barat 16710</h4>
                    </span>
                  </div>
                </div>
                <div className="CardMapsLocationEmeraldCilebutContentInsideContent">
                  <div className="CardMapsLocationEmeraldCilebutContentInsideLeft">
                    <div className="CardMapsLocationEmeraldCilebutContentInsideLeftCard">
                      <FontAwesomeIcon icon={faPhone} />
                    </div>
                  </div>
                  <div className="CardMapsLocationEmeraldCilebutContentInsideRight">
                    <span>
                      <h5>No. Handphone</h5>
                      <h4 ref={SuccessMessageRef}>
                        <a href="tel:+628964492233"> {textToCopy}</a>
                        <span onClick={HandleCopyToClipBoard}>
                          <FontAwesomeIcon className="IconClipBoard" icon={faClipboard} />
                        </span>
                      </h4>
                    </span>
                  </div>
                </div>
                <div className="CardMapsLocationEmeraldCilebutContentInsideContent">
                  <div className="CardMapsLocationEmeraldCilebutContentInsideLeft">
                    <div className="CardMapsLocationEmeraldCilebutContentInsideLeftCard">
                      <FontAwesomeIcon icon={faWhatsapp} />
                    </div>
                  </div>
                  <div className="CardMapsLocationEmeraldCilebutContentInsideRight">
                    <span>
                      <h5>Whats App</h5>
                      <a href="">
                        <h4>0896 4492 2233</h4>
                      </a>
                    </span>
                  </div>
                </div>
                <div className="CardMapsLocationEmeraldCilebutContentInsideContent">
                  <div className="CardMapsLocationEmeraldCilebutContentInsideLeft">
                    <div className="CardMapsLocationEmeraldCilebutContentInsideLeftCard">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                  </div>
                  <div className="CardMapsLocationEmeraldCilebutContentInsideRight">
                    <span>
                      <h5>E - Mail</h5>
                      <a href="mailto:hello@emeraldcilebut.com">
                        <h4>hello@emeraldcilebut.com</h4>
                      </a>
                    </span>
                  </div>
                </div>
                <div className="CardMapsLocationEmeraldCilebutContentInsideContent">
                  <div className="CardMapsLocationEmeraldCilebutContentInsideLeft">
                    <div className="CardMapsLocationEmeraldCilebutContentInsideLeftCard">
                      <FontAwesomeIcon icon={faInstagram} />
                    </div>
                  </div>
                  <div className="CardMapsLocationEmeraldCilebutContentInsideRight">
                    <span>
                      <h5>Instagram</h5>
                      <a href="">
                        <h4>emeraldcilebut.id</h4>
                      </a>
                    </span>
                  </div>
                </div>
                <div className="CardMapsLocationEmeraldCilebutContentInsideContent">
                  <div className="CardMapsLocationEmeraldCilebutContentInsideLeft">
                    <div className="CardMapsLocationEmeraldCilebutContentInsideLeftCard">
                      <FontAwesomeIcon icon={faVrCardboard} />
                    </div>
                  </div>
                  <div className="CardMapsLocationEmeraldCilebutContentInsideRight">
                    <span>
                      <h5>Virtual Show Unit</h5>
                      <a href="">
                        <h4>Show Video</h4>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationProject;
