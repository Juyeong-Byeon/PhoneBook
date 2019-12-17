import React,{Component} from 'react';
import './App.css';
import { hot } from 'react-hot-loader';
import Contact from './Contact';
import ContactCreate from './ContactCreate';

class App extends React.Component{
  
  render(){
    let style={fontSize:'5em',backgroundColor:'royalblue' ,color:'white'};
    return (
    <div>
    <div class='App-header '>Phone Book</div>
    <div>
      <Contact />
    </div>
   
    </div>
      );
  }
}


export default hot(module)(App);