import React from 'react';

// import image1 from './images/image1.jpg';
// import image2 from './images/image2.jpg';
// import image3 from './images/image3.jpg';
// import image4 from './images/image4.png';
// import image5 from './images/image5.jpg';
import star from './images/star.png'

function BodyContent(props){
    return(
        <div className='card'>
            <img src={props.img} alt='sport-1' className='card-image'></img>
            <div className='card-rating'>
              <img src={star} alt='star' className='star-card-image'></img>
              <span>{props.rating}</span>
              <span>({props.reviewCount}) </span>
              <span>{props.country}</span>
            </div>
            <p className='card-content'>{props.title}</p>
            <p className='card-price'>from ${props.price}</p>
        </div>
    )
}

export default BodyContent;