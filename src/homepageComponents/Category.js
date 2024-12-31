import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample category data
const categories = [
    { id: 1, icon: "https://farmtohome.com.my/image/farmtohome/image/cache/data/Screen%20Shot%202020-10-31%20at%203.59.36%20PM-400x400.png", name: "CNY Special", link: "/" },
    { id: 2, icon: "https://farmtohome.com.my/image/farmtohome/image/cache/data/Screenshot_2021_0219_001927-400x400.jpg", name: "Monthly Package", link: "/clothing" },
    { id: 3, icon: "https://farmtohome.com.my/image/farmtohome/image/cache/data/png_20230327_160013_0000-400x400.png", name: "Food", link: "/food" },
    { id: 4, icon: "https://farmtohome.com.my/image/farmtohome/image/cache/data/merry-christmas-wallpaper-design_79603-2129-400x400.jpg", name: "Christmas Special", link: "/mobile" },
    { id: 5, icon: "https://farmtohome.com.my/image/farmtohome/image/cache/data/0001-1724203431_20210523_001739_0000-400x400.png", name: "Voucher", link: "/laptops" },
    { id: 6, icon: "https://farmtohome.com.my/image/farmtohome/image/cache/data/Home%20page/4-640x400.png", name: "Books", link: "/books" },
    { id: 7, icon: "https://farmtohome.com.my/image/farmtohome/image/cache/data/Home%20page/4-640x400.png", name: "Gaming", link: "/gaming" },
    { id: 8, icon: "https://farmtohome.com.my/image/farmtohome/image/cache/data/Home%20page/4-640x400.png", name: "Headphones", link: "/headphones" },
    { id: 9, icon: "https://farmtohome.com.my/image/farmtohome/image/cache/data/Home%20page/4-640x400.png", name: "Furniture", link: "/furniture" },
    { id: 10, icon: "https://farmtohome.com.my/image/farmtohome/image/cache/data/Home%20page/4-640x400.png", name: "Shoes", link: "/shoes" },
    { id: 11, icon: "https://farmtohome.com.my/image/farmtohome/image/cache/data/Home%20page/4-640x400.png", name: "Gifts", link: "/gifts" },
    { id: 12, icon: "https://farmtohome.com.my/image/farmtohome/image/cache/data/Home%20page/4-640x400.png", name: "Lights", link: "/lights" },
];

const CategorySlider = () => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 10, // Default to 10 for screens above 480px
        swipeToSlide: true, // Allow sliding to the next item on swipe
        arrows: false, // Disable default arrows
        responsive: [
            {
                breakpoint: 1024, // For screens smaller than 1024px (tablet)
                settings: {
                    slidesToShow: 8, // Show 8 items
                },
            },

            {
                breakpoint: 780, // For screens smaller than 1024px (tablet)
                settings: {
                    slidesToShow: 6, // Show 8 items
                },
            },

            {
                breakpoint: 600, // For screens smaller than 480px (mobile)
                settings: {
                    slidesToShow: 4, // Show 4 items
                },
            },

            {
                breakpoint: 400, // For screens smaller than 480px (mobile)
                settings: {
                    slidesToShow: 3.5, // Show 4 items
                },
            },
        ],
    };

    const handleCategoryClick = (link) => {
        // Navigate to the specified link
        window.location.href = link;
    };

    return (
        <div className="category-slider">
            <Slider {...settings}>
                {categories.map((category) => (
                    <div key={category.id} className="category-item">
                        <button className="category-button" onClick={() => handleCategoryClick(category.link)}>
                            <img src={category.icon} alt={category.name} />
                        </button>
                        <div className="category-name">{category.name}</div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CategorySlider;
