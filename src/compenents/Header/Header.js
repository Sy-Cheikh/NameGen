import React from "react";
import './Header.css';
import back from './back.jpeg';

const Header = ({headTitle, headerExpended}) => {
    return (  
        <div className="head-container">
            <img
                src={back}
                className={ `head-image ${
                        headerExpended 
                        ? 'head-image-expanded' 
                        : 'head-image-contracted'
                }`}
                alt="headerImage" 
             />

            <h1 className={ `head-text ${
                        headerExpended 
                        ? 'head-text-expanded' 
                        : 'head-text-contracted'
                }`}>{headTitle}</h1>
        </div>
    );
}
 
export default Header;