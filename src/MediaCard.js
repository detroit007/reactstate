import React from 'react';

import './media.css'

const MediaCard = ({title, body, imageUrl})=>{
	return(
		<div className='mediaCont'>
			<h2>{title}</h2>
			<p>{body}</p>
			<img alt='error loading...' className='mediaImg' src={imageUrl}/>
		</div>
	);
}

export default MediaCard;