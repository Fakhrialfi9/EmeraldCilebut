import { useState } from "react";

import "./../../../Style/ContentPages/ContentPages.css";

import TypeRuby from "./../Section/TypeCluster/TypeRuby";
import TypeNewAmethyst from "./../Section/TypeCluster/TypeNewAmethyst";
import TypeTopaz from "./../Section/TypeCluster/TypeTopaz";
import TypeAmethyst from "./../Section/TypeCluster/TypeAmethyst";

function TypeCluster() {
  const [activeTab, setActiveTab] = useState("Ruby");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div id="TypeCluster" className="TypeClusterEmeraldCilebut">
      <div className="TypeClusterEmeraldCilebutContainer">
        <div className="TypeClusterEmeraldCilebutContent">
          <div className="EmeraldCilebutHeadline">
            <h2>
              Type Cluster
              <a href="">
                <b>Emerald Cilebut</b>
              </a>
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="TypeClusterEmeraldCilebutContentCenter">
            <a onClick={() => handleTabClick("Ruby")} className={`TypeClusterEmeraldCilebutContentCenterActive ${activeTab === "Ruby" ? "active" : ""}`}>
              <button>Ruby</button>
            </a>
            <a onClick={() => handleTabClick("NewAmethyst")} className={`TypeClusterEmeraldCilebutContentCenterActive ${activeTab === "NewAmethyst" ? "active" : ""}`}>
              <button>New Amethyst</button>
            </a>
            <a onClick={() => handleTabClick("Topaz")} className={`TypeClusterEmeraldCilebutContentCenterActive ${activeTab === "Topaz" ? "active" : ""}`}>
              <button>Topaz</button>
            </a>
            <a onClick={() => handleTabClick("Amethyst")} className={`TypeClusterEmeraldCilebutContentCenterActive ${activeTab === "Amethyst" ? "active" : ""}`}>
              <button>Amethyst</button>
            </a>
          </div>
          <div className="TypeClusterEmeraldCilebutContentBottom">
            {/* Start Card Type Ruby */}
            <div id="Ruby" className={`TypeClusterEmeraldCilebutContentBottomActive ${activeTab === "Ruby" ? "active" : ""}`}>
              {activeTab === "Ruby" && (
                <div>
                  <TypeRuby />
                </div>
              )}
            </div>
            {/* End Card Type Ruby */}

            {/* Start Card Type NewAmethyst */}
            <div id="NewAmethyst" className={`TypeClusterEmeraldCilebutContentBottomActive ${activeTab === "NewAmethyst" ? "active" : ""}`}>
              {activeTab === "NewAmethyst" && (
                <div>
                  <TypeNewAmethyst />
                </div>
              )}
            </div>
            {/* End Card Type NewAmethyst */}

            {/* Start Card Type Topaz */}
            <div id="Topaz" className={`TypeClusterEmeraldCilebutContentBottomActive ${activeTab === "Topaz" ? "active" : ""}`}>
              {activeTab === "Topaz" && (
                <div>
                  <TypeTopaz />
                </div>
              )}
            </div>
            {/* End Card Type Topaz */}

            {/* Start Card Type Amethyst */}
            <div id="Amethyst" className={`TypeClusterEmeraldCilebutContentBottomActive ${activeTab === "Amethyst" ? "active" : ""}`}>
              {activeTab === "Amethyst" && (
                <div>
                  <TypeAmethyst />
                </div>
              )}
            </div>
            {/* End Card Type Amethyst */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TypeCluster;
