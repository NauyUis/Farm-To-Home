import React from 'react';

const images = [
    {
        src: 'https://farmtohome.com.my/image/farmtohome/image/cache/data/Home%20page/FTH%20club-750x350.png',
        link: '/page1',
        heading: 'The FTH Club',
        description: 'Become a Farm To Home member and get discounts on your purchase.',
    },
    {
        src: 'https://farmtohome.com.my/image/farmtohome/image/cache/data/Home%20page/Prepaid%20store%20credit%20logo-750x350.png',
        link: '/page2',
        heading: 'Prepaid Store Credit',
        description: 'Purchase a certain amount of store credit and get more than what you pay for.',
    },
];

const MemberAndStoreCredit = () => {
    return (
        <div className="FTH-StoreCredit-container">
            <h2 className='FTH-heading'>Become a member or purchase some store credits.</h2>
            <p className='FTH-des'>Members have special discounts, while purchasing store credits give you more for less.</p>
            <div className='FTH-StoreCredit'>
                {images.map((image, index) => (
                    <div className="FTH-StoreCredit-item" key={index}>
                        <a href={image.link}>
                            <img src={image.src} alt={`Farm ${index + 1}`} />
                        </a>
                        <h3>{image.heading}</h3>
                        <p>{image.description}</p>
                    </div>
                ))}
            </div>
            <div className="small-banner">
                <h1>FRESH VEGGIES DELIVERED BY FARM TO HOME</h1>
                <p>Buy vegetables online, at the comfort of your own home.</p>
                <button className="login-register-btn">LOGIN/REGISTER</button>
            </div>
        </div>
    );
};

export default MemberAndStoreCredit;
