import React from 'react';
import {Link} from 'react-router-dom';
import './FindOutMore.css';

const FindOutMore = () => {
    return(
        
<div id="finding">
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
<div className='stylefind'>
<img src={process.env.PUBLIC_URL +'/img/find-out-more.jpg'} className='img10'/>

        <h1 >Find out more </h1>

        <p>Our team has an extensive background in the fields of UI/UX design, web developement, and mobile developement which are our arears of expertise.
            Prior to the establishmet of ScrapeCoders our team as gained substantial experience, having worked in start up firms, medium-large corporations, mentorship positions, management positions as well as
            having obtained tertiary degrees.
        </p>

        <h3>Mission statement</h3>
        <p>Our is mission is to drive business growth and productivity thorugh the use of technology.</p>

        <h3>What we do</h3>
        <p>We help you so that you can help your customers better by offering affordable and customized web and mobile 
            solutions tailored to your specific business requirements.</p>
        
<h3>Services</h3>
<h3>Web developement</h3>
<ul>
    <li>Redesigning and upgrading company websites</li>
<li>Building scalable and search engine friendly websites</li>
<li>Consulting</li>

</ul>
<h3>Web Design</h3>
<ul>
    <li>Responsive web design</li>
    <li>Wireframing</li>
    <li>UX design</li>
    <li>Consulting</li>
</ul>
<h3>Mobile App developement</h3>
<ul>
    <li>Andriod App developement</li>
    <li>IOS App developement</li>
    <li>Improving existing app Ux</li>
    <li>Consulting</li>
</ul>

<img src={process.env.PUBLIC_URL + '/img/create.jpeg'} className='findimg' />
<br />
        <Link to='/About'><button>About</button></Link>
        
        </div>
        </div>
        
    );
}

export default FindOutMore;