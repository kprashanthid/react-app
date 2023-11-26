import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Cards from './Cards';
import Content from './Content';


function App() {
  return <>
  
  <Header/>
  <div className='card-flex'>
  <Cards/>
  <Cards/>
  <Cards/>
  <Cards/>
  <Cards/>
  </div>
  <Content/>
  
  </>
}

export default App;
