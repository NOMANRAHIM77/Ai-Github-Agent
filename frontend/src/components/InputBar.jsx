import { useState } from "react";

const InputBar = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSend(text);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border-t border-gray-700 flex gap-2"
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ask about Git commands, branches, errors..."
        className="flex-1 p-3 rounded bg-gray-800 text-white outline-none"
      />
      <button
        type="submit"
        className="px-5 rounded bg-green-500 hover:bg-green-600 font-semibold bg"
      >
        Send
      </button>
    </form>
  );
};

export default InputBar;
