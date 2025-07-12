// src/products.ts
// src/products.ts
import type { ProductType } from './types';

// O 'ProductType[]' garante que todos os objetos neste array
// sigam a estrutura que definimos em 'types.ts'.
export const products: ProductType[] = [
  { id: 1, name: 'Crocantini de Parmesão', price: 10.00, image: '/assets/parmesao.jpg' },
  { id: 2, name: 'Crocantini de Gergelim', price: 10.00, image: '/assets/gergelim.jpg' },
  { id: 3, name: 'Suspiro de Limão (100g)', price: 10.00, image: '/assets/suspiro.jpg' },
  // Adicione mais produtos aqui
];