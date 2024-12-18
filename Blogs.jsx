import React from "react";

const Blogs = ({ blog, deleteBlog }) => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-800 rounded-lg shadow-xl">
      <h1 className="text-3xl font-bold mb-6 text-white">Blog Details</h1>
      <p className="text-lg text-gray-300">
        <span className="font-semibold text-purple-400">Author:</span> {blog.name}
      </p>
      <p className="text-lg text-gray-300">
        <span className="font-semibold text-purple-400">Date:</span> {blog.date}
      </p>
      <p className="text-lg text-gray-300">
        <span className="font-semibold text-purple-400">Content:</span> {blog.blog}
      </p>
      <button
        onClick={() => deleteBlog(blog.id)}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-400 transition duration-300 ease-in-out"
      >
        Delete Blog
      </button>
    </div>
  );
};

export default Blogs;
