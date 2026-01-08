import { useState } from "react";

const InputBar = ({ onSend, disabled }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim() || disabled) return;
    onSend(text);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 p-4 bg-[#0f0f0f]"
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={disabled}
        placeholder={disabled ? "AI is replying..." : "Ask about Git or GitHub..."}
        className="
          flex-1
          px-4 py-2
          rounded
          bg-gray-800
          text-white
          outline-none
          border border-gray-700
          focus:border-blue-500
          disabled:opacity-50
        "
      />

      <button
        disabled={disabled}
        className="
          px-4 py-2
          bg-blue-600
          rounded
          hover:bg-blue-700
          disabled:opacity-50
        "
      >
        Send
      </button>
    </form>
  );
};

export default InputBar;
