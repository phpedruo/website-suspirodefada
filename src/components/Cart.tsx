// src/components/Cart.tsx
import React from 'react';
import type { CartItemType } from '../types';
import './Cart.css';

// Tipando as props do carrinho
interface CartProps {
  cart: CartItemType[];
  onFinalizeOrder: () => void;
}

const Cart: React.FC<CartProps> = ({ cart, onFinalizeOrder }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <aside className="cart-container">
      <h2 className="cart-title">Seu Pedido</h2>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map(item => (
              <li key={item.id} className="cart-item">
                <span className="cart-item-name">{item.quantity}x {item.name}</span>
                <span className="cart-item-qty">R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <strong>Total:</strong>
            <strong>R$ {total.toFixed(2).replace('.', ',')}</strong>
          </div>
        </>
      )}
      <button className="whatsapp-btn" onClick={onFinalizeOrder} disabled={cart.length === 0}>
        Finalizar Pedido no WhatsApp
      </button>
    </aside>
  );
};

export default Cart;