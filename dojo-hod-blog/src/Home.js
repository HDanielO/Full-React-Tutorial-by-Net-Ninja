import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => {
      return blog.id !== id;
    });
    setBlogs(newBlogs);
  };

  const [name, setName] = useState("Mario");

  useEffect(() => {
    console.log("use effect ran");
    console.log(name);
  }, [name]);

  return (
    <div className="home">
      <BlogList
        blogData={blogs}
        title="All BLOGS!"
        handleDelete={handleDelete}
      />
      <button onClick={() => setName("Luigi")}>change name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
