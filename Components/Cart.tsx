import { useEffect, useState } from 'react';
import { data } from '../data';
import { Product } from './Product';

const productData = data;

export const Cart = () => {
  const [products, setProducts] = useState<any[] | null>(null);

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
        />
      ))}
    </div>
  );
};
