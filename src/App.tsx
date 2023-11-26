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
  {Cards('project 1')}
  {Cards('project 2')}
  {Cards('project 3')}
  {Cards('project 4')}
 
  </div>
  <Content/>
  
  
  </>
}

export default App;
