// import React from 'react';
// import { useState } from "react";
// import { Route, Routes } from "react-router-dom";

import NavBar from './Components/NavBar';
import Router from './Components/Router';
import Footer from './Components/Footer';

import Logo from './assets/Soundo.svg';

function App() {
  return (
      <div className="font-absans text-text bg-background min-h-screen">
        <NavBar />
        <body>
        <Router />
        </body>
        <Footer />
        <img
        src={Logo}
        alt="Logo"
        className="absolute bottom-0 right-0 transform translate-x-1/4 -translate-y-1/4 w-50 opacity-100"
      />
      </div>
  );
}

export default App;