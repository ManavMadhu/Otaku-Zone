import React from "react";
import { Container ,Row } from "react-bootstrap";
import Animecard from "./searchviewcard";

function Animelist(props) {
  return (
    <Container className="padding-top-style">
      <Row>
      {props.data.map((anime) => {
        return(<Animecard key={anime.mal_id} anime={anime}/>)
      })}
      </Row>
    </Container>
  );
}

export default Animelist;
