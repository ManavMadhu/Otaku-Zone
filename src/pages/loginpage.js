import React from "react";
import { Form, Button, Card, Container } from "react-bootstrap";

function Loginpage() {
  return (
    <div className="padding-top-style">
      <Container>
        <Card border="info">
          <Card.Header><h1>Login</h1></Card.Header>
          <Card.Body>
            <Card.Text>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control placeholder="Enter Username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Loginpage;
