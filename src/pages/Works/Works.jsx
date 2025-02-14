import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Works.scss"; // 引入樣式

const Works = () => {
  const slides = [
    { id: 1, img: "https://cdn.jsdelivr.net/gh/RalphSN/images@main/official-images/works.png" },
    { id: 2, img: "https://cdn.jsdelivr.net/gh/RalphSN/images@main/official-images/works.png" },
    { id: 3, img: "https://cdn.jsdelivr.net/gh/RalphSN/images@main/official-images/works.png" }
  ];

  return (
    <section className="works">
      <div className="works-header">
        <h2 className="works-title">精選成果</h2>
      </div>
      <div className="works-slider">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img src={slide.img} alt={`Work ${slide.id}`} className="works-image" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Works;
