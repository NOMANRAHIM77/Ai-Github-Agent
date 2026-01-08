import { useState, useRef, useEffect } from "react";
import Message from "./Message";
import InputBar from "./InputBar";
import { sendMessage } from "../services/api.js";

const ChatBox = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi 👋 I am GitGuide AI. Ask me anything about Git & GitHub!"
    }
  ]);

  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto scroll only messages area
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = async (text) => {
    if (!text.trim() || loading) return;

    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setLoading(true);

    try {
      const res = await sendMessage(text);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: res.data.reply }
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "⚠️ Server error. Try again." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto w-full">

      {/* MESSAGES AREA (ONLY THIS SCROLLS) */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {messages.map((msg, index) => (
          <Message key={index} role={msg.role} content={msg.content} />
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-700 px-4 py-2 rounded-lg text-sm animate-pulse">
              GitGuide AI is typing...
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* INPUT BAR (FIXED, NEVER MOVES) */}
      <div className="sticky bottom-0 bg-[#0f0f0f] border-t border-gray-700">
        <InputBar onSend={handleSend} disabled={loading} />
      </div>
    </div>
  );
};

export default ChatBox;
