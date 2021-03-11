import React from 'react';
import MaleTeam from '../../Photo/male.png';
import FemaleTeam from '../../Photo/female.png';
import './ClickedListItemDetail.css';
import Found from '../../Icon/found 1.png';
import Flag from '../../Icon/flag (1) 1.png';
import Sport from '../../Icon/football (1) 1.png';
import Gender from '../../Icon/male-gender-sign 1.png';
import Footer from '../../Footer/Footer';
const ClickedListItemDetail = (props) => {

    const { strTeamBadge, strTeam, intFormedYear, strCountry, strSport, strGender, strStadiumThumb, strDescriptionEN, strStadiumDescription } = props.clickedlistData;

    const getGender = props.clickedlistData.strGender;

    const SocialLink = props.clickedlistData;

    return (
        <div>
            <div className="banner-img">
                <img src={strStadiumThumb} alt="" srcset="" />
            </div>
            <img className="badge-img" src={strTeamBadge} alt="" srcset="" />
            <div className="show-items">

                <div className="show-text">
                    <h3>{strTeam}</h3>
                    <h6><img className="info-icon" src={Found} alt="" srcset="" /> Founded: {intFormedYear}</h6>
                    <h6><img className="info-icon" src={Flag} alt="" srcset="" /> Country: {strCountry}</h6>
                    <h6><img className="info-icon" src={Sport} alt="" srcset="" /> Sport type: {strSport}</h6>
                    <h6><img className="info-icon" src={Gender} alt="" srcset="" /> Gender: {strGender}</h6>
                </div>
                {getGender ? <img className="item-img" src={MaleTeam} alt="" srcset="" />
                    : <img className="item-img" src={FemaleTeam} alt="" srcset="" />
                }
            </div>
            <div className="desc-text">
                <p>{strDescriptionEN}</p>
                <p>{strStadiumDescription}</p>
            </div>
            <div className="social">

                <Footer social={SocialLink}></Footer>
            </div>


        </div>
    );
};

export default ClickedListItemDetail;
