import { useState } from "react";
import Header from "../components/Header";
import ChatBox from "../components/ChatBox";
import Loader from "../components/Loader";

const Home = () => {
  const [loading, setLoading] = useState(true);
  

  if (loading) {
    return <Loader onFinish={() => setLoading(false)} />;
  }

  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col overflow-hidden">
      
      {/* Header */}
      <Header />

      {/* Chat area (only this scrolls) */}
      <div className="flex-1 overflow-hidden">
        <ChatBox />
      </div>
    </div>
  );
};

export default Home;
