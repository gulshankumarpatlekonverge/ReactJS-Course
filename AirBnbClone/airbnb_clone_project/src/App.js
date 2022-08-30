import './App.css';
import NavBar from './NavBar';
import BodyContent from './BodyContent';
import cardContentData from './BodyContentData';

import image1 from './images/image1.jpg';

function App() {
  const cardContent = cardContentData.map(value => {
      return <BodyContent 
        key = {value.id}
        img = {image1}
        value = {value}
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
    </div>
  );
}

export default App;
