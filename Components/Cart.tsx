import { useEffect, useState } from 'react';
import { data } from '../data';
import { Product } from './Product';

const productData = data;

export const Cart = () => {
  const [products, setProducts] = useState<any[] | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [deliveryCost, setDeliveryCost] = useState(10);

  useEffect(() => {
    setProducts(productData);
  }, []);

  if (!products) {
    return <h1>Loading</h1>;
  }

  const orderTotal = products.reduce((acc, product) => acc + product.price, 0);

  const calcTotal =
    products.reduce((acc, product) => acc + product.price, 0) + deliveryCost;

  console.log(calcTotal);
  console.log(orderTotal);

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
        <span className='prices_price'>£ {orderTotal}</span>
        <span className='prices_label'>Delivery</span>
        <span className='prices_price'>£ {deliveryCost}</span>
        <div className='total'>
          <span>Total</span>
          <span>£ {calcTotal}</span>
        </div>
      </div>
    </div>
  );
};
