// ✅ DO NOT include BrowserRouter here again
import React from 'react';
import './App.css'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Signup from './components/account/Signup';
import Login from './components/account/Login';
import Reset from './components/account/Reset';
import Content from './components/Content';
import Todolist from './components/Todolist';
import Passreset from './components/Passreset';
import Posts from './components/Posts';
import About from './components/About';
import Imagegenerator from './components/Imagegenerator';
import Weather from './components/Weather';
import Expense from './components/Expense';
import Typing from './components/Typing';


const App = () => {
  return (
    <div className="app-wrapper">
  <Header />
  <main className="main-content">
    <Routes>
      <Route path="/" element={<Content />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset" element={<Reset />} />
      <Route path="/todolist" element={<Todolist/>}/>
      <Route path="/passreset" element={<Passreset/>}/>
      <Route path="/post" element={<Posts/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/aiimage" element={<Imagegenerator/>}/>
      <Route path="/weather" element={<Weather/>}/>
      <Route path="/expense" element={<Expense/>}/>
      <Route path="/typing" element={<Typing/>}/>
    </Routes>
  </main>
  <Footer />
</div>

  );
};

export default App;
