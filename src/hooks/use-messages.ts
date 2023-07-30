import React from "react";

const CHAT_MESSAGES_KEY = "CHAT_MESSAGES";

const useMessages = () => {
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const data = window.localStorage.getItem(CHAT_MESSAGES_KEY);
    if (data !== null && data.length !== 0) {
      setMessages(JSON.parse(data));
    }
    setLoading(false);
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem(CHAT_MESSAGES_KEY, JSON.stringify(messages));
  }, [messages]);

  return { messages, setMessages, loading };
};

export default useMessages;
