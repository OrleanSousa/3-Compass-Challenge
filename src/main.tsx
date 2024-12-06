import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'; // Certifique-se de que está utilizando React 18+
import './input.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './hooks/useCart.js'; // Certifique-se que o caminho está correto

// Renderizando o aplicativo
ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </CartProvider>
  </StrictMode>
);
