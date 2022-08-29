import React from 'react';

import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.png';
import image5 from './images/image5.jpg';
import star from './images/star.png'

function BodyContent(){
    return(
        <div className='card'>
          <div>
            <img src={image1} alt='sport-1' className='card-image'></img>
            <div className='card-rating'>
              <img src={star} alt='star' className='star-card-image'></img>
              <span>5.0</span>
              <span>(6)</span>
              <span>USA</span>
            </div>
            <p className='card-content'>Image Content</p>
            <p className='card-price'>prices $150</p>
          </div>
        </div>
    )
}

export default BodyContent;