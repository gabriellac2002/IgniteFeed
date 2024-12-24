import Header from "./components/Header";
import Post from "./components/Post";
import Sidebar from "./components/Sidebar";
import "./styles/global.css";

function App() {
  return (
    <div>
      <Header />
      <div className="max-w-6xl my-8 mx-8 md:mx-auto grid grid-cols-1 md:grid-cols-[256px_1fr] gap-8 items-start">
        <Sidebar />
        <main>
          <Post
            name="John Doe"
            body="Hello, world! 🌍 This is a longer body text to demonstrate the capability of handling more content in the post component. #helloWorld"
            role="Ui/Ux Desing"
            image="https://randomuser.me/api/portraits/men/1.jpg"
          />
          <Post
            name="Jane Smith"
            body="Hi, there! 👋 This is another example of a longer body text to show how the post component can manage more detailed information. #hiThere"
            role="Ui/Ux Desing"
            image="https://randomuser.me/api/portraits/women/2.jpg"
          />
          <Post
            name="Alice"
            body="Welcome to Ignite Feed! 🎉 We are excited to have you here and look forward to sharing more content with you. #welcome"
            role="Ui/Ux Desing"
            image="https://randomuser.me/api/portraits/women/3.jpg"
          />
          <Post
            name="Bob"
            body="Ignite is awesome! 🚀 This platform provides a great way to learn and grow your skills in web development. #igniteAwesome"
            role="Ui/Ux Desing"
            image="https://randomuser.me/api/portraits/men/4.jpg"
          />
          <Post
            name="Charlie"
            body="Learning React is fun! 🎨 This post is to show how we can add more content dynamically. #learningReact"
            role="Frontend Developer"
            image="https://randomuser.me/api/portraits/men/5.jpg"
          />
          <Post
            name="Diana"
            body="Keep pushing forward! 💪 Every step you take brings you closer to your goals. #keepPushing"
            role="Backend Developer"
            image="https://randomuser.me/api/portraits/women/6.jpg"
          />
        </main>
      </div>
    </div>
  );
}

export default App;
