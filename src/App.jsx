import "./App.css";
import BlogCard from "./components/BlogCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import About from "./Pages/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cards" element={<BlogCard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
