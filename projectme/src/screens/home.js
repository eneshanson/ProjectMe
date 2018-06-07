import React from 'react'
import Carousel from '../components/carousel'
import megrad from '../img/megrad.jpg'
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Carousel />
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={megrad} className="img-responsive megrad" alt="me" />
                        </div>
                        <div className="col-md-6 text-center horizontal-align">
                            <h1 className="display-1">
                                About Me
                        </h1>
                            <h4>
                                Born and raised in washington state, I've had a knack for technology since I can remember. I was particulary attracted
                            to computers when the, now popular world-wide, video game, minecraft was introduced to me. When I began to modify the game,
                            I began to familiarize myself with my computer even more, as I had to navigate through the intricate web of the internal files
                            to achieve my goals.
                            <br />
                                <br />
                                Now 6 years later I find myself drawn, once again, to the topic of technology. I joined a coding bootcamp, then known as 'codercamps',
                             but now know as 'Woz-u'. During my time at codercamps, I created <Link to="Coding">MOVTracker</Link>.
                             More can be read about that in the '<Link to="Coding">Coding</Link>' section of this website.
                             The power of creation that coding gave me amazed me.
                            
                        </h4>

                        </div>
                       
                    </div>
                    <h3 className="text-center">
                        As of now, I am currently looking for any opportunity to advance my coding knowledge and prowess. I have a whole lot of heart
                             and I think that whoever gives me a chance will not be disapointed. Thank you.
                        </h3>
                </div>
            </div>
        )
    }
}