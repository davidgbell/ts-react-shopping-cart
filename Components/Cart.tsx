import { useEffect, useState } from 'react';
import { data } from '../data';
import { Product } from './Product';

const productData = data;

export const Cart = () => {
  const [products, setProducts] = useState<any[] | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setProducts(productData);
  }, []);

  if (!products) {
    return <h1>Loading</h1>;
  }

  return (
    <div className='cart'>
      {products.map((p) => (
        <Product
          key={p.name}
          name={p.name}
          colour={p.colour}
          image={p.image}
          price={p.price}
          quantity={quantity}
        />
      ))}
      <div className='prices_wrapper'>
        <span className='prices_label'>Order</span>
        <span className='prices_price'>£ 100</span>
        <span className='prices_label'>Delivery</span>
        <span className='prices_price'>£ 10.00</span>
        <div className='total'>
          <span>Total</span>
          <span>Price</span>
        </div>
      </div>
    </div>
  );
};
