import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const images = [
    'https://farmtohome.com.my/image/farmtohome/image/cache/data/FTHD%20Main%20Page%201-700x431.png',
    'https://farmtohome.com.my/image/farmtohome/image/cache/data/Copy%20of%20Photo%203%20(1)-1024x577.jpg',
    'https://farmtohome.com.my/image/farmtohome/image/cache/data/FTHD%20Main%20Page%201-700x431.png',
    'https://farmtohome.com.my/image/farmtohome/image/cache/data/Copy%20of%20Photo%203%20(1)-1024x577.jpg',
    'https://farmtohome.com.my/image/farmtohome/image/cache/data/Copy%20of%20Photo%203%20(1)-1024x577.jpg',
];

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the next image
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Function to go to the previous image
    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Function to go to a specific image based on the circle clicked
    const goToImage = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="banner-container">
            <div className="image-container">
                <img
                    src={images[currentIndex]}
                    alt="Banner"
                    className="banner-image"
                />
                <div className="left-arrow" onClick={prevImage}>
                    <FontAwesomeIcon icon={faChevronLeft} size="2x" />
                </div>
                <div className="right-arrow" onClick={nextImage}>
                    <FontAwesomeIcon icon={faChevronRight} size="2x" />
                </div>
                <div className="circle-container">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`circle ${currentIndex === index ? 'active' : ''}`}
                            onClick={() => goToImage(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
