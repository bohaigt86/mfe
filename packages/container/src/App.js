import React from 'react';
// marketing is ModuleFederationPlugin's remote key
// MarketingApp is exposed from marketing's ModuleFederationPlugin
import MarketingApp from './components/MarketingApp';

export default () => {
  return (
    <div>
      <h1>Hi there!!!</h1>
      <hr />
      <MarketingApp />
    </div>
  );
};
