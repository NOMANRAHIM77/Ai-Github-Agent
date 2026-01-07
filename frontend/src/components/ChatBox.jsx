import { useState } from "react";
import Message from "./Message";
import InputBar from "./InputBar";
import { sendMessage } from "../services/api";

const ChatBox = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi 👋 I am GitGuide AI. Ask me anything about Git & GitHub!"
    }
  ]);

  const handleSend = async (text) => {
    if (!text.trim()) return;

    const userMessage = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const res = await sendMessage(text);
      const aiMessage = {
        role: "assistant",
        content: res.data.response
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "⚠️ Server error. Try again." }
      ]);
    }
  };

  return (
    <div className="flex flex-col flex-1 max-w-4xl mx-auto w-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <Message key={index} role={msg.role} content={msg.content} />
        ))}
      </div>

      <InputBar onSend={handleSend} />
    </div>
  );
};

export default ChatBox;
