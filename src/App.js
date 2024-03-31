import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Albums from "./pages/Albums/Albums";
import Posts from "./pages/Posts/Posts";
import "./assets/style/all.scss";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/albums/:userId" element={<Albums />} />
        <Route path="/albums/album/:albumId" element={<Albums />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:userId" element={<Posts />} />
        <Route path="/posts/post/:postId" element={<Posts />} />
      </Routes>
    </Router>
  );
}

export default App;
