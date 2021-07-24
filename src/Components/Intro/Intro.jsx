import React from 'react';
import './Intro.css';

const Intro = () => {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/man.png" alt="Man" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Rahat Sorkar</h1>
                    <h3>Website <span>Designer</span> </h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="download" />
                </a>
            </div>
        </div>
    );
};

export default Intro;