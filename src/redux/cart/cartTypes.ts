// Tipo para representar um item no carrinho
export interface CartItem {
  id: number;  // Modificado para string, se necessário
  price: number;
  quantity: number;
  productName: string;
  image?: string;
  description?: string;
}
  
  // Tipo para o estado completo do carrinho
  export interface CartState {
    items: CartItem[];  // Lista de itens no carrinho
    totalAmount: number; // Valor total dos itens no carrinho
  }
  