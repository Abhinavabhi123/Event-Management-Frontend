import Slider from "react-slick";
import "../styles/banner-carousel.css";
import { bannerData } from "../constants";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";
import { useRef } from "react";

export default function BannerCarousel() {
  var sliderRef = useRef(null);

  var settings = {
    dots: false,
    infinite: true,
    speed: 800,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <Slider ref={sliderRef} {...settings}>
      {bannerData.map((item, i) => (
        <div key={i} className="banner-carousel-wrapper">
          <img src={item.imageURL} alt="image" />
          <div className="banner-carousel-data">
            {/* left Arrow */}
            <div className="banner-arrow-section">
              <RiArrowRightWideFill onClick={nextSlide} />
            </div>
            {/* content */}
            <div className="banner-center-section">
              <p>{item.text}</p>
            </div>
            {/* right Arrow */}
            <div className="banner-arrow-section">
              <RiArrowLeftWideFill onClick={prevSlide} />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
