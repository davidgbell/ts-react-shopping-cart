export type ProductProps = {
  name: string;
  image: string;
  price: number;
  colour: string;
  qty: number;
  id: number;
};

type Props = {
  product: ProductProps;
  addQty: (clickedProduct: ProductProps) => void;
  removeQty: (clickedProduct: ProductProps) => void;
};

export const Product = ({ product, addQty, removeQty }: Props) => {
  return (
    <div className='product'>
      <div className='product-grid'>
        <img src={`/images/${product.image}`} alt={product.name} width={110} />
        <div className='product_content'>
          <div className='product_title'>
            {product.name}
            <span>{product.colour}</span>
          </div>
          <div className='qty-btns'>
            <button
              disabled={product.qty === 1}
              onClick={() => removeQty(product)}>
              -
            </button>
            <span>{product.qty}</span>
            <button onClick={() => addQty(product)}>+</button>
          </div>
          <div className='product_price'>£ {product.price}</div>
        </div>
      </div>
    </div>
  );
};
