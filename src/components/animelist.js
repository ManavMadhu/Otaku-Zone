import React from "react";
import { Container ,Row } from "react-bootstrap";
import Animecard from "./animecard";

function Animelist(props) {
  return (
    <Container>
      <Row>
      {props.data.map((anime) => {
        return(<Animecard key={anime.mal_id} anime={anime}/>)
      })}
      </Row>
    </Container>
  );
}

export default Animelist;
