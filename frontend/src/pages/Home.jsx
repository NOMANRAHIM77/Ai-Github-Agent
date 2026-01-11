import { useState } from "react";
import Header from "../components/Header";
import ChatBox from "../components/ChatBox";


const Home = () => {
  const [showReminder, setShowReminder] = useState(false);

  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col overflow-hidden">
      
      {/* Header */}
      <Header  />


      {/* Chat (scrolls independently) */}
      <div className="flex-1 overflow-hidden">
        <ChatBox />
      </div>

    </div>
  );
};

export default Home;
