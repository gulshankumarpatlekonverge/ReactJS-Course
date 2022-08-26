import logo from './React-icon.svg.png';
import './App.css';
import HeaderReact from "./Header";
import MainReact from './MainBody';
import FooterReact from './Footer'

// function HeaderReact(){
//   return(
//       <div>
//           <nav className="nav-item">
//               <img src={logo} alt="react logo" className="img-item"></img>
//               <ul className="headerList">
//                   <li>Pricing</li>
//                   <li>About</li>
//                   <li>Contact</li>
//               </ul>
//           </nav>
//       </div>  
//   )
// }

// function MainReact(){
//   return(
//       <div className="div-item">
//           <h1>Fun Fact About ReactJs</h1>
//           <ul>
//               <li>Was first realesed in 2013</li>
//               <li>Was originally created by Jordan Walke</li>
//               <li>Has over 100K starts on GitHub</li>
//               <li>Is maintaine by Facebook</li>
//               <li>Powers thousands of enterprise apps, including mobile apps</li>
//           </ul>
//       </div>
//   )    
// }

// function FooterReact(){
//   return(
//       <div className="footer-item">
//           <h5>Powered By Scrimba and FreeCodeCamp 2022</h5>
//       </div>
//   )
// }


function App() {
  return (
    <div>
      <HeaderReact />
      <MainReact />
      <FooterReact />
    </div>
  );
}

export default App;
