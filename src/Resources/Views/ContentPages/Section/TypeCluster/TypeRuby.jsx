import { useState, useEffect } from "react";
import Cookies from "js-cookie";

import "./../../../../Style/ContentPages/ContentPages.css";
import FacadeTypeRuby from "./../../../../Asset/Image/Facade/TypeRuby.jpeg";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShare, faBath, faBed, faCar, faMotorcycle } from "@fortawesome/free-solid-svg-icons";

function TypeRuby() {
  const [LikeCountRuby, setLikeCountRuby] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  const [CommentCountRuby, setCommentCountRuby] = useState(0);
  const [hasCommented, setHasCommented] = useState(false);

  useEffect(() => {
    // Mengecek apakah pengguna telah memberi "Like" sebelumnya di cookies
    const savedLikeCount = Cookies.get("LikeCountRuby");
    if (savedLikeCount) {
      setLikeCountRuby(parseInt(savedLikeCount, 10));
    }

    // Mengecek apakah pengguna telah memberi "Comment" sebelumnya di cookies
    const savedCommentCount = Cookies.get("CommentCountRuby");
    if (savedCommentCount) {
      setCommentCountRuby(parseInt(savedCommentCount, 10));
    }
  }, []);

  const handleLikeClick = () => {
    if (!hasLiked) {
      // Jika belum memberi "Like" sebelumnya, tambahkan "Like"
      const updatedLikeCountRuby = LikeCountRuby + 1;
      setLikeCountRuby(updatedLikeCountRuby);
      setHasLiked(true);

      // Menyimpan jumlah "Like" ke cookies
      Cookies.set("LikeCountRuby", updatedLikeCountRuby, { expires: Number.MAX_SAFE_INTEGER }); // Menyimpan selama 1 tahun
    }
  };

  const handleCommentClick = () => {
    if (!hasCommented) {
      // Jika belum memberi "Comment" sebelumnya, tambahkan "Comment"
      const updatedCommentCountRuby = CommentCountRuby + 1;
      setCommentCountRuby(updatedCommentCountRuby);
      setHasCommented(true);

      // Menyimpan jumlah "Like" ke cookies
      Cookies.set("CommentCountRuby", updatedCommentCountRuby, { expires: Number.MAX_SAFE_INTEGER }); // Menyimpan selama 1 tahun
    }
  };

  return (
    <div className="CardTypeClusterEmeraldCilebutContentBottom">
      <div className="CardTypeClusterEmeraldCilebutContentBottomLeft">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <img src={FacadeTypeRuby} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={FacadeTypeRuby} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={FacadeTypeRuby} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={FacadeTypeRuby} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={FacadeTypeRuby} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="CardTypeClusterEmeraldCilebutContentBottomRight">
        <div className="CardTypeClusterEmeraldCilebutContentBottomRightButtonAction">
          <div className="CardTypeClusterEmeraldCilebutContentBottomRightButtonActionTop">
            <span>
              <a onClick={handleLikeClick} disabled={hasLiked}>
                <FontAwesomeIcon icon={faHeart} />
              </a>
              <b>{LikeCountRuby}</b>
            </span>
            <span>
              <a href="whatsapp://send?text=www.emeraldcilebut.com" onClick={handleCommentClick} disabled={hasCommented}>
                <FontAwesomeIcon icon={faShare} />
              </a>
              <b>{CommentCountRuby}</b>
            </span>
          </div>
          <div className="CardTypeClusterEmeraldCilebutContentBottomRightButtonActionCenter">
            <button>Priview Denah</button>
          </div>
        </div>

        <div className="CardTypeClusterEmeraldCilebutContentBottomRightContent">
          <div className="CardTypeClusterEmeraldCilebutContentBottomRightContentHeadline">
            <h5>Cluster Emerald Cilebut</h5>
            <h3>
              Type Ruby <b>2 Storey</b>
            </h3>
          </div>
          <div className="DiverContent"></div>
          <div className="CardTypeClusterEmeraldCilebutContentBottomRightContentSpecification">
            <h3>Specification</h3>
            <h5>
              Luas Tanah: <b>69m²</b>
            </h5>
            <h5>
              Luas Bangunan: <b>69m²</b>
            </h5>
            <div className="CardTypeClusterEmeraldCilebutContentBottomRightContentSpecificationCard">
              <div className="CardTypeClusterEmeraldCilebutContentBottomRightContentSpecificationCardContent">
                <FontAwesomeIcon icon={faBath} />
              </div>
              <p>
                Bath Room <br /> <b>2</b>
              </p>
              <div className="CardTypeClusterEmeraldCilebutContentBottomRightContentSpecificationCardContent">
                <FontAwesomeIcon icon={faBed} />
              </div>
              <p>
                Bed Room <br /> <b>4</b>
              </p>
              <div className="CardTypeClusterEmeraldCilebutContentBottomRightContentSpecificationCardContent">
                <FontAwesomeIcon icon={faCar} />
              </div>
              <p>
                Car Port <br /> <b>2</b>
              </p>
              <div className="CardTypeClusterEmeraldCilebutContentBottomRightContentSpecificationCardContent">
                <FontAwesomeIcon icon={faMotorcycle} />
              </div>
              <p>
                Bike <br /> <b>1</b>
              </p>
            </div>
          </div>
          <div className="DiverContent"></div>
          <div className="CardTypeClusterEmeraldCilebutContentBottomRightContentRoomsArea">
            <h3>Lorem Ipsum</h3>
            <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TypeRuby;
