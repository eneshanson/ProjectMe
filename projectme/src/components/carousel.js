import React from 'react'
import mountains from '../img/mountains.png'
import snow from '../img/snow.png'
import red from '../img/red.png'
import {Link} from 'react-router-dom'

export default class Carousel extends React.Component{
    render(){
        return(
            <div id="MyCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#MyCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#MyCarousel" data-slide-to="1"></li>
                <li data-target="#MyCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
                <div className="item active">
                    <img className="img-responsive center-block" src={mountains} alt="ph1"/>
                    <div className="carousel-caption">
                        <h1>Coder</h1>
                        <br />
                        <Link to="Coding"> <button type="button" className="btn btn-default">My Coding Creations</button></Link>
                    </div>
                </div>
                <div className="item">
                    <img className="img-responsive center-block" src={snow} alt="ph2"/>
                    <div className="carousel-caption">
                        <h1>Creator</h1>
                        <br />
                        <Link to="Creation"> <button type="button" className="btn btn-default">Visit My Side Projects</button></Link>
                    </div>
                </div>
                <div className="item">
                    <img className="img-responsive center-block" src={red} alt="ph3"/>
                    <div className="carousel-caption">
                        <h1>Me</h1>
                        <br />
                         <Link to="aboutme"> <button type="button" className="btn btn-default">About Me</button></Link>
                    </div>
                </div>
            </div>
            <a class="left carousel-control" href="#MyCarousel" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"/>
            <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#MyCarousel" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"/>
            <span class="sr-only">Next</span>
            </a>
        </div>
        )
            
        
    }
}