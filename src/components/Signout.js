import React from 'react';

const Signout = ({ onRouteChange, isSignedIn }) =>{
		if(isSignedIn){
			return(
				<div className='tr pr3-l pt3-l'>
					<a href="" onClick={() => onRouteChange('signin')} className='no-underline white'>Sign Out</a>
				</div>
			);
		}
		else{
			return( <div></div> );
		}
}

export default Signout;