import React from 'react';

import star from './images/star.png'

function BodyContent(props){
    let badgeText;
    if(props.value.openSpots === 0){
        badgeText = "SOLD OUT"
    }
    else if(props.value.location === "Online"){
        badgeText = "ONLINE";
    }
    return(
        <div className='card'>
            { badgeText && <div className="card-badge">{badgeText}</div> }
            <img src={props.img} alt='sport-1' className='card-image'></img>
            <div className='card-rating'>
              <img src={star} alt='star' className='star-card-image'></img>
              <span>{props.value.stats.rating}</span>
              <span>({props.value.stats.reviewCount}) • </span>
              <span>{props.value.location}</span>
            </div>
            <p className='card-title'>{props.value.title}</p>
            <p className='card-price'>from ${props.value.price}</p>
        </div>
    )
}

export default BodyContent;