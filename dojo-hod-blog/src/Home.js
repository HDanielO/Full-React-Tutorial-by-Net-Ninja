import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  // create a state to track loading
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    console.log("use effect ran");
    fetch("http://localhost:8000/blogs")
      .then((res) => res.json())
      .then((data) => {
        setIsPending(false);
        setBlogs(data);
      });

    // NB: The setTimeout() method will run a function after an amount of time that we specify. It takes two arguments..the first one is the function we want to run and the second one is the time in ms without the unit
    // SYNTAX : setTimeout(function,time)...setTimeout(() =>{}, 1000)
  }, []);

  return (
    <div className="home">
      {isPending && <p>Loading...</p>}
      {blogs && <BlogList blogData={blogs} title="All BLOGS!" />}
    </div>
  );
};

export default Home;
