import React,{Component} from 'react';

export default class Footer extends Component {
  render(){
    return(
    <div style={{marginTop:500}}>
      <div className="col-md-5">
        <div className="container" style={{width:"70%"}}>
        <h4>Find Cars From Your Phone</h4>
        <p>Instamotor's free app helps you find used cars for sale directly by the owner.
          Buying and selling a used car has never been safer and easier.
        </p>
        <input style={{width:'100%'}} type="text" placeholder="phone number"></input>
      </div>
      </div>
      <span style={{lineHeight:'200px'}}></span>
    <div className="col-md-6">
      <ul className="Column">
        <a className="row">Buying</a>
        <a className="row">Sell</a>
        <a className="row">About US</a>
        <a className="row">Queries</a>
        <a className="row">Contact Us </a>
        <a className="row">Blog</a>
      </ul>
    </div>
    </div>
    );
  }
}
