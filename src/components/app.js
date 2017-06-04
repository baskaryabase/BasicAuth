import React, { Component } from 'react';
import NavHead from './NavHead';
import Filter from './filter';
import CarList from './CarList';
import NavFoot from './navfoot';
import Footer from './footer';


export default class App extends Component {
  render() {
    return (
      <div className="app-container" style={{width:"100%"}}>
          <NavHead />
          <Filter />
          <CarList />
          <Footer style={{background:'#e2e2e0'}} />
          <NavFoot />
      </div>
    );
  }
}
