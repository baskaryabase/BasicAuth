import React from 'react';

const NavFoot = ()=> {
  return(
<div className="visible-xs" style={{    position: 'fixed',
    bottom: 0,
    width: '100%',
    right: 0,
    left: 0,
    zIndex: 1030
}}>
    <buttton
       style={{
               color:'#fcfffd',
               backgroundColor:'#35d097',

               }}
                    className="btn btn-block col-xs-12"
                    type="submit">
            Save Your Search
    </buttton>
</div>
  );
}

export default NavFoot;
