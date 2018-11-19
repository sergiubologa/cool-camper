import React from "react";
import { refHasClassName } from "../../common/utils";
import BurgerMenuSVG from "../svg/burger-menu";
import ScrollListener from "../scroll-listener";

// Height in px for navbar
const navbarHeight = 60;

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.navBarRef = React.createRef();
    this.renderLinks = this.renderLinks.bind(this);
    this.toggleBurgerMenu = this.toggleBurgerMenu.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      mobileMenuOpened: false,
      navLinks: [
        { title: "Option 1", url: "#" },
        { title: "Option 2", url: "#" }
      ]
    };
  }

  handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > navbarHeight) {
      this.navBarRef.current.classList.remove("navbar--extended");
    } else if (!refHasClassName(this.navBarRef, "navbar--extended")) {
      this.navBarRef.current.classList.add("navbar--extended");
    }
  }

  toggleBurgerMenu(event) {
    event.preventDefault();
    this.setState({
      mobileMenuOpened: !this.state.mobileMenuOpened
    });
  }

  renderLinks() {
    return (
      <ul>
        {this.state.navLinks.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { mobileMenuOpened } = this.state;
    const mobileMenuStyle = {
      maxHeight: mobileMenuOpened ? 136 : 0
    };

    return (
      <ScrollListener handleScroll={this.handleScroll}>
        <div ref={this.navBarRef} className="navbar navbar--extended">
          <nav className="nav__mobile" style={mobileMenuStyle}>
            {this.renderLinks()}
          </nav>

          <div className="container">
            <div className="navbar__inner">
              <a href="index.html" className="navbar__logo">
                Logo
              </a>
              <nav className="navbar__menu">{this.renderLinks()}</nav>
              <div className="navbar__menu-mob">
                <a href="#" onClick={this.toggleBurgerMenu} id="toggle">
                  <BurgerMenuSVG color="currentColor" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollListener>
    );
  }
}
