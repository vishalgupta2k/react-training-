import "./App.css";
import BlogCard from "./components/BlogCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Layout from "./Pages/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/cards" element={<BlogCard />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
