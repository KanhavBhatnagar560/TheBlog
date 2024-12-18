import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Blogs from "./Blogs";
import AddBlog from "./AddBlog";

const App = () => {
  const [blogs, setBlogs] = useState([
    {
      name: "Bora",
      date: "12/16/24",
      blog: "get on fortnite",
      id: 1,
    },
  ]);

  const addBlog = (newBlog) => {
    setBlogs([...blogs, { ...newBlog, id: blogs.length + 1 }]);
  };

  const deleteBlog = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <Router>
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route
            path="/"
            element={
              <div className="space-y-6">
                {blogs.map((blog) => (
                  <Blogs key={blog.id} blog={blog} deleteBlog={deleteBlog} />
                ))}
              </div>
            }
          />
          <Route path="/addBlog" element={<AddBlog addBlog={addBlog} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
