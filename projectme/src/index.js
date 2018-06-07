import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, } from 'react-router-dom'

import Home from './screens/home'
import Aboutme from './screens/aboutme'
import Photography from './screens/photography'
import Coding from './screens/coding'
import Footer from './components/footer'
import Creation from './screens/creation'
import Navbar from './components/navbar'

ReactDOM.render(
    <div className="main-container">
        <BrowserRouter>
            <div>
                <Navbar/>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/aboutme" component={Aboutme} />
                <Route path="/photography" component={Photography} />
                <Route path="/coding" component={Coding} />
                <Route path="/creation" component={Creation} />
            </div>
        </BrowserRouter>
        <Footer/>
    </div>,
    document.getElementById('root')
)