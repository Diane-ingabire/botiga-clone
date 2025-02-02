import React from "react";
import seventeenimg from "../assets/seventeenimg.webp";
import eighteenimg from "../assets/eighteenimg.webp";
import nineteenimg from "../assets/nineteenimg.webp"
import twentyimg from "../assets/twentyimg.webp";
import tweentoneimg from "../assets/tweentoneimg.webp";
import sixteenimg from "../assets/sixteenimg.webp";

import "../styles/blog.css";

const blogs = [
  {
    date: "July 18, 2021",
    title: "Sed magna dui, dignissim id felis vitae, consectetur",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]",
    image: sixteenimg,
  },
  {
    date: "July 18, 2021",
    title: "Fusce suscipit risus tempor, blandit urna at, laoreet ex",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]",
    image:seventeenimg, 
  },
  {
    date: "July 18, 2021",
    title: "Pellentesque varius, diam vitae mattis luctus, mi mi cursus",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]",
    image: eighteenimg,
  },
];


const blog2 = [
    {
      date: "July 18, 2021",
      title: "Sed magna dui, dignissim id felis vitae, consectetur",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]",
      image: nineteenimg,
    },
    {
      date: "July 18, 2021",
      title: "Fusce suscipit risus tempor, blandit urna at, laoreet ex",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]",
      image:  twentyimg,
    },
    {
      date: "July 18, 2021",
      title: "Pellentesque varius, diam vitae mattis luctus, mi mi cursus",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]",
      image:  tweentoneimg, 
    },
  ];
  

const Blog = () => {
  return (
    <div className="blog-list">
      <div className="blog-container">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" /><br/>
            <p className="blog-date">{blog.date}</p><br/>
            <h3>{blog.title}</h3><br/>
            <p>{blog.description}</p><br/>
            <a href="#" className="read-more">Read more</a>
          </div>
        ))}
      </div>
      <div className="blog-list">
      <div className="blog-container">
        {blog2.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" /><br/>
            <p className="blog-date">{blog.date}</p><br/>
            <h3>{blog.title}</h3><br/>
            <p>{blog.description}</p><br/>
            <a href="#" className="read-more">Read more</a>
            <br/>
          </div>
        ))}
      </div>
    </div>
    </div>
    

  );
};

export default Blog;
