import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram, faTiktok, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function About() {
  return (
    <div id="About" className="AboutEmeraldCilebut">
      <div className="AboutEmeraldCilebutContainer">
        <div className="CardAboutEmeraldCilebutContent">
          <div className="CardAboutEmeraldCilebutContentTop">
            <div className="CardAboutEmeraldCilebutContentTopLeft">
              <div className="CardAboutEmeraldCilebutContentTopLeftImage"></div>
              <div className="CardAboutEmeraldCilebutContentTopLeftContent">
                <h4>Heri Surya Winata</h4>
                <a href="/">Cilebut Barat, Kabupaten Bogor, Jawa Barat 16710</a>
                <div className="CardAboutEmeraldCilebutContentTopLeftContentButton">
                  <a href="https://wa.me/your-whatsapp-number">
                    <button>
                      <FontAwesomeIcon icon={faWhatsapp} />
                    </button>
                  </a>

                  <a href="https://www.instagram.com/your-instagram-account">
                    <button>
                      <FontAwesomeIcon icon={faInstagram} />
                    </button>
                  </a>

                  <a href="https://www.tiktok.com/your-tiktok-account">
                    <button>
                      <FontAwesomeIcon icon={faTiktok} />
                    </button>
                  </a>

                  <a href="https://www.facebook.com/your-facebook-page">
                    <button>
                      <FontAwesomeIcon icon={faFacebook} />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="CardAboutEmeraldCilebutContentTopRight">
              <a href="">
                <button className="CardAboutEmeraldCilebutContentTopRightButtonLeft">
                  <FontAwesomeIcon icon={faWhatsapp} />
                  <span>Buat Janji dengan Sales</span>
                </button>
              </a>
              <a href="">
                <button className="CardAboutEmeraldCilebutContentTopRightButtonRight">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>Business</span>
                </button>
              </a>
            </div>
          </div>
          <div className="DiverContent"></div>
          <div className="CardAboutEmeraldCilebutContentCenter">
            <div className="CardAboutEmeraldCilebutContentCenter1">
              <span>
                <h2>10</h2>
                <h5>Properties Sold Out /Month</h5>
              </span>
            </div>
            <div className="CardAboutEmeraldCilebutContentCenterDiver"></div>
            <div className="CardAboutEmeraldCilebutContentCenter2">
              <div className="CardAboutEmeraldCilebutContentCenter2">
                <span>
                  <h2>13</h2>
                  <h5>Facilities in Cluster</h5>
                </span>
              </div>
            </div>
            <div className="CardAboutEmeraldCilebutContentCenterDiver"></div>
            <div className="CardAboutEmeraldCilebutContentCenter3">
              <div className="CardAboutEmeraldCilebutContentCenter3">
                <span>
                  <h2>325</h2>
                  <h5>Properties Sold</h5>
                </span>
              </div>
            </div>
            <div className="CardAboutEmeraldCilebutContentCenterDiver"></div>
            <div className="CardAboutEmeraldCilebutContentCenter4">
              <div className="CardAboutEmeraldCilebutContentCenter4">
                <span>
                  <h2>3</h2>
                  <h5>Property Awards</h5>
                </span>
              </div>
            </div>
          </div>
          <div className="DiverContent"></div>
          <div className="CardAboutEmeraldCilebutContentBottom">
            <div className="CardAboutEmeraldCilebutContentBottomHeadline">
              <span>
                <h5>
                  <b>Hello</b> 👋, Selamat Datang di Page Emerald Cilebut
                </h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                  book.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
