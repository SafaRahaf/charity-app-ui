import React from 'react';
import RenderStars from '../helpers/stars';

const SingleProduct = ({ data }) => {
  const { title, id, img, star, price, productName, description } = data;

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={img}
            alt={productName}
            className="mb-4 rounded-lg shadow-md w-full h-auto md:h-100"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="mb-4">{productName}</p>
          <p className="mb-4">{description}</p>
          <p className="mb-4">Price: {price}</p>
          <div className="flex items-center mt-2.5 mb-5">Stars: <RenderStars star={star} /></div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;