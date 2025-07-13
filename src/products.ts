// src/products.ts
// src/products.ts
import type { ProductType } from './types';

// O 'ProductType[]' garante que todos os objetos neste array
// sigam a estrutura que definimos em 'types.ts'.
export const products: ProductType[] = [
  { id: 1, name: 'Crocantini de Ninho 100g', price: 10.90, image: '/ninho.jpeg' },
  { id: 2, name: 'Crocantini de Amendoim 100g', price: 10.90, image: '/amendoim.jpeg' },
  { id: 3, name: 'Crocantini de Maracujá 100g', price: 10.90, image: '/maracuja.jpeg' },
  // Adicione mais produtos aqui
];