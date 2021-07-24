import React from 'react';
import './Portfolio.css';



const Portfolio = () => {
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <div className="p-item-list">
                <div className="p-item">
                    <img src="assets/b.jpeg" alt="" />
                    <h5> <a href="http://www.facebook.com/rrahatt" target="_blank" rel="noopener noreferrer">Portfolio </a></h5>
                </div>
                <div className="p-item">
                    <img src="assets/e.jpeg" alt="" />
                    <h5> <a href="http://www.facebook.com/rrahatt" target="_blank" rel="noopener noreferrer">eComarce  </a></h5>
                </div>
                <div className="p-item">
                    <img src="assets/b.jpeg" alt="" />
                    <h5> <a href="http://www.facebook.com/rrahatt" target="_blank" rel="noopener noreferrer">Blog  </a></h5>
                </div>
                <div className="p-item">
                    <img src="assets/e.jpeg" alt="" />
                    <h5> <a href="http://www.facebook.com/rrahatt" target="_blank" rel="noopener noreferrer">Learning Site </a></h5>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;