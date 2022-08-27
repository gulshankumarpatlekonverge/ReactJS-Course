import profileImage from './assets/ProfileImage.jpg';
import './App.css'

import email from './assets/email.jpg';
import linkedin from './assets/linkedin.png';
import facebook from './assets/facebook.png';
import git from './assets/git.png';
import instagram from './assets/instagram.png';
import twitter from './assets/twitter.jpg';


function App() {
  return (
    <div className="main-div">
      <div className='sub-div'>
          <img className='profileImage-div' src={profileImage} alt="profileImageGulshankumar" />
            <div className='intro-div'>
              <p className='name-para'>Gulshankumar Patle</p>
              <p className='profile-para'>Full Stack Developer</p>
              <p className='company-para'>Konverge.AI</p>
              <div id='div-button'>
              <a className='email-button' target="_blank" href='https://www.gmail.com'><img className='anchor-img' src={email}></img> Email</a>
              <a className='linkedin-button' target="_blank" href='https://www.linkedin.com'><img className='anchor-img' src={linkedin}></img> LinkedIn</a>
              </div>
              <p className="about">About</p>
              <p className="about-para">I am working as an Software Developer Trainee at Konverge.AI, Nagpur from last 2 months. Previously, I am working as an Software Developer at Techtue Structure Private Limited, Nagpur. I am having 10+ Months of Experience in Nodejs Full Stack Development. I am expert in HTML,CSS, JavaScript, React and NodeJS. I also have knowledge and handson on AWS Technology.</p>
              <p className="interest">Interest</p>
              <p className="interest-para">Food Expert loves cooking, Playing Cricket, Listen to Music (HipHop/ Bollywood), Technology enthuastic.</p>
            </div>

            <div>
              <footer>
                <a target="_blank" href="https://www.facebook.com"><img className="footer-image" src={facebook} alt="facebook"/></a>
                <a target="_blank" href="https://www.twitter.com"><img className="footer-image" src={twitter} alt="twitter"/></a>
                <a target="_blank" href="https://www.instagram.com"><img className="footer-image" src={instagram} alt="instagram"/></a>
                <a target="_blank" href="https://www.github.com"><img className="footer-image" src={git} alt="git"/></a>
              </footer>
            </div>
      </div>
      
    </div>
  )
}

export default App
