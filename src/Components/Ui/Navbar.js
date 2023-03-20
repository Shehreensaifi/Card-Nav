import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <a href="/" className="root">
        Music Sound Cloud
      </a>
      <ul>
        <li>
          <a href="/">Song</a>
        </li>
        <li>
          <a href="/">Singer</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
