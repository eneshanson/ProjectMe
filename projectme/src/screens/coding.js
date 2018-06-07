import React from 'react'
import movhome from '../img/movhome.png'
import movlog from '../img/movlog.png'
import movarch from '../img/movarch.png'


export default class Coding extends React.Component {
    render() {
        return (
            <div className="container">
                <h1 className="text-center"> My Coding Portfolio </h1>
                <br />
                <p className="text-center"> As someone who is relatively new the the field of web development, my portfolio only contains two total projects. <br />
                    I have put great care into making these projects the best they can possibly be<br />
                    My heart is invested in this field, and as I gain practice, my knowledge may eventually catch up to my determination <br />
                    <br />
                    <em>I doubt it though</em> </p>
                <h2>MOVTracker</h2>
                <br/>
                <p>
                    MOVTracker is, I could say, one of the biggest uphill battles I have ever had to
                    overcome. <em>However</em> the feeling of satisfaction I had after I had completed it was intoxicating, and somewhat addicting.
                    Never in my life, had I been faced with the challenge of "create an entire website from scratch with little prior knowledge",
                     and come out on top. I love that website. The application features 
                    integration with services such as "Webpack, Babel, Firebase, Node.js", and more yet.
                     You can find all of the source code to my project at my <a href="https://github.com/eneshanson/MOVTracker">GitHub</a> repo
                </p>
                <br/>
                <div className="container text-center">
                    <h2>Here are some screenshots from MOVTracker</h2>
                    <div className="row">
                        <div className="col-sm-4">
                            <img src={movhome} className="img-responsive" alt="homepage"/>
                            <h3>HomePage</h3>
                        </div>
                        <div className="col-sm-4">
                            <img src={movlog} className="img-responsive" alt="Login Page"/>
                            <h3>Login Screen</h3>
                        </div>
                        <div className="col-sm-4">
                            <img src={movarch} className="img-responsive" alt="Archives"/>
                            <h3>Archives</h3>
                        </div>
                    </div>
                    <p>With MOVTracker, I specifically focused on the technical side of the site. Making it look beautiful fell by the waist-side 
                        in favor of making the site functional (Which it is). The site features a functioning login page, log out page, and registration page.
                        I utilized the google-made service 'firebase' for handling most of the backend.
                    </p>
                </div>
                
                <h2>Portfolio Website</h2>
                <br/>

                <p> 
                    My main purpose for creating this website was to have a streamlined place to showcase my projects. I wanted
                    to focus heavily on the front-end aspect of development (as that is my desired field), and so I hope you'll be
                    happy to know that the entirety of the website is responsive, and fit for mobile devices. I don't plan to ever 
                    be done working on this, and I plan to update and upgrade it as my coding career continues to move forward. The source code
                    can be found at my <a href="https://github.com/eneshanson/ProjectMe">Github</a>
                </p>
            </div>
        )
    }
}