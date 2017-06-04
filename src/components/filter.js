import React,{Component} from 'react';
import Toggle from 'react-toggle-display';
import {Navbar} from 'react-bootstrap'

export default class Filter extends Component{
  state = {
    active:'Hide filter'
  }
  render(){
    return(
      <div>

<div style={{}}>

<buttton  onClick={()=>{
  const b = document.querySelector("#baskar")
          if (b.style.display === 'block') {
              b.style.display = 'none';
              var h = "Show Filter";
              this.setState({active:h})
            }else{
                  b.style.display = 'block';
                  var h = "Hide Filter";
                  this.setState({active:h})
                }


}} style={{marginLeft:'5px',
           color:'#fcfffd',paddingBottom:'25px',
           paddingTop:'0px',backgroundColor:'#35d097',
           height:'13px',
           marginTop:"-35px"}}
                className="hidden-lg btn btn-lg col-xs-12"
                type="submit">
        <span  style={{fontSize:'15px'}}>{this.state.active}</span>
      </buttton>

        <div
          style={{background:"#fff",
                  paddingTop:0,
                  marginLeft: "16px",
                  paddingLeft: '2px'
                  }}
          id="baskar" className="hidden-lg col-md-12">
        <div >
        <form className="pv3 pa1 bg-white " >
          <div className="mt3 row">
            <div className="col-xs-8">
              <span className="headline-2 text-strong ml2 glyphicon glyphicon-filter" style={{marginTop:8}}>
                 Filter
              </span>
            </div>
            <div className="col-xs-4" style={{marginTop:8}}><h5 className="text-blue pull-right pr2 text-strong">
              <strong>Clear</strong></h5>
          </div>
        </div>
        <div className="row"><div className="col-xs-12">
          <hr className="mh2" style={{marginTop: "0.75rem", marginBottom: "0.75rem"}} />
                </div>
                </div>
                <div className="col-md-12 col-sm-6 col-xs-12">
                  <div id="make-model" className="form-group">
                    <label className="col-xs-12 control-label">Make and Model</label>
                    <div style={{marginBottom: "10px"}} className="col-xs-12">
                      <select className="mb2 form-control">
                        <option value="placeholder" disabled="" >Make</option>
                      </select>
                    </div>
                    <div className="col-xs-12">
                      <select className="mb2 form-control">
                        <option value="placeholder" disabled="">Model</option>
                      </select>
                    </div>

                  </div>
                </div>
                <div>
                  <div>
                    <div className="col-xs-12">
                    </div>
                    <div className="row">
                      <div className="col-xs-12">
                        <hr className="mh2" style={{marginTop: "0.75rem", marginBottom: "0.75rem"}} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-sm-6 col-xs-12">
                  <div className="row"><div className="col-xs-12">
                    <div id="max-min-price" className="form-group">
                      <label className="col-xs-12 control-label">Price</label>
                      <div><div className="col-min col-xs-6">
                        <select className="min form-control">
                          <option disabled="" value="placeholder">Min</option>
                          <option value="0">$0</option>
                          <option value="1000">$1,000</option>
                          <option value="2000">$2,000</option>
                        </select></div><div className="col-max col-xs-6">
                          <select className="max form-control">
                          <option disabled="" value="placeholder">Max</option>
                        <option value="0">$0</option>
                        <option value="1000">$1,000</option>
                        <option value="2000">$2,000</option>
                        <option value="3000">$3,000</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row"><div className="col-xs-12">
            <hr className="mh2" style={{marginTop: "0.75rem", marginBottom: "0.75rem"}} />
          </div>
        </div>
        <div className="col-md-12 col-sm-6 col-xs-12">
          <div className="row">
            <div className="col-xs-12">
              <div id="max-min-mileage" className="form-group">
                <label className="col-xs-12 control-label">Mileage</label>
                <div>
                  <div className="col-min col-xs-6">
                    <select className="min form-control">
                    <option disabled="" value="placeholder">Min</option>
                      <option value="0">0 miles</option>
                      <option value="25000">25,000 miles</option>
                    </select>
                  </div>
                  <div className="col-max col-xs-6">
                    <select className="max form-control">
                      <option disabled="" value="placeholder">Max</option>
                    <option value="0">0 miles</option>
                    <option value="25000">25,000 miles</option>
                  </select>
                </div>
              </div>
            </div>
          </div></div>
        </div>
        <div>
        <div className="row"><div className="col-xs-12">
          <hr className="mh2" style={{marginTop: "0.75rem", marginBottom: "0.75rem"}} />
        </div>
      </div>
    </div>
        <div className="col-md-12 col-sm-6 col-xs-12">
          <div className="row"><div className="col-xs-12">
            <div id="max-min-year" className="form-group">
              <label className="col-xs-12 control-label">Year</label>
              <div>
                <div className="col-min col-xs-6">
                  <select className="min form-control">
                    <option disabled="" value="placeholder">Min</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                </select></div>
                <div className="col-max col-xs-6">
                  <select className="max form-control">
                    <option disabled="" value="placeholder">Max</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row"><div className="col-xs-12">
    <hr className="mh2" style={{marginTop: "0.75rem", marginBottom: "0.75rem"}} />
  </div></div>
  <div className="col-xs-12"><div className="form-group">
    <div className="col-md-12 col-xs-6">
      <label className="control-label">Features</label>
      <select placeholder="placeholder" className="form-control">
        <option disabled="" value="placeholder">Add Feature</option>
              <option value="AM/FM radio">AM/FM radio</option>
              <option value="AUX port">AUX port</option>
            </select></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <hr className="mh2" style={{marginTop: "0.75rem", marginBottom: "0.75rem"}} />
          </div>
        </div>
        <div className="col-xs-12"><div className="col-md-12 col-xs-6">
          <div className="button-group">
            <label className="control-label">Transmission</label>
            <checkbox className="">
              <div id="transmissions" dataToggle="buttons" className="btn-group btn-group-justified">
                <label type="button" className="capitalize btn btn-default">AMT</label>
                <label type="button" className="capitalize btn btn-default">MAN</label>
              </div>
            </checkbox>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <hr className="mh2" style={{marginTop: "0.75rem", marginBottom: "0.75rem"}} />
        </div>
      </div>
      <div className="col-xs-12">
        <div className="form-group">
          <div className="col-md-12 col-xs-6">
            <label className="control-label">Categories</label>
            <select placeholder="placeholder" className="form-control">
              <option disabled="" value="placeholder">Add Category</option>
            <option value="Convertibles">Convertibles</option>
            <option value="Coupes">Coupes</option>
          </select>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12">
        <hr className="mh2" style={{marginTop: "0.75rem", marginBottom: "0.75rem"}} />
      </div>
    </div>
  </form>
  </div>
  </div>
        </div>


      <div className="visible-lg col-md-3">
      <div style={{background:"#fff", marginLeft: "16px", paddingLeft: '2px'}}>
      <form className="pv3 pa1 bg-white " >
        <div className="mt3 row">
          <div className="col-xs-8">
            <span className="headline-2 text-strong ml2 glyphicon glyphicon-filter" style={{marginTop:8}}>
               Filter
            </span>
          </div>
          <div className="col-xs-4" style={{marginTop:8}}><p className="text-blue pull-right pr2 text-strong">Clear</p>
        </div>
      </div>
      <div className="row"><div className="col-xs-12">
        <hr className="mh2" style={{marginTop: "0.75rem", marginBottom: "0.75rem"}} />
              </div>
              </div>
              <div className="col-md-12 col-sm-6 col-xs-12">
                <div id="make-model" className="form-group">
                  <label className="col-xs-12 control-label">Make and Model</label>
                  <div style={{marginBottom: "10px"}} className="col-xs-12">
                    <select className="mb2 form-control">
                      <option value="placeholder" disabled="" >Make</option>
                    </select>
                  </div>
                  <div className="col-xs-12">
                    <select className="mb2 form-control">
                      <option value="placeholder" disabled="">Model</option>
                    </select>
                  </div>

                </div>
              </div>
              <div>
                <div>
                  <div className="col-xs-12">
                  </div>
                  <div className="row">
                    <div className="col-xs-12">
                      <hr className="mh2" style={{marginTop: "0.75rem", marginBottom: "0.75rem"}} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-sm-6 col-xs-12">
                <div className="row"><div className="col-xs-12">
                  <div id="max-min-price" className="form-group">
                    <label className="col-xs-12 control-label">Price</label>
                    <div><div className="col-min col-xs-6">
                      <select className="min form-control">
                        <option disabled="" value="placeholder">Min</option>
                        <option value="0">$0</option>
                        <option value="1000">$1,000</option>
                        <option value="2000">$2,000</option>
                      </select></div><div className="col-max col-xs-6">
                        <select className="max form-control">
                        <option disabled="" value="placeholder">Max</option>
                      <option value="0">$0</option>
                      <option value="1000">$1,000</option>
                      <option value="2000">$2,000</option>
                      <option value="3000">$3,000</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row"><div className="col-xs-12">
          <hr className="mh2" style={{marginTop: "0.75rem", marginBottom: "0.75rem"}} />
        </div>
      </div>
      <div className="col-md-12 col-sm-6 col-xs-12">
        <div className="row">
          <div className="col-xs-12">
            <div id="max-min-mileage" className="form-group">
              <label className="col-xs-12 control-label">Mileage</label>
              <div>
                <div className="col-min col-xs-6">
                  <select className="min form-control">
                  <option disabled="" value="placeholder">Min</option>
                    <option value="0">0 miles</option>
                    <option value="25000">25,000 miles</option>
                  </select>
                </div>
                <div className="col-max col-xs-6">
                  <select className="max form-control">
                    <option disabled="" value="placeholder">Max</option>
                  <option value="0">0 miles</option>
                  <option value="25000">25,000 miles</option>
                </select>
              </div>
            </div>
          </div>
        </div></div>
      </div>
      <div>
      <div className="row"><div className="col-xs-12">
        <hr className="mh2" style={{marginTop: "0.75rem", marginBottom: "0.75rem"}} />
      </div>
    </div>
  </div>
      <div className="col-md-12 col-sm-6 col-xs-12">
        <div className="row"><div className="col-xs-12">
          <div id="max-min-year" className="form-group">
            <label className="col-xs-12 control-label">Year</label>
            <div>
              <div className="col-min col-xs-6">
                <select className="min form-control">
                  <option disabled="" value="placeholder">Min</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
              </select></div>
              <div className="col-max col-xs-6">
                <select className="max form-control">
                  <option disabled="" value="placeholder">Max</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="row"><div className="col-xs-12">
  <hr className="mh2" style={{marginTop: "0.75rem", marginBottom: "0.75rem"}} />
</div></div>
<div className="col-xs-12"><div className="form-group">
  <div className="col-md-12 col-xs-6">
    <label className="control-label">Features</label>
    <select placeholder="placeholder" className="form-control">
      <option disabled="" value="placeholder">Add Feature</option>
            <option value="AM/FM radio">AM/FM radio</option>
            <option value="AUX port">AUX port</option>
          </select></div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <hr className="mh2" style={{marginTop: "0.75rem", marginBottom: "0.75rem"}} />
        </div>
      </div>
      <div className="col-xs-12"><div className="col-md-12 col-xs-6">
        <div className="button-group">
          <label className="control-label">Transmission</label>
          <checkbox className="">
            <div id="transmissions" dataToggle="buttons" className="btn-group btn-group-justified">
              <label type="button" className="capitalize btn btn-default">automatic</label>
              <label type="button" className="capitalize btn btn-default">manual</label>
            </div>
          </checkbox>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12">
        <hr className="mh2" style={{marginTop: "0.75rem", marginBottom: "0.75rem"}} />
      </div>
    </div>
    <div className="col-xs-12">
      <div className="form-group">
        <div className="col-md-12 col-xs-6">
          <label className="control-label">Categories</label>
          <select placeholder="placeholder" className="form-control">
            <option disabled="" value="placeholder">Add Category</option>
          <option value="Convertibles">Convertibles</option>
          <option value="Coupes">Coupes</option>
        </select>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-xs-12">
      <hr className="mh2" style={{marginTop: "0.75rem", marginBottom: "0.75rem"}} />
    </div>
  </div>
  <buttton
     style={{
             color:'#fcfffd',
             backgroundColor:'#35d097',

             }}
                  className="btn btn-block col-xs-12"
                  type="submit">
          Save Your Search
  </buttton>

</form>
</div>
</div>
</div>
    );
  }
}
