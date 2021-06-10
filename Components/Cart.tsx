import React, { useEffect, useState } from 'react';
import { data } from '../data';
import { Product, ProductProps } from './Product';

const productData = data;

export const Cart = () => {
  const [products, setProducts] = useState<any[] | null>(null);
  const [deliveryCost, setDeliveryCost] = useState(10);
  const [promoInput, setPromoInput] = useState<string | number>('');
  const [discount, setDiscount] = useState<boolean>(false);

  useEffect(() => {
    setProducts(productData);
  }, []);

  if (!products) {
    return <h1>Loading</h1>;
  }

  const orderTotal = (products: ProductProps[]) => {
    const total = products.reduce(
      (acc, product) => acc + product.price * product.qty,
      0
    );
    if (discount) {
      return total - total / 10;
    } else {
      return total;
    }
  };

  const calcTotal = (products: ProductProps[]) => {
    const total = orderTotal(products);

    if (total < 500) {
      return total + deliveryCost;
    } else {
      return total;
    }
  };

  const addQty = (clickedProduct: ProductProps) => {
    const alreadyInCart = products.find((p) => p.id === clickedProduct.id);

    if (alreadyInCart) {
      return setProducts(
        products.map((p) =>
          p.id === alreadyInCart.id ? { ...p, qty: p.qty + 1 } : p
        )
      );
    }
  };

  const removeQty = (clickedProduct: ProductProps) => {
    const alreadyInCart = products.find((p) => p.id === clickedProduct.id);

    if (alreadyInCart) {
      return setProducts(
        products.map((p) =>
          p.id === alreadyInCart.id ? { ...p, qty: p.qty - 1 } : p
        )
      );
    }
  };

  const handleSubmitCode = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (promoInput === 'special') {
      setDiscount(true);
      alert('10 percent off has been added');
      setPromoInput('');
    } else {
      alert('Code is invalid');
    }
  };

  const handlePromoInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPromoInput(e.currentTarget.value);
  };

  return (
    <div className='cart'>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          addQty={addQty}
          removeQty={removeQty}
        />
      ))}
      <div className='prices_wrapper'>
        <span className='prices_label'>Order</span>
        <span className='prices_price'>
          £ {orderTotal(products).toFixed(2)}
        </span>
        <span className='prices_label'>Delivery</span>
        <span className='prices_price'>£ {calcTotal(products)}</span>
        <div className='total'>
          <span>Total</span>
          <span>£ {calcTotal(products).toFixed(2)}</span>
        </div>
      </div>
      <form role='promo code' onSubmit={(e) => handleSubmitCode(e)}>
        <label htmlFor='promo code'>Add promo code</label>
        <input
          type='text'
          aria-label='Add promo code'
          value={promoInput || ''}
          placeholder='Add promo code'
          onChange={handlePromoInputChange}
        />
        <button>Apply</button>
      </form>
      <button>Place your order</button>
    </div>
  );
};
