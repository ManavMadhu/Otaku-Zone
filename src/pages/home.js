import React, { createRef, useContext, useEffect } from "react";
import { SearchContext } from "../context/search";
import Animecard from "../components/animecardv4";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import Carousel from "react-elastic-carousel";
import "../assets/secondary/homepageStyling.css";

function Home() {
  const search = useContext(SearchContext);
  const title = search.singleData.title;
  let imageURL =
    search.singleData.images && search.singleData.images.jpg.large_image_url;
  // const imageUrl = search.singleData.images.jpg.large_image_url;
  let animeSliderElement = createRef();
  let mangaSliderElement = createRef();

  useEffect(() => {
    console.log(search.singleData);
    search.searchTop().then((data) => {
      // console.log(data);
      search.setTopData(data.data);
      // console.log(search.topanimeData);
    });

    search.searchTopM().then((data) => {
      // console.log(data);
      search.setTopMData(data.data);
      // console.log(search.topMangaData);
    });

    search.searchbyID(269).then((data) => {
      search.setSingle(data.data);
      console.log(search.singleData);
    });
  }, []);

  return (
    <div className="home-background">
      <Card className="bg-dark text-white">
        <Card.Img src={"https://initiate.alphacoders.com/images/807/cropped-845-270-807240.png?5164"} alt="Card image" />
      </Card>
      
      <Container fluid className="padding-top-style">
        <Row>
          <Col lg={2}>
            <h2 className="home-header-top-text">Top Anime</h2>
          </Col>
          <Col lg={9}>
            <hr className="horizontal-line-top-homepage" />
          </Col>
          <Col lg={1}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              onClick={() => animeSliderElement.slidePrev()}
              style={{ "width": "30px" }}
              className="slider-arrow-btn"
            >
              <path
                d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM384 288H205.3l49.38 49.38c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0L105.4 278.6C97.4 270.7 96 260.9 96 256c0-4.883 1.391-14.66 9.398-22.65l103.1-103.1c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L205.3 224H384c17.69 0 32 14.33 32 32S401.7 288 384 288z"
                fill="#fff"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              onClick={() => animeSliderElement.slideNext()}
              style={{ width: "30px" }}
              className="slider-arrow-btn"
            >
              <path
                d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM406.6 278.6l-103.1 103.1c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L306.8 288H128C110.3 288 96 273.7 96 256s14.31-32 32-32h178.8l-49.38-49.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l103.1 103.1C414.6 241.3 416 251.1 416 256C416 260.9 414.6 270.7 406.6 278.6z"
                fill="#fff"
              />
            </svg>
          </Col>
        </Row>

        <Row>
          <Carousel
            itemsToShow={5}
            itemsToScroll={1}
            pagination={false}
            showArrows={false}
            transitionMs={800}
            ref={(ref) => (animeSliderElement = ref)}
          >
            {search.topanimeData.map((anime) => {
              return <Animecard key={anime.mal_id} anime={anime} />;
            })}
          </Carousel>
        </Row>

        <Row className="padding-top-style">
          <Col lg={2}>
            <h2 className="home-header-top-text">Top Manga</h2>
          </Col>
          <Col lg={9}>
            <hr className="horizontal-line-top-homepage" />
          </Col>
          <Col lg={1}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              onClick={() => mangaSliderElement.slidePrev()}
              style={{ width: "30px" }}
              className="slider-arrow-btn"
            >
              <path
                d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM384 288H205.3l49.38 49.38c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0L105.4 278.6C97.4 270.7 96 260.9 96 256c0-4.883 1.391-14.66 9.398-22.65l103.1-103.1c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L205.3 224H384c17.69 0 32 14.33 32 32S401.7 288 384 288z"
                fill="#fff"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              onClick={() => mangaSliderElement.slideNext()}
              style={{ width: "30px" }}
              className="slider-arrow-btn"
            >
              <path
                d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM406.6 278.6l-103.1 103.1c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L306.8 288H128C110.3 288 96 273.7 96 256s14.31-32 32-32h178.8l-49.38-49.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l103.1 103.1C414.6 241.3 416 251.1 416 256C416 260.9 414.6 270.7 406.6 278.6z"
                fill="#fff"
              />
            </svg>
          </Col>
        </Row>

        <Row>
          <Carousel
            itemsToShow={5}
            itemsToScroll={1}
            pagination={false}
            showArrows={false}
            transitionMs={800}
            ref={(ref) => (mangaSliderElement = ref)}
          >
            {search.topMangaData.map((anime) => {
              return <Animecard key={anime.mal_id} anime={anime} />;
            })}
          </Carousel>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
