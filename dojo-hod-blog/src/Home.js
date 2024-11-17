import { useState } from "react";

const Home = () => {
  //GET AN ARRAY THAT CONTAINS OBJECTS...THE OBJECTS HAVE DIFFERENT PROPERTIES THAT ARE THE PROPERTIES OF THE BLOG..E.G TITLE, BODY, AUTHOR AND A UNIQUE ID...(PRACTICALLY THIS WILL COME FROM OUR DATABASE)
  const [blogs, setBlogs] = useState([
    //THEN WE STORE THE ARRAY USING  USESTATE() SO WE CAN EASILY UPDATE OR CHANGE THE BLOGS
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  return (
    <div className="home">
      {/* TO OUTPUT OUR ARRAY OF OBJECT...WE USE THE .MAP FUNCTION IN A JSX TEMPLATE..EACH ROOT ELEMENT SHOULD HAVE A KEY PROPERTY AND THIS IS USUALLY THE UNIQUE ID IN THE OBJECT...

WE OUT THE OBJECTS INSIDE A DYNAMIC VARIABLE BRACKET...{}...

{blogs.map((blog) => (
  <div className="blog" key = {blog.id}>
  <h1>{blog.title}</h1>
  <p>{blog.body</p>
  <p>Written by {blog.authot}</p>  
  </div>
  ))}

*/}
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
