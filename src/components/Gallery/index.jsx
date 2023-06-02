import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { StyledSlider } from "../../styles/StyledPopups";

function Gallery(props) {
  const { list, index, galleryOpened, closeGallery } = props;
  const [swiper, setSwiper] = useState(null);
  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    let arr = [];
    if (typeof list === "object") arr = list;

    setGalleryList(arr);
  }, [list]);

  useEffect(() => {
    if (galleryOpened && swiper) {
      swiper.slideTo(index);
    }
  }, [galleryOpened, swiper]);

  return (
    <>
      <StyledSlider>
        <div
          className="gallery"
          data-status={galleryOpened}
          onClick={closeGallery}
        >
          <div
            className="gallery__content"
            onClick={(e) => e.stopPropagation()}
          >
            <Swiper
              onSwiper={setSwiper}
              className="gallery__slider"
              modules={[Navigation, Pagination]}
              navigation={{
                nextEl: "._next",
                prevEl: "._prev",
              }}
            >
              {galleryList.map((item, i) => (
                <SwiperSlide key={i}>
                  <img src={item} alt='processed photo'/>
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="buttons_navigation _prev"> &lt; </button>
            <button className="buttons_navigation _next"> &gt; </button>
          </div>
        </div>
      </StyledSlider>
    </>
  );
}

export default Gallery;
