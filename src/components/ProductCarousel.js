import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductCarousel = () => {
    const settings = {
        dots: false,
        infinite: false,
        swipeToSlide: true, // Allow sliding to the next item on swipe
        arrows: false, // Disable default arrows
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
                    slidesToShow: 3.5,
                },
            },
        ],
    };

    const products = [
        { id: 1, name: 'Nan Kai Recess Meal for Nan Kai Recess Meal for January 2025 (14 days) 南开华小 2025年 1月(Nan Kai Recess Meal for January 2025 (14 days) 南开华小 2025年 1月(Nan Kai Recess Meal for January 2025 (14 days) 南开华小 2025年 1月(Nan Kai Recess Meal for January 2025 (14 days) 南开华小 2025年 1月(January 2025 (14 days) 南开华小 2025年 1月(14天)休息餐点 (30/12-24/12)', price: '10.00', image: 'https://farmtohome.com.my/image/farmtohome/image/cache/data/all_product_images/product-790/png_20230118_195612_0000-420x420.png' },
        { id: 2, name: 'Product 2asdadsasdadsasdasdsssssaaaaaaaaaaaaaaaaaaaaasaaaaaaaaaaa', price: '12.00', image: 'https://farmtohome.com.my/image/farmtohome/image/cache/data/all_product_images/product-177/carrot-420x420.png' },
        { id: 3, name: 'Prodasdadsadadsadadsdasdasasdadsaduct 3', price: '152000.00', image: 'https://farmtohome.com.my/image/farmtohome/image/cache/data/all_product_images/product-181/brocolli-420x420.png' },
        { id: 4, name: 'Product 4', price: '8.00', image: 'https://farmtohome.com.my/image/farmtohome/image/cache/data/all_product_images/product-790/png_20230118_195612_0000-420x420.png' },
        { id: 5, name: 'Product 5', price: '20.00', image: 'https://farmtohome.com.my/image/farmtohome/image/cache/data/all_product_images/product-790/png_20230118_195612_0000-420x420.png' },
        { id: 6, name: 'Product 1', price: '10.00', image: 'https://farmtohome.com.my/image/farmtohome/image/cache/data/all_product_images/product-790/png_20230118_195612_0000-420x420.png' },
        { id: 7, name: 'Product 2', price: '12.00', image: 'https://farmtohome.com.my/image/farmtohome/image/cache/data/all_product_images/product-790/png_20230118_195612_0000-420x420.png' },
        { id: 8, name: 'Product 3', price: '15.00', image: 'https://farmtohome.com.my/image/farmtohome/image/cache/data/all_product_images/product-790/png_20230118_195612_0000-420x420.png' },
        { id: 9, name: 'Product 4', price: '8.00', image: 'https://farmtohome.com.my/image/farmtohome/image/cache/data/all_product_images/product-790/png_20230118_195612_0000-420x420.png' },
        { id: 10, name: 'Product 5', price: '20.00', image: 'https://farmtohome.com.my/image/farmtohome/image/cache/data/all_product_images/product-790/png_20230118_195612_0000-420x420.png' },
        { id: 11, name: 'Product 5', price: '20.00', image: 'https://farmtohome.com.my/image/farmtohome/image/cache/data/all_product_images/product-790/png_20230118_195612_0000-420x420.png' },
        { id: 12, name: 'Product 1', price: '10.00', image: 'https://farmtohome.com.my/image/farmtohome/image/cache/data/all_product_images/product-790/png_20230118_195612_0000-420x420.png' },
        { id: 13, name: 'Product 2', price: '12.00', image: 'https://farmtohome.com.my/image/farmtohome/image/cache/data/all_product_images/product-790/png_20230118_195612_0000-420x420.png' },
        { id: 14, name: 'Product 3', price: '15.00', image: 'https://farmtohome.com.my/image/farmtohome/image/cache/data/all_product_images/product-790/png_20230118_195612_0000-420x420.png' },
        { id: 15, name: 'Product 4', price: '8.00', image: 'https://farmtohome.com.my/image/farmtohome/image/cache/data/all_product_images/product-790/png_20230118_195612_0000-420x420.png' },
        { id: 16, name: 'Product 5', price: '20.00', image: 'https://farmtohome.com.my/image/farmtohome/image/cache/data/all_product_images/product-790/png_20230118_195612_0000-420x420.png' },
    ];

    return (
        <div className="product-container">
            <h2>Product Carousel</h2>
            <Slider {...settings} className="product-slick-slider">
                {products.map((product) => (
                    <div key={product.id} className="product-item">
                        <img src={product.image} alt={product.name} />
                        <p className='product-name'>{product.name}</p>
                        <p className='product-price'>RM{product.price}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ProductCarousel;
