import React from 'react';
import ProductCard from './ProductCard';
import type { ProductType } from '../types';
import './ProductCarousel.css';

interface ProductCarouselProps {
  products: ProductType[];
  onAddToCart: (product: ProductType, quantity: number) => void;
}

const VISIBLE_COUNT = 3;

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products, onAddToCart }) => {
  const visibleProducts = products.slice(0, VISIBLE_COUNT);


  return (
    <div className="carousel-container">
      <div className="carousel-list">
        {visibleProducts.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
