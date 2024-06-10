import { useState } from "react";

import "./../../../Style/ContentPages/ContentPages.css";

import TextTruncate from "./../../../LogicBoard/Functions/TextTruncate.jsx";
import { Pagination } from "./../Section/ProgressSection/DataProgress.jsx";

function ProgressCluster() {
  const [currentPage, setCurrentPage] = useState(1);
  const PaginationPage = 3;

  if (!Pagination || Pagination.length === 0) {
    return <div>Maaf, Product Sedang Perbaikan System</div>;
  }

  const indexOfLastProduct = currentPage * PaginationPage;
  const indexOfFirstProduct = indexOfLastProduct - PaginationPage;
  const currentPagination = Pagination.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const PrevPageClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const NextPageClick = () => {
    const numOfButtons = Math.ceil(Pagination.length / PaginationPage);
    if (currentPage < numOfButtons) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div id="Progress" className="ProgressEmeraldCilebut">
      <div className="EmeraldCilebutContent">
        <span>
          <div className="EmeraldCilebutHeadline">
            <h2>
              Progress Cluster
              <a href="https://www.emeraldcilebut.id" target="_blank" rel="noopener noreferrer">
                <b>Emerald Cilebut</b>
              </a>
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </span>
      </div>
      <div className="ProgressEmeraldCilebutContainer">
        {/* Start Card Progress Video */}

        {currentPagination.map((product) => (
          <div key={product.id} className="ProgressEmeraldCilebutContent SliderAnimation">
            <div className="ProgressEmeraldCilebutContentTopThumbnail">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/f7OsjjJJuR4?si=k2Yy19ur6oCLL1rl" title="Emerald Cilebut Bogor" frameBorder="0" loading="lazy" allowFullScreen style={{ borderRadius: "1rem" }}></iframe>
            </div>
            <div className="ProgressEmeraldCilebutContentCenterHeadline">
              <a href="Youtube.com">
                <span>
                  <h5>Video Emerald Cilebut</h5>
                  <p>
                    <TextTruncate
                      text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book."
                      maxLength={100}
                    />
                  </p>
                </span>
              </a>
              <a href="google.com">
                <div className="ProgressEmeraldCilebutContentCenterContentCreator">
                  <div className="ProgressEmeraldCilebutContentCenterCardContentCreator"></div>
                  <div className="ProgressEmeraldCilebutContentCenterHeadlineContentCreator">
                    <h5>PT. EPIK PROPERTI INDONESIA</h5>
                  </div>
                </div>
              </a>
            </div>
            <div className="ProgressEmeraldCilebutContentBottomAction">
              <a href="google.com">
                <button>Preview</button>
              </a>
            </div>
          </div>
        ))}

        {/* End Card Progress Video */}
      </div>
      <div className="DiverContent"></div>
      {/* Start Pagination */}
      <ul className="Pagination">
        <li className={`PaginationItem ${currentPage === 1 ? "disabled" : ""}`}>
          <a onClick={PrevPageClick} className={`PaginationLink ${currentPage === 1 ? "disabled" : ""}`}>
            &laquo; Prev
          </a>
        </li>

        {Array.from({ length: Math.ceil(Pagination.length / PaginationPage) }).map((_, index) => (
          <li className={`PaginationItem ${currentPage === index + 1 ? "active" : ""} `} key={index}>
            <a className={`PaginationLink ${currentPage === index + 1 ? "active" : ""}`} onClick={() => paginate(index + 1)}>
              {index + 1}
            </a>
          </li>
        ))}

        <li className={`PaginationItem ${currentPage === Math.ceil(Pagination.length / PaginationPage) ? "disabled" : ""}`}>
          <a onClick={NextPageClick} className={`PaginationLink ${currentPage === Math.ceil(Pagination.length / PaginationPage) ? "disabled" : ""}`}>
            Next &raquo;
          </a>
        </li>
      </ul>
      {/* End Pagination */}
    </div>
  );
}

export default ProgressCluster;
