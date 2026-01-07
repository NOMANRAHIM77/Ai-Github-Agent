import ReactMarkdown from "react-markdown";

const Message = ({ role, content }) => {
  const isUser = role === "user";

  return (
    <div
      className={`max-w-[80%] p-3 rounded-lg ${
        isUser
          ? "ml-auto bg-green-600 text-white"
          : "mr-auto bg-gray-800 text-gray-100"
      }`}
    >
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default Message;
