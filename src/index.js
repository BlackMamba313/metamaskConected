import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {DAppProvider, Goerli, Mainnet} from "@usedapp/core";
import { getDefaultProvider } from 'ethers'


const config = {
    readOnlyChainId: Mainnet.chainId,
    readOnlyUrls: {
        [Mainnet.chainId]: getDefaultProvider('mainnet'),
        [Goerli.chainId]: getDefaultProvider('goerli'),
    },
}

ReactDOM.render(
  <React.StrictMode>
      <DAppProvider config={ config }>
          <div>sdfasdfasdfasdfasdfasdfasd</div>
         <App />
      </DAppProvider>
  </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
