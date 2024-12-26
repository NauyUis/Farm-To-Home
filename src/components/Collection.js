import React from 'react';

const images = [
  'https://farmtohome.com.my/image/farmtohome/image/cache/data/Home%20page/4-640x400.png',
  'https://farmtohome.com.my/image/farmtohome/image/cache/data/Home%20page/5-640x400.png',
  'https://farmtohome.com.my/image/farmtohome/image/cache/data/Home%20page/3%20b-640x400.png',
];

const Collection = () => {
  return (
    <div className="collection-container">
      {images.map((src, index) => (
        <div className="card" key={index}>
          <img src={src} alt={`Farm ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Collection;
