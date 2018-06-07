import React from 'react'
import { Link } from 'react-router-dom'
import logo3 from '../img/logo3.png'

export default class Navbar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to="home" className="HomeButton"><img src={logo3} width="190" height="55" alt="logohere"/></Link>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="home"> Home </Link></li>
                            <li><Link to="aboutme"> About Me </Link></li>
                            <li><Link to="coding">Portfolio </Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

        )
    }
}