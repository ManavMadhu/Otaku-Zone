import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Container, Form, Button, FormControl } from "react-bootstrap";
import { SearchContext } from "../context/search";

function Header(props) {
  const navigate = useNavigate();
  const search = useContext(SearchContext);
  const [input, setInput] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    search.search(input).then((data) => {
      console.log(data.data);
      search.setData(data.data);
      localStorage.setItem("myData", JSON.stringify(data.data));
      navigate("/search-view");
    });
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="/">Otaku Zone</Navbar.Brand>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <Button
              variant="outline-success"
              disabled={!input}
              onClick={handleSearch}
            >
              Search
            </Button>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
