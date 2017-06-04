import React,{Component} from 'react';

export default class Footer extends Component {
  render(){
    return(
    <div className="container" style={{fontFamily: 'sans-serif',marginBottom:100}}>

  <div>
      <div className="col-md-4 col-xs-12">
        <div className="container" style={{width:"70%"}}>
        <h4>Find Cars From Your Phone</h4>
        <p>Instamotor's free app helps you find used cars for sale directly by the owner.
          Buying and selling a used car has never been safer and easier.
        </p>
        <div className="hidden-xs" style={{position:'relative'}}>
        <input style={{width:'100%',height:'45px'}} type="text" placeholder="phone number"></input>
        <button className="btn" style={{position:'absolute',background:'#37C88D',right:'7px',top:'5px'}}>Send</button>
        </div>

      </div>
      </div>

      <center><div style={{width:'100%'}} className="visible-xs img-responsive">
        <img src="https://kandeshop.com/wp-content/uploads/2016/04/badges-1-300x220.png" />
      </div></center>
      <span style={{lineHeight:'200px'}}></span>

    <div style={{whiteSpace: 'nowrap', lineHeight: '1.42857', cursor: "pointer"}} className="col-md-4 col-xs-6">
                   <h6>INSTAMOTOR</h6>
                   <h6><a href="/">About</a></h6>
                   <h6><a href="/">Trust & Safety</a></h6>
                   <h6><a href="/">Contact Us</a></h6>
                   <h6><a href="/">Blog</a></h6>
                   <h6><a href="/">Press</a></h6>
                   <h6><a href="/">VW Recall Calculator</a></h6>
                   <h6><a href="/">Terms Of Service</a></h6>
                   <h6><a href="/">Privacy Policy</a></h6>
               </div>
               <div style={{whiteSpace: 'nowrap', lineHeight: '1.42857', cursor: "pointer"}} className="col-md-4 col-xs-6">
                   <h6>CARS FOR SALE</h6>
                   <h6><a href="/">Below $10,000</a></h6>
                   <h6><a href="/">Below $20,000</a></h6>
                   <h6><a href="/">Below $40,000</a></h6>
                   <h6><a href="/">Below $50,000</a></h6>
               </div>
</div>
    </div>
    );
  }
}
