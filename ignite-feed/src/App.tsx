import Header from "./components/Header";
import Post from "./components/Post";
import Sidebar from "./components/Sidebar";
import "./styles/global.css";

function App() {
  return (
    <div>
      <Header />
      <div className="max-w-6xl my-8 mx-auto grid grid-cols-[256px_1fr] gap-8 items-start">
        <Sidebar />
        <main>
          <Post name="John Doe" body="Hello, world!" />
          <Post name="Jane Smith" body="Hi, there!" />
          <Post name="Alice" body="Welcome to Ignite Feed!" />
          <Post name="Bob" body="Ignite is awesome!" />
        </main>
      </div>
    </div>
  );
}

export default App;
