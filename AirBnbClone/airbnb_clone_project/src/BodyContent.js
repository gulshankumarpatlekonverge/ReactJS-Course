import React from 'react';

import star from './images/star.png'

function BodyContent(props){
    console.log(props)
    let badgeText;
    if(props.openSpots === 0){
        badgeText = "SOLD OUT"
    }
    else if(props.location === "Online"){
        badgeText = "ONLINE";
    }
    // else{
    //     badgeText = props.location;
    // }
    return(
        <div className='card'>
            { badgeText && <div className="card-badge">{badgeText}</div> }
            <img src={props.image} alt='sport-1' className='card-image'></img>
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