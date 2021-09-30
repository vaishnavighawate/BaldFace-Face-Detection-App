import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imgUrl, boxes }) =>{
	return(
		<div className='center ma'>
			<div className="absolute mt2">
				<img id='input_image' alt='' src={imgUrl} width='400px' height='auto' />
				{
					boxes.map((box, i) => {
						const {topRow, rightCol, bottomRow, leftCol} = box
						return(<div key={i} className='boundingBox' style={{top:box.topRow, right:box.rightCol, bottom:box.bottomRow, left:box.leftCol}}></div>)
					})
				
				}
			</div>
		</div>
	);
}

export default FaceRecognition;