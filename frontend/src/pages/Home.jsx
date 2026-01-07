import Header from "../components/Header";
import ChatBox from "../components/ChatBox";

const Home = () => {
  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col">
      <Header />
      <ChatBox />
    </div>
  );
};

export default Home;
