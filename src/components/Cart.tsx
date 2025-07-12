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
    <aside className="cart">
      <h2>Seu Pedido</h2>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                <span>{item.quantity}x {item.name}</span>
                <span>R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <strong>Total:</strong>
            <strong>R$ {total.toFixed(2).replace('.', ',')}</strong>
          </div>
        </>
      )}
      <button onClick={onFinalizeOrder} disabled={cart.length === 0}>
        Finalizar Pedido no WhatsApp
      </button>
    </aside>
  );
};

export default Cart;