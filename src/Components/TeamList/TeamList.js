import React from 'react';
import { useHistory } from 'react-router';
import './TeamList.css';
import { Card,Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';

const TeamList = (props) => {
    const {idTeam,strTeamBadge,strTeam,strSport} = props.listitem;

    const history = useHistory();
    const ClickedListItem = id=>{
        const url =`id/${id}`;
        history.push(url)
    }

    return (
    <div className="container">
<Card style={{ width: '15rem',textAlign: 'center'}}>
  <Card.Img variant="top" src={strTeamBadge} />
  <Card.Body>
  <Card.Title>{strTeam}</Card.Title> 
    <Card.Text>
    Sport Type:  {strSport}
    </Card.Text>
    <Button onClick={()=>ClickedListItem(idTeam)} variant="primary">Explore    <FontAwesomeIcon icon={faArrowRight} /></Button>
  </Card.Body>
</Card> 
        </div>
    );
};

export default TeamList;
