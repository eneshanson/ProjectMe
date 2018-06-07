import React from 'react'


export default class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer className="container-fluid text-center page-footer">
                    <div className="row">
                        <div className="col-sm-6">
                            <h3>Contact Me</h3>
                            <br/>
                            <h4></h4>
                        </div>

                        <div className="col-sm-6">
                            <h3>Connect</h3>
                            <a href="https://linkedin.com/in/enes-hanson-748a2514b/" className="fa fa-linkedin"> </a>
                            <a href="https://github.com/eneshanson" className="fa fa-github"> </a>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}