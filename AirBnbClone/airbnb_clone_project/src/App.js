import airbnbLogo from './airbnb.webp';
import science from './images/science.jpg';
import computer from './images/computer.jpg';
import media from './images/media.jpg';
import nature from './images/nature.jpg';
import politics from './images/politics.jpg';
import singing from './images/singing.jpg';
import sports from './images/sports.jpg'
import travel from './images/travel.jpg'
import galexy from './images/galexy.jpg'
import book from './images/book.jpg'
import animal from './images/animal.jpg'

import './App.css';

function App() {
  return (
    <div>
      {/* NavBar Component */}
        <header className='header-item'>
          <img src={airbnbLogo} alt='AirBnBLogo' className='img-logo-item'></img>
        </header>
        <div className='galary-item'>
          <div className="img-first-last-div">
            <img className='img-item-size' src={science} alt='img'></img>
          </div>
          <div className='img-middle-div'>
            <img className='img-item-size' src={computer} alt='img'></img>
            <img className='img-item-size' src={singing} alt='img'></img>
          </div>
          <div>
            <img className='img-item-size' src={media} alt='img'></img>
            <img className='img-item-size' src={travel} alt='img'></img>
          </div>
          <div className='img-middle-div'> 
            <img className='img-item-size' src={sports} alt='img'></img>
            <img className='img-item-size' src={nature} alt='img'></img>
          </div>
          <div> 
            <img className='img-item-size' src={galexy} alt='img'></img>
            <img className='img-item-size' src={book} alt='img'></img>
          </div>
          <div className="img-first-last-div">
            <img className='img-item-size' src={politics} alt='img'></img>
            <img className='img-item-size' src={animal} alt='img'></img>
          </div> 
        </div>

    {/* Body Content */}
       <div className='body-div'>
          <h1 className='headingOne-item'>Online Experiences</h1>
          <p className='paragraph-headingOne-item'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
          </p>
        </div>

        <div className='body-div body-div-content'>
          <div>
            <img src={science} alt='sport-1'></img>
            <p><span>Ratings</span>Image Content<span>prices $150</span></p>
          </div>
        </div>       
    </div>
  );
}

export default App;
