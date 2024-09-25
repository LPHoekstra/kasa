import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./styles/main.scss"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Error from "./components/Error"
import Home from "./pages/Home"
import Lodging from "./pages/Lodging"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/logement/:id" element={<Lodging />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
