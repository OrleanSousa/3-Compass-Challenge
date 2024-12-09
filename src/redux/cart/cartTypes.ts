// Type to represent an item in the cart
export interface CartItem {
  id: number; 
  price: number;
  quantity: number;
  productName: string;
  image?: string;
  description?: string;
  
}
  
  // Type for cart complete state
  export interface CartState {
    items: CartItem[];  // List of items in cart
    totalAmount: number; //Total value of items in cart
  }
  