import "./../../Style/ContentPages/ContentPages.css";
import "./../../Style/ContentPages/ResponsiveContentPages.css";

import About from "./Section/About.jsx";
import TypeCluster from "./Section/TypeCluster.jsx";
import Facilities from "./Section/Facilities.jsx";
import MoreFacilities from "./Section/MoreFacilities.jsx";
import ProgressCluster from "./Section/ProgressCluster.jsx";
import LocationProject from "./Section/LocationProject.jsx";
import GetEBrochure from "./Section/GetEBrochure.jsx";

// import CookieBanner from "./../../LogicBoard/Functions/GDRP.jsx";

function ContentPages() {
  return (
    <main id="HomeSection">
      <section className="HomeSection">
        {/* <CookieBanner /> */}
        <div className="MainHome">
          <div className="MainHomeContainer">
            <div className="MainHomeContent">
              {/* Start About Emerald Cilebut */}
              <About />
              {/* End About Emerald Cilebut */}

              {/* Start Type Cluster Emerald Cilebut */}
              <TypeCluster />
              {/* End Type Cluster Emerald Cilebut */}

              {/* Start Facilities Cluster Emerald Cilebut */}
              <Facilities />
              {/* End Facilities Cluster Emerald Cilebut */}

              {/* Start More Facilities Cluster Emerald Cilebut */}
              <MoreFacilities />
              {/* End More Facilities Cluster Emerald Cilebut */}

              {/* Start Progress Video Cluster Emerald Cilebut */}
              <ProgressCluster />
              {/* End Progress Video Cluster Emerald Cilebut */}

              {/* Start Progress Video Cluster Emerald Cilebut */}
              <LocationProject />
              {/* End Progress Video Cluster Emerald Cilebut */}

              {/* Start Progress Video Cluster Emerald Cilebut */}
              <GetEBrochure />
              {/* End Progress Video Cluster Emerald Cilebut */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContentPages;
