import React from 'react';

import star from './images/star.png'

function BodyContent(props){
    // console.log(props);
    // console.log(props.stats)
    return(
        <div className='card'>
            { props.openSpots === 0 && <div className="card-badge">SOLD OUT</div> }
            <img src={props.img} alt='sport-1' className='card-image'></img>
            <div className='card-rating'>
              <img src={star} alt='star' className='star-card-image'></img>
              <span>{props.stats.rating}</span>
              <span>({props.stats.reviewCount}) • </span>
              <span>{props.location}</span>
            </div>
            <p className='card-title'>{props.title}</p>
            <p className='card-price'>from ${props.price}</p>
        </div>
    )
}

export default BodyContent;