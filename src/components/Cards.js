import React from 'react';
import CardItem from './CardItem';
import './Cards.css';


function Cards() {
  return (
    <div className="cards">
      <h1>Check out my work!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/fakestore.png"
              text="Really Good Fake Store"
              label="Github"
              path='/'
            />
            <CardItem
              src="images/UrbanC.png"
              text="Urban Cipher"
              label="Github"
              path='/'
            />
          </ul>
          <ul className="cards__items">
           
            <CardItem
              src="images/team-generator.png"
              text="Team Profiles"
              label="Github"
              path='/'
            />
            <CardItem
              src="images/Weather-DB.png"
              text="Weather Dashboard"
              label="Github"
              path='/'
            />
             <CardItem
              src="images/api.png"
              text="E-commerce Backend"
              label="Github"
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;