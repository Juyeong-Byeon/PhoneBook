import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { hot } from 'react-hot-loader';
import Contact from './Contact';

class App extends React.Component{
  
  
    

  

  render(){
    let style={fontSize:'5em',backgroundColor:'royalblue' ,color:'white'};
    return (
    <div>
    <div style={style}>hello!</div>
    <div>
      <Contact/>
    </div>
    </div>
      );
  }
}


export default hot(module)(App);