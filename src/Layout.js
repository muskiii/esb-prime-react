import React, { Component } from 'react';
import NavBar from './NavBar'; 
import Header from './Header'; 
import Sec1 from './Sec1'; 
import Sec2 from './Sec2'; 
import Sec3 from './Sec3'; 
import Aside from './Aside.js'; 
import Sec4 from './Sec4';

export default class Layout extends Component {
  render() {
    return (
      <div>
      <NavBar/>
      <Header/>
      <Sec1/>
      <Sec2/>
      <Sec3/>
      <Aside/>
      <Sec4/>
      </div>
      ); 
  }
} 
