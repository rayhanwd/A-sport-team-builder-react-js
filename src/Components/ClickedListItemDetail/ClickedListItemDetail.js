import React from 'react';
import MaleTeam  from '../../Photo/male.png';
import FemaleTeam from '../../Photo/female.png';
import './ClickedListItemDetail.css';
import { FaYoutube,
    FaTwitter,
    FaChrome,
    FaFortAwesome,
    FaFontAwesome,
    FaVolleyballBall,
    FaWalking

} from "react-icons/fa";
const ClickedListItemDetail = (props) => {
    
    const {strTeamBadge,strTeam,intFormedYear,strCountry,strSport,strGender,strStadiumThumb,strDescriptionEN,strStadiumDescription,strTwitter,strWebsite,strYoutube} = props.clickedlistData ;
        return (
            <div>
                <div className="banner-img">
                <img src={strStadiumThumb} alt="" srcset=""/>
                </div>
                <img className="badge-img" src={strTeamBadge} alt="" srcset=""/> 
<div className="show-items">  

    <div className="show-text"> 
               <h3>{strTeam}</h3>
               <h6><FaFortAwesome /> Founded: {intFormedYear}</h6>
               <h6><FaFontAwesome /> Country: {strCountry}</h6>
               <h6><FaVolleyballBall /> Sport type: {strSport}</h6>
               <h6><FaWalking /> Gender: {strGender}</h6>
    </div>
    {{strGender: "Male"} ?<img className="item-img" src={MaleTeam} alt="" srcset=""/>
        :<img className="item-img" src={FemaleTeam} alt="" srcset=""/>
      }
</div>              
               <div className="desc-text">
               <p>{strDescriptionEN}</p>
              
               <p>{strStadiumDescription}</p>
               </div>
               <div className="social">
               <a className="social-twitter" href={strTwitter}><FaTwitter /></a>
               <a className="social-chrome" href={strWebsite}><FaChrome /></a> 
               <a className="social-youtube" href={strYoutube}><FaYoutube /></a> 
               </div>
               
                             
            </div>
        );
    };
    
    export default ClickedListItemDetail;