import React from 'react'
import '../App.css'
import './portfolio.css'

function projects() {
    return (
        <div class="portfolio__container">
        <div class="portfolio__title">
            <h1>Projects</h1>
        </div>
       
        <div class="project__slides">
            <div class="website__container">
                <a target="_blank" href="././greenery/index.html">
                <img class="website__image" src="images/website_screenshot.JPG"/> 
                <div class="website__middle">
                    <div class="website__text"> Fully Responsive Website Concept. This website can be presented flawlessly on any device screen.</div>
                </div>
                </a>
            </div>
            <br/>

            <div class="shop__container">
                <a target="_blank" href="https://challenge-de109.web.app/">
                <img class="shop__image" src="images/shop_screenshot.JPG"/> 
                <div class="shop__middle">
                    <div class="shop__text"> Functional E-Commerce Store Concept. User can browse products, create an account, & add/remove items from basket</div>
                </div>
                </a>
            </div>
            <br/>
            <div class="game__container">
                <a  target="_blank" href="././Animation Project/website/game.html">
                <img class="game__image" src="images/game_screenshot.JPG"/> 
                <div class="game__middle">
                    <div class="game__text"> 2D CSS + Javascript Video Game. Help Flobot collect coins on his adventure.</div>
                </div>
                </a>
            </div>
            <br/>
           
            <div class="maps__container">
                <a  target="_blank" href="././App Project/index.html">
                <img class="maps__image" src="images/maps_screenshot.JPG"/> 
                <div class="maps__middle">
                    <div class="maps__text"> Google Maps API Project. Basic project displaying abilities with API's (specifically Google Maps API)</div>
                </div>
                </a>
            </div>
            
        </div>
        
        </div>
       
    )
}

export default projects;
