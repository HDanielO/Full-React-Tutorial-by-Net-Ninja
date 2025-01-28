import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
  return (
    <div className="notfound_section">
      <h1>SORRY!</h1>
      <p>PAGE DOES NOT EXIST</p>
      <Link to={"/"}>BACK TO HOME PAGE</Link>
    </div>
  );
};

export default NotFound;
