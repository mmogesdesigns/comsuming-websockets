import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { Socket } from "socket.io-client";

interface SocketProps {
  socket: Socket;
  name: string | null;
}

interface EmittedMessageProps {
  text: string;
  getName: string;
}

const ChatBody = ({ socket, name }: SocketProps) => {
  const [messages, setMessages] = useState<{ getName: string; text: string }[]>(
    []
  );
  const getName = sessionStorage.getItem("username");

  useEffect(() => {
    socket.on("message", (emittedMessage: EmittedMessageProps) => {
      setMessages([...messages, emittedMessage]);
    });
  }, [messages, socket]);

  return (
    <Container>
      {messages.map((message, index) => (
        <Card key={index}>
          <Card.Body>
            {message.getName === getName && message.getName} {message.text}
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default ChatBody;
