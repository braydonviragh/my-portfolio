import React from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import "./Navbar.css";


function Navbar() {
    const[click, setClick] = useState(false);
    return (
        
        <div className='navbar__container'>
             <div className="header__container">
               <NavLink class="logo" exact to='/' style={{ textDecoration: 'none' }}>
                    <h1>B</h1>
                </NavLink>
                
                <div className="header__icons">
                    
                    <NavLink exact to='/' className="home__icon" activeClassName="active">
                        <div className="header__home">
                        <svg xmlns="http://www.w3.org/2000/svg" class="homeIcon" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#673AB7" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"></path><polyline points="5 12 3 12 12 3 21 12 19 12"></polyline><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path></svg>
                           
                        </div>
                    </NavLink>
        
                    <NavLink to ='/about' className="about__icon" activeClassName="active">
                        <div className="header__about">
                        <svg xmlns="http://www.w3.org/2000/svg" class="aboutIcon" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9C27B0" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"></path><circle cx="12" cy="7" r="4"></circle><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path></svg>
                        
                        </div>
                    </NavLink>
        
                    <NavLink to='/skills' className="header__skills" activeClassName="active">
                        <div className="header__skills">
                        <svg xmlns="http://www.w3.org/2000/svg" class="skillsIcon" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9C27B0" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"></path><polyline points="7 8 3 12 7 16"></polyline><polyline points="17 8 21 12 17 16"></polyline><line x1="14" y1="4" x2="10" y2="20"></line></svg>
                            
                        </div>
                    </NavLink>

                    <NavLink to='/portfolio' className="header__projects" activeClassName="active">
                        <div className="header__projects">
                            <svg xmlns="http://www.w3.org/2000/svg" class="workIcon" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9C27B0" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"></path><path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2"></path></svg>
                        </div>
                    </NavLink>

                </div>
                
        
            </div>
            
        </div>
    )
}

export default Navbar
