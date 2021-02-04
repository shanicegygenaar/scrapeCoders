import React from 'react';
import  './About.css';
import {Link} from 'react-router-dom';









  function About() {
    
    return(
      
        <div className='pagetwo'>

            <br />
            <br />
            <br />
            
            

<h1>WE</h1>   
            
            
            <div className='imagewrap'>
            <div className='row'>
              <div className='column'>
            <img src={process.env.PUBLIC_URL + '/img/design.jpeg'} alt="design" className='images'/><p>Design</p>
            </div>
            <div className='column'>
            <img src={process.env.PUBLIC_URL + '/img/create.jpeg'} alt="create" className='images'/><p>Create</p>
            </div>
            <div className='column'>
            <img src={process.env.PUBLIC_URL + '/img/test.jpg'} alt="test" className='images'/><p>Test</p>
            </div>
            <div className='column'>
            <img src={process.env.PUBLIC_URL + '/img/launch.jpg'} alt="launch" className='images'/><p>Launch</p>
            </div>
            </div>

            
</div>


<div className='about2' id='landingpage'>
  <h1 className='about3'>About us</h1>
  <div className='boxwrap'>
 <p> <img src={process.env.PUBLIC_URL + '/img/about-image.jpg'} className='images2'/>
ScrapeCoders is a result-driven, tech startup company founded in early 2020 by a group of six core developers. Each from different teach backgrounds that have a passions fro technology and who believed that technology is the driving force of change in communities and modern society.
</p>



  </div>

</div>

      
          </div> 
        
    )
}
export default About;

