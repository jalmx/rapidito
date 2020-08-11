import React, { useEffect, useState } from "react";

import { getAllMessage, updateMessage } from "../../firebase/messages";
import Message from "./";

const MessageSection = () => {
  const [messagesNews, setMessagesNews] = useState([]);
  const [messagesReads, setMessagesReads] = useState([]);

  const getMessages = async () => {
    const messages = await getAllMessage();
    setMessagesNews([]);
    setMessagesReads([]);

    let readMessages = [];
    let newMessages = [];
    for (const m of messages) {
      m.read ? readMessages.push(m) : newMessages.push(m);
    }

    setMessagesReads(readMessages);
    setMessagesNews(newMessages);
  };

  const onMarkRead = (id) => {
    updateMessage(
      messagesNews.reduce((message) => message.id === id)
    ).then((res) =>
      res ? alert("Hubo un error al eliminar el mensaje") : getMessages()
    );
  };

  useEffect(() => {
    getMessages();
    return () => {};
  }, []);

  return (
    <div>
      <h1>
        Mensaje nuevos - <i>({messagesNews.length})</i>
      </h1>
      {messagesNews.map((m) => (
        <Message key={m.id} {...m} onMarkRead={onMarkRead} />
      ))}
      <h1>
        Mensaje Leídos - <i>({messagesReads.length})</i>
      </h1>
      {messagesReads.map((m) => (
        <Message key={m.id} {...m} onDeleteMessage={getMessages} />
      ))}
    </div>
  );
};

export default MessageSection;
