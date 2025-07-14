import React from 'react';
import ProductCard from './ProductCard';
import type { ProductType } from '../types';
import './ProductCarousel.css';

interface ProductCarouselProps {
  products: ProductType[];
  onAddToCart: (product: ProductType, quantity: number) => void;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products, onAddToCart }) => {
  return (
    <div className="carousel-container">
      <div className="carousel-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
