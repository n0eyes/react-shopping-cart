import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/GlobalStyles';
import App from './App';
import { RecoilRoot } from 'recoil';

(async () => {
  const { worker } = await import('./mocks/browser');
  if (window.location.pathname === '/react-shopping-cart') {
    window.location.pathname = '/react-shopping-cart/';
    return;
  }

  if (process.env.NODE_ENV === 'development') {
    await worker.start();
  } else {
    await worker.start({
      serviceWorker: {
        url: '/react-shopping-cart/mockServiceWorker.js',
      },
    });
  }

  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <RecoilRoot>
        <GlobalStyles />
        <App />
      </RecoilRoot>
    </React.StrictMode>
  );
})();
