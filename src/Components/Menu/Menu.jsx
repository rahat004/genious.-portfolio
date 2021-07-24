import React from 'react';
import './Menu.css';

const Menu = (props) => {
    return (
        <div className="menu"  id={props.menuOpen?"active":""}>
            <ul>
                <li>
                    <a href="#intro" onClick={()=>props.setmenuOpen(!props.menuOpen)}>Home</a>
                </li>
                <li>
                    <a href="#portfolio" onClick={()=>props.setmenuOpen(!props.menuOpen)}>Portfolio</a>
                </li>
                <li>
                    <a href="#work" onClick={()=>props.setmenuOpen(!props.menuOpen)}>Work</a>
                </li>
                <li>
                    <a href="#contact" onClick={()=>props.setmenuOpen(!props.menuOpen)}>Contact</a>
                </li>
            </ul>
        </div>
    );
};

export default Menu;