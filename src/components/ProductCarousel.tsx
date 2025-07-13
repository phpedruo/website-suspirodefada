import React, { useState } from 'react';
import ProductCard from './ProductCard';
import type { ProductType } from '../types';
import './ProductCarousel.css';

interface ProductCarouselProps {
  products: ProductType[];
  onAddToCart: (product: ProductType, quantity: number) => void;
}

const VISIBLE_COUNT = 3;

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products, onAddToCart }) => {
  const [startIndex, setStartIndex] = useState(0);
  const endIndex = Math.min(startIndex + VISIBLE_COUNT, products.length);
  const visibleProducts = products.slice(startIndex, endIndex);

  const handlePrev = () => {
    setStartIndex(prev => Math.max(prev - VISIBLE_COUNT, 0));
  };

  const handleNext = () => {
    setStartIndex(prev =>
      Math.min(prev + VISIBLE_COUNT, products.length - VISIBLE_COUNT)
    );
  };

  return (
    <div className="carousel-container">
      <button onClick={handlePrev} disabled={startIndex === 0} className="carousel-btn">&#8592;</button>
      <div className="carousel-list">
        {visibleProducts.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
      <button onClick={handleNext} disabled={endIndex >= products.length} className="carousel-btn">&#8594;</button>
    </div>
  );
};

export default ProductCarousel;
