// src/components/ProductCard.tsx
import React from 'react';
import type { ProductType } from '../types'; // Importamos nosso tipo
 // Importamos nosso tipo
import './ProductCard.css';

// Definimos as propriedades que o componente receberá
interface ProductCardProps {
  product: ProductType;
  onAddToCart: (product: ProductType) => void; // A prop é uma função que não retorna nada
}

// Usamos a interface para tipar as props
const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>R$ {product.price.toFixed(2).replace('.', ',')}</p>
      <button onClick={() => onAddToCart(product)}>
        Adicionar ao Pedido
      </button>
    </div>
  );
};

export default ProductCard;