import './App.css';
import NavBar from './NavBar';
import BodyContent from './BodyContent';
import cardContentData from './BodyContentData';

import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.png';
import image5 from './images/image5.jpg';

function App() {
  const cardContent = cardContentData.map(value => {
      return <BodyContent 
        key = {value.id}
        image = {image1}
        // value = {value}
        // spreading object as props
        {...value}
        
        // stats = {value.stats}
        // location = {value.location}
        // title = {value.title}
        // price= {value.price}   
        // openSpots= {value.openSpots}  
      />
    })
  return (
    <div>
      {/* NavBar Content */}
      <NavBar />
      {/* Body Content */}
      <section className='cards-list'>
        { cardContent }
      </section>
      {/* <BodyContent 
          img = {image1}
          rating = {5}
          reviewCount = {6}
          country = "India"
          title ="Indias Best Cricketer : Virat Kohli"
          price ={158}
      />

      <BodyContent 
          img = {image4} 
          rating = {10}
          reviewCount = {100}
          country = "India"
          title ="The Story of TCS"
          price ={2000}
      />

      <BodyContent 
          img = {image2}
          rating = {5}
          reviewCount = {6}
          country = "India"
          title ="Most Handsome star in Indian Cinema"
          price ={230}
      /> */}
               
    </div>
  );
}

export default App;
