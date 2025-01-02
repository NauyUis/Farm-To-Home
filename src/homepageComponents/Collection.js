import React from 'react';

const images = [
  {
    src: 'https://farmtohome.com.my/image/farmtohome/image/cache/data/Home%20page/4-640x400.png',
    link: '/page1',
  },
  {
    src: 'https://farmtohome.com.my/image/farmtohome/image/cache/data/Home%20page/5-640x400.png',
    link: '/page2',
  },
  {
    src: 'https://farmtohome.com.my/image/farmtohome/image/cache/data/Home%20page/3%20b-640x400.png',
    link: '/page3',
  },
  
];

const Collection = () => {
  return (
    <div className="collection-container">
      {images.map((image, index) => (
        <div className="card" key={index}>
          <a href={image.link}>
            <img src={image.src} alt={`Farm ${index + 1}`} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Collection;
