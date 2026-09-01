import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Message = ({ role, content }) => {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`
          max-w-[85%]
          px-4 py-3
          rounded-xl
          text-sm
          ${isUser ? "bg-blue-600" : "bg-gray-800 border border-gray-700"}
          text-white
          overflow-hidden
        `}
      >
        <div className="prose prose-invert max-w-none break-words">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              pre({ children }) {
                return (
                  <pre className="bg-black/90 text-green-400 p-3 rounded-lg my-2 overflow-x-auto border border-gray-700">
                    {children}
                  </pre>
                );
              },
              code({ className, children, ...props }) {
                return className ? (
                  <code className={className} {...props}>
                    {children}
                  </code>
                ) : (
                  <code className="bg-gray-900/80 text-emerald-300 px-1.5 py-0.5 rounded text-xs font-mono border border-gray-700/50" {...props}>
                    {children}
                  </code>
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

