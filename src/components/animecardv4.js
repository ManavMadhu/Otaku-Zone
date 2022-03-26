import React, { useContext } from "react";
import { Col, Card, Button } from "react-bootstrap";
import { SearchContext } from "../context/search";
import { useNavigate } from "react-router-dom";
import '../assets/secondary/cardStyling.css';

function Animecard(props) {
  // const {title,imageUrl,synopsis,malUrl} = props.anime;
  const title = props.anime.title;
  const imageUrl = props.anime.images.jpg.large_image_url;
  const search = useContext(SearchContext);
  const navigate = useNavigate();

  function singleViewData(){
    console.log(props.anime);
    search.setSingle(props.anime);
    localStorage.setItem("singleAnimeData", JSON.stringify(props.anime));
    navigate("/single-view");
  }

  return (
      <div className="slider-element">
        <div className="cd">
          <Card className="bg-dark text-white cd-holder" onClick={() => singleViewData()} >
            <div className="cd-overlay"></div>
            <Card.Img src={imageUrl} alt="Card image" className="cd-img"/>
            <Card.ImgOverlay style={{"zIndex":"3"}}>
              <Card.Title>{title}</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </div>
      </div>
  );
}

export default Animecard;
