// src/types.ts

// Descreve como é um produto no nosso cardápio
export interface ProductType {
  id: number;
  name: string;
  price: number;
  image: string;
}

// Descreve como é um item dentro do carrinho de compras
// É um produto, mais a sua quantidade
export interface CartItemType extends ProductType {
  quantity: number;
}