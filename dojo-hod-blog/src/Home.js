import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    console.log("use effect ran");
    fetch("http://localhost:8000/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="home">
      {blogs && <BlogList blogData={blogs} title="All BLOGS!" />}
    </div>
  );
};

export default Home;
