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
  const [quantity, setQuantity] = React.useState(0);

  // Atualiza o carrinho sempre que a quantidade mudar
  React.useEffect(() => {
    onAddToCart(product, quantity);
  }, [quantity, product, onAddToCart]);
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>R$ {product.price.toFixed(2).replace('.', ',')}</p>
      <span className="product-card-quantity">{quantity}</span>
      <div className="product-card-actions">
        <button
          type="button"
          aria-label="Aumentar quantidade"
          onClick={() => setQuantity(q => q + 1)}
          className="product-card-add-btn"
        >+</button>
        {quantity > 0 && (
          <button
            type="button"
            aria-label="Diminuir quantidade"
            onClick={() => setQuantity(q => Math.max(0, q - 1))}
            className="product-card-add-btn"
          >-</button>
        )}
      </div>
      {/* Botão de adicionar ao pedido removido, agora o carrinho é atualizado automaticamente */}
    </div>
  );
};

export default ProductCard;