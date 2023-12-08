import React from 'react';
import './Portfolio.css';
import Navbar from './Navbar';

class Portfolio extends React.Component {
    opentab = (a, event) => {
        const links = document.getElementsByClassName("links");
        const contents = document.getElementsByClassName("contents");

        for (const link of links) {
            link.classList.remove("active-link");
        }

        for (const content of contents) {
            content.classList.remove("active-content");
        }

        event.currentTarget.classList.add("active-link");
        document.getElementById(a).classList.add("active-content");
    };

    render() {
        return (
            <div>
            
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                
                <div id="header">
                    <Navbar />

                    <div className="header-name">
                        <h1><span>Hi</span>, I'm Adithyan K K</h1>

                        <h2>"Being successful isn't my destiny"</h2>
                    </div>
                </div>

                <div id="about">
                    <div className="container">
                        <div className="row">
                            <div className="About-image">
                                <img src="Adithyan.jpeg" alt="Adithyan" />
                            </div>
                            <div className="About-Section">
                                <h1 className="aboutme">About me</h1>
                                <p>I'm a 4th year Btech Student<br />Currently focusing on career development</p>

                                <div className="titles">
                                    <p className="links active-link" onClick={(event) => this.opentab('Skills', event)}>Skills</p>
                                    <p className="links" onClick={(event) => this.opentab('Education', event)}>Education</p>
                                    <p className="links" onClick={(event) => this.opentab('contacts', event)}>Contact</p>
                                </div>

                                <div className="contents active-content" id="Skills">
                                    <ul>
                                        <li><h3>C/C++</h3></li>
                                        <li><h3>Python</h3></li>
                                        <li><h3>MySQL</h3></li>
                                        <li><h3>JAVASCRIPT</h3></li>
                                        <li><h3>REACT JS</h3></li>
                                        <li><h3>Web Designing</h3></li>
                                    </ul>
                                </div>
                                <div className="contents" id="Education">
                                    <ul>
                                        <li><span>2018</span><br /><h3>10th(CBSE)</h3></li>
                                        <li><span>2020</span><br /><h3>+2 COMPUTER SCIENCE</h3></li>
                                        <li><span>2024</span><br /><h3>B.Tech</h3></li>
                                    </ul>
                                </div>
                                <div id="contact">

                                    <div className="contents" id="contacts">
                                        <ul>
                                            <li><a href='mailto:adithyan788@gmail.com'>Email: adithyan788@gmail.com</a></li>

                                            <li>phone no:9645186097</li>

                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Portfolio;
