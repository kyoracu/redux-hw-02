import React from "react";
import PostDetails from "./components/PostsDetails";
import Posts from "./components/Posts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/styles.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/:id" element={<PostDetails />} />
        <Route path="*" element={<b>404 NOT FOUND</b>} />
      </Routes>
    </Router>
  );
};

export default App;