import React,{Component} from 'react';
import {Pagination} from 'react-bootstrap'

export default class CarImage extends Component {
render(){
  return(
<div>

<div style={{paddingTop:'202px'}}>
<div className="row">
    <div>
      <div className="col-sm-6 col-md-4">
       <div className="thumbnail img-responsive">
         <div style={{position:'absolute',top:'2%',right:'2%'}} className="compponents-bookmark">
           <heart></heart>
         </div>
       <img style={{height:"200px"}} src="http://www.drivespark.com/images/2017-04/2017-mercedes-amg-s-63-exterior-14.jpg" alt="" />
       <div className="caption">
       <h3>BENZ Q8</h3>
       <p style={{fontSize:"12px"}}><button  className="btn btn-default btn-xs">2008</button> 1,00,000 kms - karumathampatti</p>
       <p><a  style={{background:'#2fb9b8'}} href="#" className="btn btn-primary" role="button">Clean History</a></p>
     </div>
   </div>
 </div>
</div>

<div>
  <div className="col-sm-6 col-md-4">
   <div className="thumbnail img-responsive">
   <img style={{height:"200px"}} src="http://www.drivespark.com/images/2017-05/range-rover-evoque-landmark-special-edition-exterior-2.jpg" alt="..." />
   <div className="caption">
   <h3>Land Rover</h3>
   <p style={{fontSize:"12px"}}><button  className="btn btn-default btn-xs">2012</button> 1,00,000 kms - pptpirivu</p>
   <p><a  style={{background:'#2fb9b8'}} href="#" className="btn btn-primary" role="button">Clean History</a></p>
 </div>
</div>
</div>
</div>

<div>
  <div className="col-sm-6 col-md-4">
   <div className="thumbnail img-responsive">
   <img style={{height:"200px"}} src="https://drop.ndtv.com/albums/AUTO/mercedes-amg_gt_c/thumb_640x480.jpg" alt="..." />
   <div className="caption">
   <h3>BMW ah!</h3>
   <p style={{fontSize:"12px"}}><button  className="btn btn-default btn-xs">2014</button>1,00,000 kms - Chennai</p>
   <p><a  style={{background:'#2fb9b8'}} href="#" className="btn btn-primary" role="button">Clean History</a></p>
 </div>
</div>
</div>
</div>
</div>

<div className="row">
    <div>
      <div className="col-sm-6 col-md-4">
       <div className="thumbnail img-responsive">
       <img style={{height:"200px"}} src="http://www.drivespark.com/images/2017-04/2017-mercedes-amg-s-63-exterior-14.jpg" alt="" />
       <div className="caption">
       <h3>BENZ Q8</h3>
       <p style={{fontSize:"12px"}}><button  className="btn btn-default btn-xs">2008</button> 1,00,000 kms - karumathampatti</p>
       <p><a  style={{background:'#2fb9b8'}} href="#" className="btn btn-primary" role="button">Clean History</a></p>
     </div>
   </div>
 </div>
</div>

<div>
  <div className="col-sm-6 col-md-4">
   <div className="thumbnail img-responsive">
   <img style={{height:"200px"}} src="http://www.drivespark.com/images/2017-05/range-rover-evoque-landmark-special-edition-exterior-2.jpg" alt="..." />
   <div className="caption">
   <h3>Land Rover</h3>
   <p style={{fontSize:"12px"}}><button  className="btn btn-default btn-xs">2012</button> 1,00,000 kms - pptpirivu</p>
   <p><a  style={{background:'#2fb9b8'}} href="#" className="btn btn-primary" role="button">Clean History</a></p>
 </div>
</div>
</div>
</div>

<div>
  <div className="col-sm-6 col-md-4">
   <div className="thumbnail img-responsive">
   <img style={{height:"200px"}} src="https://drop.ndtv.com/albums/AUTO/mercedes-amg_gt_c/thumb_640x480.jpg" alt="..." />
   <div className="caption">
   <h3>BMW ah!</h3>
   <p style={{fontSize:"12px"}}><button className="btn btn-default btn-xs">2014</button>1,00,000 kms - Chennai</p>
   <p><a href="#"  style={{background:'#2fb9b8'}} className="btn btn-primary" role="button">Clean History</a></p>
 </div>
</div>
</div>
</div>
</div>
</div>

<nav ariaLabel="Page navigation">
  <ul className="pagination">
    <li>
      <a href="#" ariaLabel="Previous">
        <span ariaHidden="true">Previous</span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li>
      <a href="#" ariaLabel="Next">
        <span ariaHidden="true">Next</span>
      </a>
    </li>
  </ul>
</nav>
<br></br>
</div>

)
}


}
