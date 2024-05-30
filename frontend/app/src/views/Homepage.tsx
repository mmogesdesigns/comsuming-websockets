import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

const HomePgae = () => {
  const [username, setUsername] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    sessionStorage.setItem("username", username);
    navigate("/chat");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
        onChange={(event) => setUsername(event.target.value)}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
};
export default HomePgae;
