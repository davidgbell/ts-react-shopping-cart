import { useState } from 'react';

type ProductProps = {
  name: string;
  image: string;
  price: number;
  colour: string;
  quantity: number;
};

export const Product = ({
  name,
  image,
  price,
  colour,
  quantity,
}: ProductProps) => {
  return (
    <div className='product'>
      <div className='product-grid'>
        <img src={`/images/${image}`} alt={name} width={110} />
        <div className='product_content'>
          <div className='product_title'>
            {name}
            <span>{colour}</span>
          </div>
          <div className='qty-btns'>
            <button>-</button>
            <span>{quantity}</span>
            <button>+</button>
          </div>
          <div className='product_price'>£ {price}</div>
        </div>
      </div>
    </div>
  );
};
