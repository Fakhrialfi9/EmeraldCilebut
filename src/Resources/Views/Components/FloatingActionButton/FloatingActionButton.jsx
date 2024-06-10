import { useState } from "react";

import "./../../../Style/Components/FloatingActionButton/FloatingActionButton.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faTimes, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function FloatingActionButton() {
  const [isActive, setIsActive] = useState(false);
  const HandleButtonClick = () => {
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

  const HandleCloseSlideBar = () => {
    setIsActive(false);
    // Mengaktifkan scrolling ketika menutup
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
  };

  const [Name, setName] = useState("");
  const [Message, setMessage] = useState("");

  const SendWhatsAppMessage = () => {
    const GetName = encodeURIComponent(Name);
    const GetMessegae = encodeURIComponent(Message);

    const WhatsAppsLink = `https://wa.me/6289644922233?text=Halo,%20saya%20${GetName},%20${GetMessegae}`;

    window.open(WhatsAppsLink, "_blank");
  };
  return (
    <main id="FloatingActionButtonSection">
      <section className="FloatingActionButtonSection">
        <div className="MainFloatingActionButton">
          <div className="FloatingActionButtonContent" onClick={HandleButtonClick}>
            <a>
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>
      </section>

      {/* Start Blur Background Effect */}
      <div onClick={HandleCloseSlideBar} className={`BlurBackgroundFloatingButtonAction  ${isActive ? "active" : ""}`}></div>
      {/* End Blur Background Effect */}

      <div className={`CardFormChatWhatsApp  ${isActive ? "active" : ""}`}>
        <div className="CardFormChatWhatsAppContainer">
          <div className={`CardFormChatWhatsAppContent  ${isActive ? "active" : ""}`}>
            <div className="CardFormChatWhatsAppContentHeadline">
              <h5>
                <FontAwesomeIcon icon={faWhatsapp} />
                <span> Whtas App Message</span>
              </h5>
              <button className="CloseButton" onClick={HandleCloseSlideBar}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="DiverContent"></div>
            <form method="Post" className="CardFormChatWhatsAppContentForm">
              <input placeholder="Masukan Nama Anda" type="text" id="name" name="name" value={Name} onChange={(e) => setName(e.target.value)} required />
              <textarea placeholder="Masukan Pesan Anda" type="textarea" id="message" name="message" value={Message} onChange={(e) => setMessage(e.target.value)} rows="4" required></textarea>
              <div className="FormButtonAction">
                <button className="SubmitButton" type="button" onClick={SendWhatsAppMessage}>
                  <span>
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </span>
                  <h5> Kirim ke Pesan Anda</h5>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default FloatingActionButton;
