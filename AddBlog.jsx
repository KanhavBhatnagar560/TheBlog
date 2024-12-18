import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBlog = ({ addBlog }) => {
  const [formData, setFormData] = useState({
    name: "",
    date: new Date().toLocaleDateString(),
    blog: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.blog) {
      alert("All fields are required!");
      return;
    }

    addBlog(formData);
    navigate("/"); // Redirect to the home page
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-800 rounded-lg shadow-xl">
      <h1 className="text-3xl font-bold mb-6 text-white">Add a New Blog</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Author</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 text-white rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Content</label>
          <textarea
            name="blog"
            value={formData.blog}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 text-white rounded"
            rows="5"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-400 transition duration-300 ease-in-out"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
