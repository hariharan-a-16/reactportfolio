import React from "react";
import "./Blog.css";

function Blog() {
  const title = "10 Tips for Effective Time Management";
  const author = "John Doe";
  const description =
    "In today's fast-paced world, effective time management is crucial for success. Learn 10 tips to improve your time management skills and boost productivity.";
  const image = "https://via.placeholder.com/400x200";

  const containerStyle = {
    border: "2px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    width: "350px",
    margin: "30px auto",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#f9f9f9",
  };

  const titleStyle = {
    color: "#2c3e50",
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const authorStyle = {
    color: "#555",
    fontStyle: "italic",
    marginBottom: "10px",
  };

  const descriptionStyle = {
    color: "#333",
    lineHeight: "1.5",
  };

   return (
    <div className="blog-container">
      <img src={image} alt="Blog Thumbnail" className="blog-image" />
      <h2 className="blog-title">{title}</h2>
      <p className="blog-author">By {author}</p>
      <p className="blog-description">{description}</p>
    </div>
  );
}


export default Blog;
