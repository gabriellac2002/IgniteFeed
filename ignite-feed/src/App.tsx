import Header from "./components/Header";
import posts from "./mock/posts";
import Sidebar from "./components/Sidebar";
import "./styles/global.css";
import Post from "./components/Post";

function App() {
  return (
    <div>
      <Header />
      <div className="max-w-6xl my-8 mx-8 md:mx-auto grid grid-cols-1 md:grid-cols-[256px_1fr] gap-8 items-start">
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
