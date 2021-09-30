import React, { Component } from 'react';
import './Detect.css'

const Detect = ({ onInputChange, onDetect }) =>
{
	return(
		<div className='center'>
			<div className='pattern center pa4 br3 shadow-5 mw8'>
				<input type='text' className='f3 w-80 mr2 br3 justify-center' onChange={onInputChange}/>
				<button type='submit' value='detect' className='grow f5 w-20 br3 bg-dark-gray white' onClick={onDetect}>Detect</button>
			</div>
		</div>
	);
}

export default Detect;