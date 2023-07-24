import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Login } from './pages/Login';
import { VendingMachine } from './components/products';
import { NotFound } from './pages/NotFound'

function App() {
  return (
		<BrowserRouter>
	    <Routes>
	      <Route path="/" element={<Login/>} />
	      <Route path="/vending-machine" element={<VendingMachine/>} />
        <Route path="*" element={<NotFound />} />
	    </Routes>
		</BrowserRouter>
  );
}

export default App;
