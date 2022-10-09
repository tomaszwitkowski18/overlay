import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from 'styled-components'

import './font/stylesheet.css'

import Index from './pages/Index';
import Overlay from './pages/Overlay';
import Panel from './pages/Panel';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

   body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto';
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/overlay" element={<Overlay />} />
        <Route path="/panel" element={<Panel />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

