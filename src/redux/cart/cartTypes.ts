// Tipo para representar um item no carrinho
export interface CartItem {
    id: string;         // ID único do produto
    name: string;       // Nome do produto
    price: number;      // Preço do produto
    quantity: number;   // Quantidade do produto no carrinho
    image?: string;     // (Opcional) URL da imagem do produto
  }
  
  // Tipo para o estado completo do carrinho
  export interface CartState {
    items: CartItem[];  // Lista de itens no carrinho
    totalAmount: number; // Valor total dos itens no carrinho
  }
  