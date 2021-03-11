import React from 'react';
import Twitter from './../Icon/Twitter.png';
import Youtube from './../Icon/YouTube.png';
import Facebook from './../Icon/Facebook.png';
import './Footer.css';
const Footer = (props) => {
    const { strTwitter, strWebsite, strYoutube } = props.social;
    return (
        <div className="social-media">

            <a href={"https://" + strTwitter} target="_blank" rel="noopener noreferrer"><img className="social-img" src={Twitter} alt="" srcset="" /></a>
            <a href={"https://" + strWebsite} target="_blank" rel="noopener noreferrer"><img className="social-img" src={Facebook} alt="" srcset="" /></a>
            <a href={"https://" + strYoutube} target="_blank" rel="noopener noreferrer"><img className="social-img" src={Youtube} alt="" srcset="" /></a>
        </div>
    );
};
export default Footer;