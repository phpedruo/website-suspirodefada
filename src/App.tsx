// src/App.tsx
import { useState } from 'react';
import { products } from './products';
import type { ProductType, CartItemType } from './types'; // Importando nossos tipos
 // Importando nossos tipos
import ProductCard from './components/ProductCard';
import Cart from './components/Cart.tsx';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  // Tipamos o estado do carrinho. Ele é um array de CartItemType.
  const [cart, setCart] = useState<CartItemType[]>([]);

  // A função recebe um parâmetro do tipo ProductType
  const addToCart = (productToAdd: ProductType) => {
    setCart(currentCart => {
      const existingProduct = currentCart.find(item => item.id === productToAdd.id);
      if (existingProduct) {
        return currentCart.map(item =>
          item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...currentCart, { ...productToAdd, quantity: 1 }];
      }
    });
  };
  
  const handleFinalizeOrder = () => {
    const numeroWhatsapp = '5581999999999'; // <-- TROCAR PELO WHATSAPP DA SUA MÃE
    if (cart.length === 0) {
      alert("Seu carrinho está vazio!");
      return;
    }

    let message = "Olá, Suspiro de Fada! Gostaria de fazer o seguinte pedido:\n\n";
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    cart.forEach(item => {
      message += `${item.quantity}x - ${item.name}\n`;
    });

    message += `\n*Total do Pedido: R$ ${total.toFixed(2).replace('.', ',')}*`;

    const whatsappUrl = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="App">
      <Navbar />
      <header className="app-header">
        <h1>Suspiro de Fada</h1>
        <p>Biscoitos artesanais feitos por encomenda.</p>
      </header>
      
      <main>
        <h2>Nosso Cardápio</h2>
        <div className="product-list">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={addToCart} 
            />
          ))}
        </div>
      </main>

      <Cart cart={cart} onFinalizeOrder={handleFinalizeOrder} />

      <footer>
        <p style={{color: 'var(--cor-secundaria)'}}>Suspiro de Fada &copy; 2025</p>
      </footer>
    </div>
  );
}

export default App;