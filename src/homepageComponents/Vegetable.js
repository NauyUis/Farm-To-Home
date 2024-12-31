import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const ProductCarousel = () => {
    const sliderRef = useRef(null);
    const goToNext = () => {
        sliderRef.current.slickNext();
    };

    const goToPrev = () => {
        sliderRef.current.slickPrev();
    };

    const settings = {
        dots: false,
        infinite: false,
        swipeToSlide: true, // Allow sliding to the next item on swipe
        arrows: false,
        slidesToScroll: 1,
        speed: 500,
        slidesToShow: 8,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4.1,
                },
            },
        ],
    };

    const products = [
        { id: 1, name: 'Nan Kai Recess Meal for Nan Kai Recess Meal for January 2025 (14 days) 南开华小 2025年 1月(Nan Kai Recess Meal for January 2025 (14 days) 南开华小 2025年 1月(Nan Kai Recess Meal for January 2025 (14 days) 南开华小 2025年 1月(Nan Kai Recess Meal for January 2025 (14 days) 南开华小 2025年 1月(January 2025 (14 days) 南开华小 2025年 1月(14天)休息餐点 (30/12-24/12)', price: '10.00', image: 'https://farmtohome.com.my/image/farmtohome/image/cache/data/all_product_images/product-790/png_20230118_195612_0000-420x420.png', quantity: 0 },
        { id: 2, name: 'Product 2asdadsasdadsasdasdsssssaaaaaaaaaaaaaaaaaaaaasaaaaaaaaaaa', price: '12.00', image: 'https://farmtohome.com.my/image/farmtohome/image/cache/data/all_product_images/product-177/carrot-420x420.png', quantity: 1 },
        { id: 3, name: 'Prodasdadsadadsadadsdasdasasdadsaduct 3', price: '152000.00', image: 'https://farmtohome.com.my/image/farmtohome/image/cache/data/all_product_images/product-181/brocolli-420x420.png', quantity: 1 },
        { id: 4, name: 'Product 4', price: '8.00', image: 'https://farmtohome.com.my/image/farmtohome/image/cache/data/all_product_images/product-790/png_20230118_195612_0000-420x420.png', quantity: 1 },
        { id: 5, name: 'Product 5', price: '20.00', image: 'https://farmtohome.com.my/image/farmtohome/image/cache/data/all_product_images/product-790/png_20230118_195612_0000-420x420.png', quantity: 1 },
        { id: 6, name: 'Product 1', price: '10.00', image: 'https://farmtohome.com.my/image/farmtohome/image/cache/data/all_product_images/product-790/png_20230118_195612_0000-420x420.png', quantity: 1 },
        { id: 7, name: 'Product 2', price: '12.00', image: 'https://farmtohome.com.my/image/farmtohome/image/cache/data/all_product_images/product-790/png_20230118_195612_0000-420x420.png', quantity: 1 },
        { id: 8, name: 'Product 3', price: '15.00', image: 'https://farmtohome.com.my/image/farmtohome/image/cache/data/all_product_images/product-790/png_20230118_195612_0000-420x420.png', quantity: 1 },
        { id: 9, name: 'Product 4', price: '8.00', image: 'https://farmtohome.com.my/image/farmtohome/image/cache/data/all_product_images/product-790/png_20230118_195612_0000-420x420.png', quantity: 1 },
        { id: 10, name: 'Product 5', price: '20.00', image: 'https://farmtohome.com.my/image/farmtohome/image/cache/data/all_product_images/product-790/png_20230118_195612_0000-420x420.png', quantity: 1 },
        { id: 11, name: 'Product 5', price: '20.00', image: 'https://farmtohome.com.my/image/farmtohome/image/cache/data/all_product_images/product-790/png_20230118_195612_0000-420x420.png', quantity: 1 },
        { id: 12, name: 'Product 1', price: '10.00', image: 'https://farmtohome.com.my/image/farmtohome/image/cache/data/all_product_images/product-790/png_20230118_195612_0000-420x420.png', quantity: 1 },
        { id: 13, name: 'Product 2', price: '12.00', image: 'https://farmtohome.com.my/image/farmtohome/image/cache/data/all_product_images/product-790/png_20230118_195612_0000-420x420.png', quantity: 1 },
        { id: 14, name: 'Product 3', price: '15.00', image: 'https://farmtohome.com.my/image/farmtohome/image/cache/data/all_product_images/product-790/png_20230118_195612_0000-420x420.png', quantity: 1 },
        { id: 15, name: 'Product 4', price: '8.00', image: 'https://farmtohome.com.my/image/farmtohome/image/cache/data/all_product_images/product-790/png_20230118_195612_0000-420x420.png', quantity: 1 },
        { id: 16, name: 'Product 5', price: '20.00', image: 'https://farmtohome.com.my/image/farmtohome/image/cache/data/all_product_images/product-790/png_20230118_195612_0000-420x420.png', quantity: 1 },
    ];

    const title = "Top Product"


    return (
        <div className="product-container">
            <h2>{title}</h2>
            <Slider ref={sliderRef} {...settings} className="product-slick-slider">
                {products.map((product) => (
                    <div key={product.id} className="product-item">
                        <img src={product.image} alt={product.name} />

                        <div className="product-info">
                            <p className="product-name">{product.name}</p>
                            <p className="product-price">RM{product.price}</p>
                        </div>

                        {product.quantity > 0 ? (
                            <button className="add-to-cart">
                                <FontAwesomeIcon icon={faShoppingCart} size="2x" />
                                Add to Cart
                            </button>
                        ) : (
                            <button className="add-to-cart" disabled>
                                Out of Stock
                            </button>
                        )}
                    </div>
                ))}
            </Slider>
            <div className="product-left-arrow" onClick={goToPrev}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className="product-right-arrow" onClick={goToNext}>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        </div>
    );
};

export default ProductCarousel;
