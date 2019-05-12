import React from "react";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import withTopProgressBar from "../withTopProgressBar";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Anulare rezervare", url: "/anulare-rezervare" },
  { name: "Termeni și condiții", url: "/termeni-si-conditii" },
  {
    name: "Politica de confidențialitate",
    url: "/politica-de-confidentialitate"
  },
  {
    name: "Politica de cookies",
    url: "/politica-de-cookies"
  }
];

const SimpleLayout = props => (
  <React.Fragment>
    <Navbar withTransparentBackground={false} />
    <div
      style={{
        paddingTop: 60,
        flexGrow: 1
      }}
    >
      <div className="container">
        <div className="app__inner">
          <div className="app__menu">
            <ul className="vMenu">
              <li>
                <NavLink to="/" activeClassName="vMenu--active" exact>
                  Pagina principală
                </NavLink>
              </li>
              {links.map((link, index) => (
                <li key={index}>
                  <NavLink to={link.url} activeClassName="vMenu--active">
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="app__main">
            <div className="text-container">{props.children}</div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </React.Fragment>
);

export default withTopProgressBar(SimpleLayout);
