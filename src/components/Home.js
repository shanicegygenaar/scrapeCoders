import React from 'react';
import About from './pages/About';
import SocialMedia from './SocialMedia';

import Contact from './pages/ContactUs';
import {Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';

import FindOutMore from './pages/FindOutMore';
import HomepageImage from './HomepageImage';


function Home() {
    return(
        <Router>
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
       
          

<Switch>
<Route exact path='/' component={Home} />
<Route path='/FindOutMore' component={FindOutMore}/>



</Switch>
             </div> 

             <div>

               <Contact />
               </div>  
        </div>
        </Router>
    )
}
export default Home;