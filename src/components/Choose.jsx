import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import justin from "../assets/images/justin-modrak.png";
import dalibor from "../assets/images/dalibor-kruljac.png";
import chris from "../assets/images/chris-robinson.png";
import merck from "../assets/images/merck.svg";
import saic from "../assets/images/saic.svg";
import "../assets/css/Choose.css";

const testimonials = [
  {
    img: justin,
    quote: "Hexnode is of great value. Works great with Android and iOS!",
    name: "Justin Modrak",
    position: "Technology Coordinator",
    extra:"East Troy Community School District",
  },
  {
    img: dalibor,
    quote: "Most complete MDM solution I found, and I tested many of them, including major names",
    name: "Dalibor Kruljac",
    position: "KAMELEYA LTD",
  },
  {
    img: chris,
    quote:"It seemed to be in-line with everything we were looking at.",
    name: "Chris Robinson",
    position: "Executive Account Manager, NCS",
  },
];

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
                  <Swiper
                    modules={[Navigation]}
                    navigation
                    autoplay={{ delay: 3000 }}
                    loop
                    className="sliderChoose"
                  >
                    {testimonials.map((testimonial, index) => (
                      <SwiperSlide key={index}>
                        <div className="chooseImageContainer">
                                <div className="row">
                          <div className="col-md-3 offset-xl-2 pe-0">
                            <div className="chooseImage">
                              <img src={testimonial.img} alt="Testimonial" />
                            </div>
                          </div>
                          <div className="col-md-7 sideContentBg">
                            <div className="chooseImageContent">
                              <div className="chooseImageContentInner">
                                <h4>"{testimonial.quote}"</h4>
                                <hr />
                                <p className="mb-0">{testimonial.name}</p>
                                  <small>{testimonial.position}</small>
                                  <div>{testimonial.extra}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        </div>
                       
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-4 pt-5">
            <div className="container">
              <div className="col-md-12">
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
      </section>
    </>
  );
};

export default Choose;
