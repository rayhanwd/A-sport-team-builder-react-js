import React, { useEffect, useState } from 'react';
import './Home.css';
import TeamLists from '../TeamList/TeamList';
import { Container,Row } from 'react-bootstrap';
const Home = () => {

const [listing,setListItem] =useState([]);
    useEffect(() => {
    
    const url=`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`
    
    fetch(url)
    .then(res => res.json())
    .then(datalist => setListItem(datalist.teams))
    
    },[])

    return (
      <>
      <div className="header-img">
        <img src="https://www.thesportsdb.com/images/media/team/stadium/qquqvq1420243707.jpg" alt='' srcset=""/>
        </div>
        <Container>
        <Row sm={1} md={3} lg={4} margin={5}>
          {
                  listing.map(list=> 
                  <TeamLists key={list.idTeam} listitem = {list}>
                  </TeamLists>)
                 } 
        </Row>
      </Container>
      </>
    );
};

export default Home;

