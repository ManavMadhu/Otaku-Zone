import React, { useContext, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import { SearchContext } from "../context/search";
import "../assets/secondary/singleviewStyling.css";
// import ReactPlayer from 'react-player/youtube';

function Singleview() {
  const search = useContext(SearchContext);
  //search.setSingle(JSON.parse(localStorage.getItem("singleAnimeData")));
  const title = search.singleData.title;
  const synopsis = search.singleData.synopsis;
  const imageUrl = search.singleData.images.jpg.large_image_url;
  const rating = search.singleData.score
    ? search.singleData.score
    : search.singleData.scored;
  const genre = search.singleData.genres;

  return (
    <div className="home-background single-view-text">
      <Container className="padding-top-style">
        <Row>
          <h1>{title}</h1>
          <hr />
        </Row>
        <Row>
          <Col lg={8}>
            <h3>Synopsis</h3>
            <p>{synopsis}</p>
            <hr />
            <h4>MAL Rating - {rating}</h4>
            <h4>Genre -</h4>
            <ul>
              {genre.map((data) => {
                return <li>{data.name}</li>;
              })}
            </ul>
          </Col>
          <Col lg={4}>
            <Container>
              <img src={imageUrl} />
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Singleview;
