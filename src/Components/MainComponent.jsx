import React, { useState } from 'react'
import './MainComponent.css';
import Topbar from './Topbar/Topbar';
import Intro from './Intro/Intro';
import Portfolio from './Portfolio/Portfolio';
import Work from './Work/Work';
import Contact from './Contact/Contact';
import Menu from './Menu/Menu';

const MainComponent = () => {
        const [menuOpen, setmenuOpen] = useState(false);
    return (
        <>
            <Topbar menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
            <Menu menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
            <div className="section">
                <Intro></Intro>
                <Portfolio></Portfolio>
                <Work></Work>
                <Contact></Contact>
            </div>
        </>
    );
};

export default MainComponent;