import './Topbar.css';
import {MdCall, MdMailOutline} from 'react-icons/md';




const Topbar = (props) => {
    return (
        <div className="topbar container-fluid" id={props.menuOpen?"active":""}>
            <div className="row">
                <div className="left col-8 ">
                    <div className="logo">
                        <a href="#intro">genious.</a>
                    </div>
                    <div className="itemContainer">
                        <a href="tel:+8801776345564">
                            <MdCall></MdCall>
                            <span>01776345564</span>
                        </a>
                    </div>
                    <div className="itemContainer">
                        <a href="mailto:rahatsorker8@gmail.com">
                            <MdMailOutline></MdMailOutline>
                            <span>rahatsorker8@gmail.com</span>
                        </a>
                    </div>
                </div>
                <div className="right col-4 ">
                    <div className="hamburger" onClick={()=>props.setmenuOpen(!props.menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;