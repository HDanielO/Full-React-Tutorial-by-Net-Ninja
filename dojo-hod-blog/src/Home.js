import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  // create a state to track loading
  const [isPending, setIsPending] = useState(true);

  // There are two types of error
  // 1. Connection error - when out site can't even connect to the server. We can track this using .catch() method
  const [connectionError, setConnectionError] = useState(null);

  // 2. Server error - This is when a server sends an error. It might be due to wrong endpoint or denial of access

  useEffect(() => {
    console.log("use effect ran");
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        if (!res.ok) {
          throw Error("Cant Fetch Data From Server");
        }
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setBlogs(data);
        setConnectionError(null);
      })
      .catch((err) => {
        setConnectionError(err.message);
        setIsPending(false);
      });
  }, []);

  return (
    <div className="home">
      {isPending && <p>Loading...</p>}
      {connectionError && <p>{connectionError}</p>}
      {blogs && <BlogList blogData={blogs} title="All BLOGS!" />}
    </div>
  );
};

export default Home;
