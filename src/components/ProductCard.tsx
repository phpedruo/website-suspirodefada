// src/components/ProductCard.tsx
import React from 'react';
import type { ProductType } from '../types'; // Importamos nosso tipo
 // Importamos nosso tipo
import './ProductCard.css';

// Definimos as propriedades que o componente receberá
interface ProductCardProps {
  product: ProductType;
  onAddToCart: (product: ProductType, quantity: number) => void;
}

// Usamos a interface para tipar as props
const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = React.useState(1);
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>R$ {product.price.toFixed(2).replace('.', ',')}</p>
      <div style={{ margin: '0.5rem 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
        <label htmlFor={`qty-${product.id}`}>Qtd:</label>
        <button
          type="button"
          aria-label="Diminuir quantidade"
          onClick={() => setQuantity(q => Math.max(1, q - 1))}
          style={{ padding: '0.2rem 0.7rem', fontSize: '1.1rem', borderRadius: '4px', border: '1px solid #ccc', background: '#f5f5f5', cursor: 'pointer' }}
        >-</button>
        <input
          id={`qty-${product.id}`}
          type="number"
          min={1}
          value={quantity}
          onChange={e => setQuantity(Math.max(1, Number(e.target.value)))}
          style={{ width: '45px', textAlign: 'center' }}
        />
        <button
          type="button"
          aria-label="Aumentar quantidade"
          onClick={() => setQuantity(q => q + 1)}
          style={{ padding: '0.2rem 0.7rem', fontSize: '1.1rem', borderRadius: '4px', border: '1px solid #ccc', background: '#f5f5f5', cursor: 'pointer' }}
        >+</button>
      </div>
      <button onClick={() => onAddToCart(product, quantity)}>
        Adicionar ao Pedido
      </button>
    </div>
  );
};

export default ProductCard;