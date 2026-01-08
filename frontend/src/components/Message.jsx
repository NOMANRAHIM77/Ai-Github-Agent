import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Message = ({ role, content }) => {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`
          max-w-[80%]
          px-4 py-3
          rounded-lg
          text-sm
          ${isUser ? "bg-blue-600" : "bg-gray-700"}
          text-white
          overflow-hidden
        `}
      >
        {/* ✅ wrapper handles styling instead of ReactMarkdown */}
        <div className="prose prose-invert max-w-none break-words">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ inline, children }) {
                return inline ? (
                  <code className="bg-black/30 px-1 rounded">
                    {children}
                  </code>
                ) : (
                  <pre className="bg-black text-green-400 p-3 rounded mt-2 overflow-x-auto">
                    <code>{children}</code>
                  </pre>
                );
              }
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Message;
