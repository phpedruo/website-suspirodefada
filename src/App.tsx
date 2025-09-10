// src/App.tsx
import { useState } from 'react';
import { products } from './products';
import type { ProductType, CartItemType } from './types'; // Importando nossos tipos
import ProductCarousel from './components/ProductCarousel';
import Cart from './components/Cart.tsx';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  // Tipamos o estado do carrinho. Ele é um array de CartItemType.
  const [cart, setCart] = useState<CartItemType[]>([]);

  // A função recebe um parâmetro do tipo ProductType
  const addToCart = (productToAdd: ProductType, quantity: number) => {
    setCart(currentCart => {
      const existingProduct = currentCart.find(item => item.id === productToAdd.id);
      if (existingProduct) {
        // Atualiza para a nova quantidade (não soma)
        if (quantity === 0) {
          // Remove do carrinho se quantidade for 0
          return currentCart.filter(item => item.id !== productToAdd.id);
        }
        return currentCart.map(item =>
          item.id === productToAdd.id ? { ...item, quantity } : item
        );
      } else {
        // Só adiciona se quantidade > 0
        if (quantity > 0) {
          return [...currentCart, { ...productToAdd, quantity }];
        }
        return currentCart;
      }
    });
  };
  
  const handleFinalizeOrder = () => {
    const numeroWhatsapp = '5581999999999';
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
        <img
          src="/Banner.svg"
          alt="Suspiro de Fada Logo"
          className="logo"
          style={{ width: 200, height: 'auto', transition: 'transform 0.3s' }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        />
        <p>Biscoitos artesanais feitos por encomenda, por quem entende do assunto.</p>
      </header>
      
      <main>
        <h2>Cardápio</h2>
        <ProductCarousel products={products} onAddToCart={addToCart} />
      </main>

      <Cart cart={cart} onFinalizeOrder={handleFinalizeOrder} />

    </div>
  );
}

export default App;
