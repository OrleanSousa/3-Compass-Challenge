import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'; // Certifique-se de que está utilizando React 18+
import './input.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import {store} from './redux/store.ts'
import { ClerkProvider } from '@clerk/clerk-react'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env.local file')
}

// Rendering the application
ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
          <App />
        </ClerkProvider>
        </BrowserRouter>
      </Provider>
  </StrictMode>
);


