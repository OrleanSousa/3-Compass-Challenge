import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'; // Certifique-se de que está utilizando React 18+
import './input.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import {store} from './redux/store.ts'



// Renderizando o aplicativo
ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
  </StrictMode>
);


