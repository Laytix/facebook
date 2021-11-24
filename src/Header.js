import React from 'react';
import { FaFacebook, FaSearch, FaHome, FaVideo, FaPlus, FaBell, FaCaretDown } from 'react-icons/fa';
import { MdGroup } from "react-icons/md";
import { AiFillShop } from "react-icons/ai";
import { GiAbstract026 } from "react-icons/gi";

const Header = () =>{
    return(
        <div className="header">
            <div className="header-left-nav">
                <div className="header-logo-nav">
                    <FaFacebook className="header-logo"/>
                </div>
                <div className="header-search">
                    <input type="text" name="" id="" placeholder="Search Facebook" className="header-bar"/>
                    <FaSearch className="header-search-icon"/>
                </div>
            </div>
            <div className="header-center-nav">
                <span className="center-icons">
                    <FaHome className="header-center-icons"/>
                    <span className="header-center-notification">20</span>
                </span>

                <span className="center-icons">
                    <FaVideo className="header-center-icons"/>
                    <span className="header-center-notification">3</span>
                </span>

                <span className="center-icons">
                    <AiFillShop className="header-center-icons"/>
                    <span className="header-center-notification">43</span>
                </span>

                <span className="center-icons">
                    <MdGroup className="header-center-icons"/>
                    <span className="header-center-notification">3</span>
                </span>

                <span className="center-icons">
                    <GiAbstract026 className="header-center-icons"/>
                    <span className="header-center-notification">6</span>
                </span>
            </div>
            <div className="header-right-nav">
                <span className="header-right-block">
                    <FaPlus/>
                </span>

                <span className="header-right-block">
                    <FaBell/>
                </span>

                <span className="header-right-block">
                    <FaCaretDown/>
                </span>
                
                

            </div>
        </div>
    )
}

export default Header
