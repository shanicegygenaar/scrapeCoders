
import './App.css';
import NavBar from './components/NavBar/NavBar';
//import Footer from './components/Footer';
import Logo from './assets/images/logo.jpeg';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import SocialMedia from './components/SocialMedia';
import About from './components/pages/About';
import Contact from './components/pages/ContactUs';
import {Link } from 'react-router-dom';

import FindOutMore from './components/pages/FindOutMore';
import HomepageImage from './components/HomepageImage';









function App() {

  
  return (
    
<Router>
    <div className="App">
      
        <img src={Logo} className='img2'/>
        <br />
        <NavBar />
        
        <div className='container'>
          
        <HomepageImage />
     </div>
     <div className='wrap'>
      <div className='box'>
      </div>
        <div className='box2 top'>
          <p className='par1'>Stay updated with 100% new websites.</p>
          <p className='par2'>with features that brings people to your website in no time</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="80" viewBox="0 0 137 142.932">
  <g id="Group_4" data-name="Group 4" transform="translate(-967 -1404.068)">
    <path id="Path_8" data-name="Path 8" d="M68.5,0C106.331,0,137,30.445,137,68s-30.669,68-68.5,68S0,105.555,0,68,30.668,0,68.5,0Z" transform="translate(967 1411)"/>
    <path id="Path_7" data-name="Path 7" d="M73.166,56.359H0L42.549,0s14.53,10.645,22.185,24.734S73.166,56.359,73.166,56.359Z" transform="translate(1014.853 1425.46) rotate(-17)" fill="#e6eaf3"/>
  </g>
</svg>

        
        </div>
        </div>
        <SocialMedia />
        
        <div className='find'>
        
          <About />

          <div id='findingpage'>

          <Link to='/FindOutMore#finding' ><button >Find Out More</button></Link>
<Switch>
<Route path='/FindOutMore' component={FindOutMore} exact>
  
</Route>


</Switch>
             </div> 

             <div>

               <Contact />
               </div>  
        </div>

      </div>

     
</Router>
    
  );
}

export default App;
