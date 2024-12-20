import React, { useRef } from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Image links array
const images = [
  'https://farmtohome.com.my/image/farmtohome/image/cache/data/FTHD%20Main%20Page%201-700x431.png',
    'https://farmtohome.com.my/image/farmtohome/image/cache/data/Copy%20of%20Photo%203%20(1)-1024x577.jpg',
    'https://farmtohome.com.my/image/farmtohome/image/cache/data/FTHD%20Main%20Page%201-700x431.png',
    'https://farmtohome.com.my/image/farmtohome/image/cache/data/Copy%20of%20Photo%203%20(1)-1024x577.jpg',
    'https://farmtohome.com.my/image/farmtohome/image/cache/data/Copy%20of%20Photo%203%20(1)-1024x577.jpg',
];

const Banner = () => {
  const sliderRef = useRef(null);

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: true,
    centerMode: true, // Add this line
    centerPadding: '0', // Adjust padding as needed
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows
  };

  return (
    <div className="carousel-container">
      <Slider ref={sliderRef} {...settings}>
        {images.map((url, index) => (
          <div className="image-container" key={index}>
            <img
              src={url}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
            />
          </div>
        ))}
      </Slider>

      {/* Custom Arrows */}
      <div className="left-arrow" onClick={goToPrev}>
        <FontAwesomeIcon icon={faChevronCircleLeft} />
      </div>
      <div className="right-arrow" onClick={goToNext}>
        <FontAwesomeIcon icon={faChevronCircleRight} />
      </div>
    </div>
  );
};

export default Banner;
