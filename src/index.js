import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <DAppProvider config={ config }>
            <App />
        </DAppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
