import "./../../../Style/ContentPages/ContentPages.css";

import ClubHouse from "./../../../Asset/Image/Facilities/ClubHouse.jpg";
import ClusterGate from "./../../../Asset/Image/Facilities/ClusterGate.jpg";
import KidsPlayground from "./../../../Asset/Image/Facilities/KidsPlayground.jpg";
import OutdoorGym from "./../../../Asset/Image/Facilities/OutdoorGym.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Facilities() {
  return (
    <div id="Facilities" className="FacilitiesEmeraldCilebut">
      <div className="FacilitiesEmeraldCilebutContainer">
        <div className="FacilitiesEmeraldCilebutContentTop">
          <div className="FacilitiesEmeraldCilebutContentLeft">
            <div className="FacilitiesEmeraldCilebutContentLeftHeadline">
              <span>
                <h3>Facilities Cluster</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and</p>
              </span>
            </div>
          </div>
          <div className="FacilitiesEmeraldCilebutContentRight">
            <div className="FacilitiesEmeraldCilebutContentRightContent">
              <Swiper
                slidesPerView={2.5}
                spaceBetween={0}
                navigation={true}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  768: {
                    slidesPerView: 1.5,
                    spaceBetween: 0,
                  },
                  1024: {
                    slidesPerView: 1.5,
                    spaceBetween: 0,
                  },
                  1280: {
                    slidesPerView: 2.5,
                    spaceBetween: 0,
                  },
                }}
                modules={[Navigation]}
              >
                <SwiperSlide>
                  <div className="FacilitiesEmeraldCilebutContentRightCardContent">
                    <img src={ClubHouse} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="FacilitiesEmeraldCilebutContentRightCardContent">
                    <img src={ClusterGate} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="FacilitiesEmeraldCilebutContentRightCardContent">
                    <img src={KidsPlayground} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="FacilitiesEmeraldCilebutContentRightCardContent">
                    <img src={OutdoorGym} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="FacilitiesEmeraldCilebutContentRightCardContent">
                    <img src={ClubHouse} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="FacilitiesEmeraldCilebutContentRightCardContent">
                    <img src={ClubHouse} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="FacilitiesEmeraldCilebutContentRightCardContent">
                    <img src={ClubHouse} alt="" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facilities;
