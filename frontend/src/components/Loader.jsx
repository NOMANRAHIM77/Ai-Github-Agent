import { useEffect } from "react";

const Loader = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2500); // 2.5 seconds splash

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="h-screen w-full bg-gray-900 text-white flex flex-col items-center justify-center">
      
      {/* Animated Loader */}
      <div className="flex space-x-2 mb-6">
        <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
        <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
        <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></span>
      </div>

      {/* Project Info */}
      <h1 className="text-3xl font-bold mb-2">GitGuide AI</h1>
      <p className="text-gray-400 text-center max-w-md">
        GitGuide solves all your Git & GitHub problems — from repo creation to advanced workflows.
      </p>
    </div>
  );
};

export default Loader;
