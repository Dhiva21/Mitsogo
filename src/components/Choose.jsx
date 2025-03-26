import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import chris from "../assets/images/chris-robinson.png";
import merck from "../assets/images/merck.svg";
import saic from "../assets/images/saic.svg";
import '../assets/css/Choose.css'


const logos = [
  merck,
  saic,
  merck,
  saic,
  merck,
  saic,
  merck,
  saic,
  merck,
  saic,
  merck,
  saic,
  merck,
  saic,
  merck,
  saic,
  merck,
  saic,
  merck,
  saic,
  merck,
  saic,
  merck,
  saic

];


const Choose = () => {
  return (
  <>
      <section className="chooseBg">
         <div className="container">
            <div className="row mb-4">
               <div className="col-md-12">
                   <div className="choose-title">
                     <h3>Why should you choose Hexnode?</h3>
                   </div>

<div className="row">
   <div className="col-md-12">
   <div>
                   <Swiper
      modules={[Navigation]}
      navigation
      autoplay={{ delay: 3000 }}
      loop 
      className="sliderChoose"
    >
      <SwiperSlide>
       <div className="row ">
          <div className="col-md-4 pe-0">
             <div className="chooseImage">
               <img src={chris} alt="Testimonial Image" />
             </div>
          </div>
          <div className="col-md-7 sideContentBg">
             <div className="chooseImageContent">
              <div className="chooseImageContentInner">
              <h4>"It seemed to be in-line with everything we were looking at."</h4>
              <hr />
              <p className="mb-0">Chris Robinson</p>
              <small>Executive Account Manager, NCS</small>
              </div>
             
             </div>
          </div>
       </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="row ">
          <div className="col-md-4 pe-0">
             <div className="chooseImage">
               <img src={chris} alt="Testimonial Image" />
             </div>
          </div>
          <div className="col-md-7 sideContentBg">
             <div className="chooseImageContent">
              <div className="chooseImageContentInner">
              <h4>"It seemed to be in-line with everything we were looking at."</h4>
              <hr />
              <p className="mb-0">Chris Robinson</p>
              <small>Executive Account Manager, NCS</small>
              </div>
             
             </div>
          </div>
       </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="row ">
          <div className="col-md-4 pe-0">
             <div className="chooseImage">
               <img src={chris} alt="Testimonial Image" />
             </div>
          </div>
          <div className="col-md-7 sideContentBg">
             <div className="chooseImageContent">
              <div className="chooseImageContentInner">
              <h4>"It seemed to be in-line with everything we were looking at."</h4>
              <hr />
              <p className="mb-0">Chris Robinson</p>
              <small>Executive Account Manager, NCS</small>
              </div>
             
             </div>
          </div>
       </div>
      </SwiperSlide>
    </Swiper>
                   </div>
   </div>
</div>
                
               </div>
            </div>
      <div className="row mb-4 pt-5">
         <div className="container">
           <div className="col-md-12">
               <div>
               <div className="carousel-container">
      <div className="fade-left"></div>
      <Swiper
        slidesPerView={7}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 3, spaceBetween: 10 }, 
          480: { slidesPerView: 2, spaceBetween: 15 }, 
          768: { slidesPerView: 4, spaceBetween: 20 }, 
          1024: { slidesPerView: 7, spaceBetween: 30 }, 
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt="brand-logo" style={{ maxWidth: "100%" }} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="fade-right"></div>
    </div>
               </div>
           </div>
         </div>
      </div>


         </div>
      </section>
   

    </>
  );
};

export default Choose;
