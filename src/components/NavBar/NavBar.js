import "./NavBar.scss";
import menuIcon from "../../assets/icons/icon-hamburger.svg";
import logo from "../../assets/icons/logo.svg";
import cart from "../../assets/icons/icon-cart.svg";
import { Link } from "react-router-dom";

export default function NavBar({ toggleMenu, handleCartOpen, categories }) {
  return (
    <nav className="nav">
      <img
        className="menu-icon"
        src={menuIcon}
        alt="menu"
        onClick={toggleMenu}
      />
      <Link to="/" className="nav__logo">
        <img src={logo} alt="audiophile logo" />
      </Link>
      <ul className="nav__menu">
        <Link to="/" className="nav__menu-item">
          <li>Home</li>
        </Link>
        {categories.map((category) => (
          <Link
            to={`/category/${category.id}`}
            key={category.id}
            className="nav__menu-item"
          >
            <li>{category.name}</li>
          </Link>
        ))}
      </ul>
      <img
        onClick={handleCartOpen}
        className="cart-icon"
        src={cart}
        alt="cart"
      />
    </nav>
  );
}
