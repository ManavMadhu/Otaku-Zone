import React, { useContext } from "react";
import { Col, Card, Button } from "react-bootstrap";
import { SearchContext } from "../context/search";
import { useNavigate } from "react-router-dom";
import '../assets/secondary/cardStyling.css';
// const imageUrl = props.anime.image_url;

function Animecard(props) {
  const title = props.anime.title;
  const imageUrl = props.anime.image_url;
  const search = useContext(SearchContext);
  const navigate = useNavigate();

  function singleViewData(){
    console.log(props.anime);
    search.setSingle(props.anime)
    navigate("/single-view");
  }
  return (
    <Col lg={3} xs={6} className="mb-4">
     <div className="slider-element">
        <div className="cd">
          <Card className="bg-dark text-white cd-holder" >
            <div className="cd-overlay"></div>
            <Card.Img src={imageUrl} alt="Card image" className="cd-img"/>
            <Card.ImgOverlay style={{"zIndex":"3"}}>
              <Card.Title>{title}</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </div>
      </div>
    </Col>
  );
}

export default Animecard;
