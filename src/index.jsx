import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Error from "./components/Error"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import "./styles/main.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
