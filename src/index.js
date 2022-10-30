import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from 'styled-components'

import './font/stylesheet.css'

import Index from './pages/Index';
import Overlay from './pages/Overlay';
import Panel from './pages/Panel';
import StartMatch from './pages/StartMatch';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

   body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto';
  }
  
   #root {
  font-size: 30px;
  font-weight: 800;
  color: black;
  padding: 0 20px 20px;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  gap: 2rem;
  font-family: 'Roboto';
  height:100vh;
   }
  #root.id {
	background-image: url(/images/court.svg);
    background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	height: 100vh;
	background-color: #61995e;
 }
 
  #root a  {
  width: auto;
  display: flex;
  color: black;
  text-decoration: none;
  justify-content: center;
  background: white;
  width: auto;
  margin: 0 auto;
  padding: 1rem 2rem;
 }
 
  #root a:hover  {
  color: white;
  background: black;
  text-decoration: none;
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
        <Route path="/start-match" element={<StartMatch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

