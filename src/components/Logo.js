import React, { Component } from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import logo from './logo1.png'

const Logo = () =>
{
	return(
		<div className='ma4 center'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
				<div className="Tilt-inner pa3"> <img alt='logo' src={logo} style={{paddingTop: '1px'}} /> </div>
			</Tilt>
		</div>
	);
}

export default Logo;