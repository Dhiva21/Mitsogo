import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const Choose = () => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      autoplay={{ delay: 3000 }}
      loop
    >
      <SwiperSlide>
        <h4>Testimonial 1</h4>
      </SwiperSlide>
      <SwiperSlide>
        <h4>Testimonial 2</h4>
      </SwiperSlide>
      <SwiperSlide>
        <h4>Testimonial 3</h4>
      </SwiperSlide>
    </Swiper>
  );
};

export default Choose;
