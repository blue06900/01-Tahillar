import logo from "../../helpers/logo.png";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        {/* <img src={logo} alt="tahillar" /> */}
      </div>
      <div className="links">
        <a href="#tahillar">Tahıllar </a>
        <a href="#bugday">Buğday </a>
        <a href="#arpa">Arpa </a>
        <a href="#yulaf">Yulaf </a>
        <a href="#pirinc">Pirinç</a>
      </div>
    </div>
  )
}

export default Navbar