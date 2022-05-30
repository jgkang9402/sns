import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ setLogin }) => {
  const navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault();
    console.log("login user function issue");
    setLogin(true);
    navigate('/');
  };
  return (
    <div>
      <Container>
        <Form onSubmit={(event) => loginUser(event)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="danger" type="submit">
            로그인
          </Button>
          {/* 
            Form태그안에있는 버튼의 타입이 submit이면 onclick으로 이벤트를 주면안됨,
            Form태그에 onSubmit={}을 줘야함
          */}
        </Form>
      </Container>
    </div>
  );
};

export default Login;
