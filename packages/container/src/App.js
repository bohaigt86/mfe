import React from 'react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
// marketing is ModuleFederationPlugin's remote key
// MarketingApp is exposed from marketing's ModuleFederationPlugin
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
};
