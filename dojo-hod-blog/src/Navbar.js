import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logoname">THE DOJO BLOG</h1>
      <ul className="links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create">New Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
