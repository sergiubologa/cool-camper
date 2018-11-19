import React from "react";
import { refHasClassName } from "../../common/utils";
import BurgerMenuSVG from "../svg/burger-menu";

// Height in px for navbar
const navbarHeight = 60;

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.navBarRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.renderLinks = this.renderLinks.bind(this);
    this.toggleBurgerMenu = this.toggleBurgerMenu.bind(this);

    this.state = {
      mobileMenuOpened: false,
      navLinks: [
        { title: "Option 1", url: "#" },
        { title: "Option 2", url: "#" }
      ]
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(event) {
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
        {this.state.navLinks.map(link => (
          <li>
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
      <div ref={this.navBarRef} className="navbar navbar--extended">
        <nav class="nav__mobile" style={mobileMenuStyle}>
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
    );
  }
}
