import logo from "../images/header_logo.svg";

function Header() {
  return (
    <header class="header">
      <img src={logo} alt="logo Practicum" class="header__logo" />
    </header>
  );
}

export default Header;
