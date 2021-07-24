import React from 'react';
import './Work.css';

const Work = () => {
    return (
        <div className="work" id="work">
            <div className="slider">
                <div className="Econtain">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="assets/mobile.png" alt="" />
                                </div>
                                <h2>Title</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum enim odio culpa commodi ad error.
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src="assets/b.jpeg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;