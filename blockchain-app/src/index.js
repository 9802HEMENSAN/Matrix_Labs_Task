import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
//projectid =  ef3b74b786833f78cefce00b2f4a5452
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
     <ChakraProvider>      
        <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
