import React, { useContext } from "react";
import { Col, Card, Button } from "react-bootstrap";
import { SearchContext } from "../context/search";
import { useNavigate } from "react-router-dom";
import '../assets/secondary/cardStyling.css';

function CharCard(props) {
const name = props.anime.name;
const imageUrl = props.anime.images.jpg.image_url;

  return (
      <div className="slider-element">
        <div className="cd">
          <Card className="bg-dark text-white cd-holder" >
            <div className="cd-overlay"></div>
            <Card.Img src={imageUrl} alt="Card image" className="cd-img"/>
            <Card.ImgOverlay style={{"zIndex":"3"}}>
              <Card.Title>{name}</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </div>
      </div>
  );
}

export default CharCard;
