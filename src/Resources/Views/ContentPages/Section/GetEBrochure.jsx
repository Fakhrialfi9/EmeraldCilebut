import "./../../../Style/ContentPages/ContentPages.css";

import FacadeTypeRuby from "./../../../Asset/Image/Facade/TypeRuby.jpeg";
import FacadeTypeNewAmethyst from "./../../../Asset/Image/Facade/TypeNewAmethyst.jpeg";
import FacadeTypeAmethyst from "./../../../Asset/Image/Facade/TypeAmethyst.png";
import FacadeTypeTopaz from "./../../../Asset/Image/Facade/TypeTopaz.png";

import TextTruncate from "./../../../LogicBoard/Functions/TextTruncate.jsx";

function GetEBrochure() {
  return (
    <div id="EBrochure" className="GetEBrochureEmeraldCilebut">
      <div className="EmeraldCilebutHeadline">
        <h2>
          Download E - Brochure
          <a href="">
            <b>Emerald Cilebut</b>
          </a>
        </h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
      <div className="GetEBrochureEmeraldCilebutContainer">
        <div className="GetEBrochureEmeraldCilebutContent">
          {/* Start Card Download Brochure Emerald Cilebut */}
          <div className="CardGetEBrochureEmeraldCilebutContent">
            <div className="CardGetEBrochureEmeraldCilebutContentTop">
              <img src={FacadeTypeRuby} alt="" />
            </div>
            <div className="CardGetEBrochureEmeraldCilebutContentCenter">
              <span>
                <h5>Brochure Type Ruby</h5>
                <p>
                  <TextTruncate
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book."
                    maxLength={120}
                  />
                </p>
              </span>
            </div>
            <div className="CardGetEBrochureEmeraldCilebutContentBottom">
              <a href="" target="_blank" rel="noopener noreferrer">
                <button>Download Brochure</button>
              </a>
            </div>
          </div>
          <div className="CardGetEBrochureEmeraldCilebutContent">
            <div className="CardGetEBrochureEmeraldCilebutContentTop">
              <img src={FacadeTypeNewAmethyst} alt="" />
            </div>
            <div className="CardGetEBrochureEmeraldCilebutContentCenter">
              <span>
                <h5>Brochure Type New Amethyst</h5>
                <p>
                  <TextTruncate
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book."
                    maxLength={120}
                  />
                </p>
              </span>
            </div>
            <div className="CardGetEBrochureEmeraldCilebutContentBottom">
              <a href="" target="_blank" rel="noopener noreferrer">
                <button>Download Brochure</button>
              </a>
            </div>
          </div>
          <div className="CardGetEBrochureEmeraldCilebutContent">
            <div className="CardGetEBrochureEmeraldCilebutContentTop">
              <img src={FacadeTypeTopaz} alt="" />
            </div>
            <div className="CardGetEBrochureEmeraldCilebutContentCenter">
              <span>
                <h5>Brochure Type Topaz</h5>
                <p>
                  <TextTruncate
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book."
                    maxLength={120}
                  />
                </p>
              </span>
            </div>
            <div className="CardGetEBrochureEmeraldCilebutContentBottom">
              <a href="" target="_blank" rel="noopener noreferrer">
                <button>Download Brochure</button>
              </a>
            </div>
          </div>
          <div className="CardGetEBrochureEmeraldCilebutContent">
            <div className="CardGetEBrochureEmeraldCilebutContentTop">
              <img src={FacadeTypeAmethyst} alt="" />
            </div>
            <div className="CardGetEBrochureEmeraldCilebutContentCenter">
              <span>
                <h5>Brochure Type Amethyst</h5>
                <p>
                  <TextTruncate
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book."
                    maxLength={120}
                  />
                </p>
              </span>
            </div>
            <div className="CardGetEBrochureEmeraldCilebutContentBottom">
              <a href="" target="_blank" rel="noopener noreferrer">
                <button>Download Brochure</button>
              </a>
            </div>
          </div>
          {/* End Card Download Brochure Emerald Cilebut */}
        </div>
      </div>
    </div>
  );
}

export default GetEBrochure;
