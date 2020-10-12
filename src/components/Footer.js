import React from "react";
import "./Footer.scss";

const logoImage =
  "https://global-uploads.webflow.com/5bcb46130508ef456a7b2930/5bf413a0903391cd594d9321_logo-export-5.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__info">
          <img src={logoImage} alt="logo" className="footer__logo" />
          <p className="footer__info--desc">
            DrawKit is a <a href="#">designstripe</a> project.
          </p>
        </div>

        <div className="footer__links">
          <h3 className="footer__links--title">designstripe Family</h3>
          <ul className="footer__links--list">
            <li className="footer__links--items">
              <a href="#" className="footer__links--item">
                designstripe →
              </a>
            </li>
            <li className="footer__links--items">
              <a href="#" className="footer__links--item">
                Premium Fonts →
              </a>
            </li>
            <li className="footer__links--items">
              <a href="#" className="footer__links--item">
                DrawKit →
              </a>
            </li>
            <li className="footer__links--items">
              <a href="#" className="footer__links--item">
                Glyphy →
              </a>
            </li>
            <li className="footer__links--items">
              <a href="#" className="footer__links--item">
                Designvalley →
              </a>
            </li>
            <li className="footer__links--items">
              <a href="#" className="footer__links--item">
                Wireframer.art →
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__contact">
          <h3 className="footer__contact--title">Company</h3>
          <ul className="footer__content--list">
            <li className="footer__content--items">
              <a href="#" className="footer__content--item">
                Contact
              </a>
            </li>
            <li className="footer__content--items">
              <a href="#" className="footer__content--item">
                Jobs
              </a>
            </li>
            <li className="footer__content--items">
              <a href="#" className="footer__content--item">
                License
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
