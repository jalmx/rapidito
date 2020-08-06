import React, { useEffect, useState } from "react";
import Message from "./";
import { getAllMessage } from "../../firebase/messages";

const MessageSection = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getAllMessage().then((ms) => setMessages(ms));

    return () => {};
  }, [messages]);
  return (
    <div>
      {messages.map((m) => (
        <Message key={m.id} {...m} />
      ))}
    </div>
  );
};

export default MessageSection;
