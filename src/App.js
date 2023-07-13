import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Calculator from './Components/calculator';
import Quote from './Components/Quotes';
import Footer from './Components/footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/Quotes" element={<Quote />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
