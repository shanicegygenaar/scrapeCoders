import React, { Component} from 'react';
import {MenuItems } from './MenuItems';
import './NavBar.css';
//import {Link} from 'react-router-dom';
import {HashLink  } from 'react-router-hash-link';




class NavBar extends Component {
state = { clicked: false}

handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
}


    render() {
        return(
            
            <nav className='NavbarItems'id='home'>
                <h1 className='navbar-logo'>
                    Scrape<span>Coders</span></h1>
                    
                <div className='menu-icon' onClick={this.handleClick}>
                  <i className={this.state.clicked ? 'fa fa-times' : 'fa fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((items, index) => {
                        return (
                            
                        <li key={index} className={items.cName}>
                         <HashLink smooth to={items.path} scroll={(el) => el.scrollIntoView({ behavior: 'instant', block: 'end'})}>
                         {items.title}
                         </HashLink>
                    
                        </li>
                    
                    
                        )


    })}
                </ul>

            </nav>
        )
    }
}
export default NavBar;