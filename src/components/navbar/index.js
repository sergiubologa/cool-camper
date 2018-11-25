import React from "react";
import { refHasClassName } from "../../common/utils";
import BurgerMenuSVG from "../svg/burger-menu";
import ScrollListener from "../scroll-listener";
import { Link } from "react-router-dom";
import IconButton from "../inputs/icon-button";

// Height in px for navbar
const navbarHeight = 60;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.navBarRef = React.createRef();
    this.renderLinks = this.renderLinks.bind(this);
    this.toggleBurgerMenu = this.toggleBurgerMenu.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.toggleNavbarBackgroundColor = this.toggleNavbarBackgroundColor.bind(
      this
    );

    this.state = {
      mobileMenuOpened: false,
      navLinks: [
        { title: "T&C", url: "termeni-si-conditii" },
        { title: "Privacy", url: "politica-de-confidentialitate" }
      ]
    };
  }

  handleScroll() {
    this.toggleNavbarBackgroundColor();
  }

  toggleBurgerMenu() {
    this.setState(
      {
        mobileMenuOpened: !this.state.mobileMenuOpened
      },
      this.toggleNavbarBackgroundColor
    );
  }

  toggleNavbarBackgroundColor() {
    // If the navbar is rendered without transparent background
    // there's no need to toggle it's background color
    if (this.props.withTransparentBackground !== false) {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const { mobileMenuOpened } = this.state;
      const hasClassName = refHasClassName(this.navBarRef, "navbar--extended");

      if (scrollTop > navbarHeight || mobileMenuOpened) {
        if (hasClassName) {
          this.navBarRef.current.classList.remove("navbar--extended");
        }
      } else if (!hasClassName) {
        this.navBarRef.current.classList.add("navbar--extended");
      }
    }
  }

  renderLinks() {
    return (
      <ul>
        {this.state.navLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.url}>{link.title}</Link>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { withTransparentBackground = true } = this.props;
    const { mobileMenuOpened } = this.state;
    const mobileMenuStyle = {
      maxHeight: mobileMenuOpened ? 136 : 0
    };

    const navbarClasses = ["navbar"];
    if (withTransparentBackground === true) {
      navbarClasses.push("navbar--extended");
    }

    const Navbar = (
      <div ref={this.navBarRef} className={navbarClasses.join(" ")}>
        <nav className="nav__mobile" style={mobileMenuStyle}>
          {this.renderLinks()}
        </nav>

        <div className="container">
          <div className="navbar__inner">
            <Link to="/" className="navbar__logo">
              CoolCamper
            </Link>
            <nav className="navbar__menu">{this.renderLinks()}</nav>
            <div className="navbar__menu-mob">
              <IconButton onClick={this.toggleBurgerMenu}>
                <BurgerMenuSVG color="currentColor" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    );

    return withTransparentBackground ? (
      <ScrollListener onScroll={this.handleScroll}>{Navbar}</ScrollListener>
    ) : (
      Navbar
    );
  }
}
