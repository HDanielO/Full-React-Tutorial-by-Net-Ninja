import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data, isPending, connectionError } = useFetch(
    "http://localhost:8000/blogs"
  );

  return (
    <div className="home">
      {isPending && <p>Loading...</p>}
      {connectionError && <p>{connectionError}</p>}
      {data && <BlogList blogData={data} title="All BLOGS!" />}
    </div>
  );
};

export default Home;